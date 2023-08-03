// helpers
import { queryFieldBuilder } from '../../helpers/query';

// common functions
import { escapeRegExp } from '../../functions/common';

const paginate = (schema: any) => {
  schema.statics.paginate = async function (data: any, condition: any = {}, fieldData: any = {}) {
    const limit = data.page_size && parseInt(data.page_size, 10) > 0 ? parseInt(data.page_size, 10) : 10;
    const page = data.page_index && parseInt(data.page_index, 10) > 0 ? parseInt(data.page_index, 10) : 1;
    const skip = (page - 1) * limit;
    let filters: any = {}, globalFilter: any = [], fieldFilter: any = [];

    if (data && data.global_value && data.global_filter && data.global_filter.length) {
      (data.global_filter || []).forEach((item: any) => globalFilter.push({ [item]: { $regex: escapeRegExp(data.global_value), '$options': 'i' } }));
    }

    if (data && data.filters && data.filters.length) {
      (data.filters || []).forEach((item: any) => fieldFilter.push({ [item.field]: queryFieldBuilder(item) }));
    }

    if (globalFilter && globalFilter.length) filters = { $and: [{ $or: globalFilter }] };

    if (fieldFilter && fieldFilter.length) {
      if (filters.$and) filters.$and.push({ $and: fieldFilter });
      else filters = { $and: [{ $and: fieldFilter }] }
    }

    let filtersObj = Object.assign(filters, condition);

    const countPromise = this.countDocuments(filtersObj).collation({ locale: 'en', strength: 2 }).exec();
    if (!data.sort_order) data.sort_order = -1;
    let docsPromise = this.find(filtersObj, fieldData).collation({ locale: 'en', strength: 2 }).sort([[data.sort_by, data.sort_order]]).skip(skip).limit(limit);

    docsPromise = docsPromise.exec();
    return Promise.all([countPromise, docsPromise]).then((values) => {
      const [totalResults, results] = values;
      const result = {
        count: totalResults,
        list: results
      };
      return Promise.resolve(result);
    });
  };
};

export default paginate;