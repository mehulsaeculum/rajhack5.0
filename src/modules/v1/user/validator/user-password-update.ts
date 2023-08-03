export default {
  user_id: {
    required: true,
    type: 'string'
  },
  user_current_password: {
    required: true,
    type: 'string',
    min: 8,
    pattern: 'passwordValidation',
    messages: {
      'string.pattern.base': 'The password must contain at least one uppercase letter and one special character',
    }
  },
  user_password: {
    required: true,
    type: 'string',
    min: 8,
    pattern: 'passwordValidation',
    messages: {
      'string.pattern.base': 'The password must contain at least one uppercase letter and one special character',
    }
  }
}