export default {
  per_name: {
    required: true,
    type: 'string',
    min: 2,
    max: 100
  },
  per_desc: {
    type: 'string',
    min: 2
  },
  per_type: {
    type: 'string'
  },
  per_parent_id: {
    type: 'string'
  },
  per_view: {
    required: true,
    type: 'boolean'
  },
  per_create: {
    required: true,
    type: 'boolean'
  },
  per_edit: {
    required: true,
    type: 'boolean'
  },
  per_delete: {
    required: true,
    type: 'boolean'
  },
  per_approve: {
    required: true,
    type: 'boolean'
  },
  per_active: {
    required: true,
    type: 'boolean'
  },
  per_status: {
    required: true,
    type: 'string',
    enum: ['active', 'inactive']
  },
  per_custom_field: {
    type: 'Object'
  }
}
