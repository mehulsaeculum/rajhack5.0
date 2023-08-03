export default {
  usrl_name: {
    required: true,
    type: 'string',
    min: 2,
    max: 100
  },
  usrl_status: {
    required: true,
    type: 'string',
    enum: ['active', 'inactive']
  },
  usrl_associate: {
    required: true,
    type: 'string',
    min: 2,
    max: 50
  },
  usrl_desc: {
    type: 'string',
    min: 2
  },
  user_permission: {
    type: 'array',
    min: 1,
    schema: {
      per_name: {
        required: true,
        type: 'string'
      },
      per_id: {
        required: true,
        type: 'string'
      },
      usrl_per_all: {
        required: true,
        type: 'boolean'
      },
      usrl_per_view: {
        required: true,
        type: 'boolean'
      },
      usrl_per_edit: {
        required: true,
        type: 'boolean'
      },
      usrl_per_delete: {
        required: true,
        type: 'boolean'
      },
      usrl_per_create: {
        required: true,
        type: 'boolean'
      },
      usrl_per_approve: {
        required: true,
        type: 'boolean'
      },
      usrl_per_active: {
        required: true,
        type: 'boolean'
      }
    }
  }
}