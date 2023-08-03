export default {
  usrl_id: {
    required: true,
    type: 'string'
  },
  usrl_status: {
    required: true,
    type: 'string',
    enum: ['active', 'inactive']
  }
}