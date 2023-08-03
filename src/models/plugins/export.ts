// helpers
import { queryFieldBuilder } from '../../helpers/query';

// common functions
import { escapeRegExp } from '../../functions/common';

const fileExport = (schema: any) => {
  schema.statics.fileExport = async function (data: any, condition: any = {}, fieldData: any = {}) {
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

    if (!data.sort_order) data.sort_order = -1;
    let docsPromise = this.find(filtersObj, fieldData).collation({ locale: 'en', strength: 2 }).sort([[data.sort_by, data.sort_order]]);
    docsPromise = docsPromise.exec();

    return Promise.all([docsPromise]).then((values) => {
      const [results] = values;
      const result = { list: results };
      return Promise.resolve(result);
    });
  };
};

export default fileExport;