export default {
  user_email: {
    required: true,
    type: 'string',
    min: 2,
    max: 100
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