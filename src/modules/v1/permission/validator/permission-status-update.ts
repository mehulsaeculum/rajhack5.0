export default {
  per_id: {
    required: true,
    type: 'string'
  },
  per_status: {
    required: true,
    type: 'string',
    enum: ['active', 'inactive']
  }
}