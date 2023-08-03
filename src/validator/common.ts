export const paggingValidation = {
  page_index: {
    type: 'number'
  },
  page_size: {
    type: 'number'
  },
  sort_order: {
    type: 'string',
    enum: ['asc', 'desc']
  },
  sort_by: {
    type: 'string'
  },
  filters: {
    type: 'array'
  },
  global_value: {
    type: 'string'
  },
  global_filter: {
    type: 'array'
  }
}

export const exportValidation = {
  sort_order: {
    type: 'string',
    enum: ['asc', 'desc']
  },
  sort_by: {
    type: 'string'
  },
  filters: {
    type: 'array'
  },
  global_value: {
    type: 'string'
  },
  global_filter: {
    type: 'array'
  }
}

export const fileUploadValidation = {
  module: {
    required: true,
    type: 'string',
    enum: ['user', 'target']
  },
  media_type: {
    required: true,
    type: 'string',
    enum: ['image', 'video', 'audio', 'document']
  },
  file_type: {
    required: true,
    type: 'string',
    enum: ['original', 'thumbnail']
  }
}