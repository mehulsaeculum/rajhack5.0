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
  user_last_name: {
    type: 'string',
    required: true,
    min: 2,
    max: 15
  },
  user_first_name: {
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
  user_status: {
    type: 'string',
    required: true,
    enum: ['active', 'inactive']
  },
  user_fk_usrl_id: {
    type: 'string',
    required: true,
  },
  user_name: {
    type: 'string',
    required: true,
    min: 2
  },
  user_target: {
    type: 'array',
    required: true,
    min: 1,
    schema: 'string'
  },
  user_social_link: {
    type: 'Object'
  },
  user_custom_field: {
    type: 'Object'
  }
}