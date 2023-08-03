export default {
  trgt_id: {
    required: true,
    type: 'string'
  },
  trgt_status: {
    required: true,
    type: 'string',
    enum: ['active', 'inactive']
  }
}