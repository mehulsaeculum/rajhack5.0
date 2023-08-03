/* eslint-disable no-fallthrough */
export const queryFieldBuilder = ({ operator, value, subType }: any) => {
  switch (operator) {
    case 'neq':
      return { $ne: value }
    case 'in':
      if (subType === 'string') return { $regex: value, '$options': 'i' };
      else return { $in: ((typeof value === 'string') ? (value || '').split(',') : value) }
    case 'nin':
      return { $not: { $regex: value, '$options': 'i' } }
    case 'nl':
      return { $not: { $type: subType } }
    case 'nnl':
      return { $type: subType }
    case 'sw':
      return { $regex: new RegExp(`^${value}`, 'i') }
    case 'ew':
      return { $regex: new RegExp(`${value}$`, 'i') }
    case 'lte':
      if (subType === 'date') {
        value = value.split('T').shift()
        value = `${value}T23:59:59`
      }
      return { $lte: value }
    case 'gte':
      if (subType === 'date') {
        value = value.split('T').shift()
        value = `${value}T00:00:00`
      }
      return { $gte: value }
    case 'lt':
      if (subType === 'date') {
        value = value.split('T').shift()
        value = `${value}T00:00:00`
      }
      return { $lt: value }
    case 'gt':
      if (subType === 'date') {
        value = value.split('T').shift()
        value = `${value}T23:59:59`
      }
      return { $gt: value }
    case 'ltegte':
      if (subType === 'date') {
        value.min = value.min.split('T').shift()
        value.min = `${value.min}T00:00:00`

        value.max = value.max.split('T').shift()
        value.max = `${value.max}T23:59:59`
      }
      return { $gte: value.min, $lte: value.max }
    case 'eq':
      if (subType === 'date') {
        const date = value.split('T').shift();
        return { $gte: `${date}T00:00:00`, $lte: `${date}T23:59:59` }
      }
    default:
      return value;
  }
}
