export default {
  user_id: {
    required: true,
    type: 'string'
  },
  user_email: {
    required: true,
    type: 'email',
    min: 2,
    max: 100
  },
  user_first_name: {
    type: 'string',
    required: true,
    min: 2,
    max: 15
  },
  user_last_name: {
    type: 'string',
    required: true,
    min: 2,
    max: 15
  },
  user_mobile_number: {
    type: 'string',
    min: 2,
    max: 15
  },
  user_image: {
    type: 'object'
  },
  user_status: {
    type: 'string',
    required: true,
    enum: ['active', 'inactive']
  }
}