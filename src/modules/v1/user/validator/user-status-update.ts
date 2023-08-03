export default {
  user_id: {
    required: true,
    type: 'string'
  },
  user_status: {
    required: true,
    type: 'string',
    enum: ['active', 'inactive']
  }
}