export default {
  trgt_id: {
    required: true,
    type: 'string'
  },
  trgt_name: {
    required: true,
    type: 'string',
    min: 2, 
    max: 100
  },
  trgt_slug: {
    required: true,
    type: 'string',
    min: 2
  },
  trgt_color: {
    required: true,
    type: 'string',
    min: 2
  },
  trgt_img: {
    required: true,
    type: 'object',
    schema: {
      original: {
        required: true,
        type: 'object',
        schema: {
          name: {
            type: 'string',
            required: true,
            min: 2
          },
          ext: {
            type: 'string',
            required: true,
            min: 2
          },
          mime: {
            type: 'string',
            required: true,
            min: 2
          },
          size: {
            type: 'object',
            required: true,
            schema: {
              value: {
                type: 'number'
              },
              unit: {
                type: 'string'
              }
            }
          },
          width: {
            type: 'object',
            schema: {
              value: {
                type: 'number'
              },
              unit: {
                type: 'string'
              }
            }
          },
          height: {
            type: 'object',
            schema: {
              value: {
                type: 'number'
              },
              unit: {
                type: 'string'
              }
            }
          },
          length: {
            type: 'object',
            schema: {
              value: {
                type: 'number'
              },
              unit: {
                type: 'string'
              }
            }
          },
          path: {
            type: 'string',
            required: true,
            min: 2
          }
        }
      },
      thumbnail: {
        type: 'object',
        schema: {
          name: {
            type: 'string',
            required: true,
            min: 2
          },
          ext: {
            type: 'string',
            required: true,
            min: 2
          },
          mime: {
            type: 'string',
            required: true,
            min: 2
          },
          size: {
            type: 'object',
            required: true,
            schema: {
              value: {
                type: 'number'
              },
              unit: {
                type: 'string'
              }
            }
          },
          width: {
            type: 'object',
            schema: {
              value: {
                type: 'number'
              },
              unit: {
                type: 'string'
              }
            }
          },
          height: {
            type: 'object',
            schema: {
              value: {
                type: 'number'
              },
              unit: {
                type: 'string'
              }
            }
          },
          length: {
            type: 'object',
            schema: {
              value: {
                type: 'number'
              },
              unit: {
                type: 'string'
              }
            }
          },
          path: {
            type: 'string',
            required: true,
            min: 2
          }
        }
      }
    }
  },
  trgt_domain: {
    required: true,
    type: 'string',
    min: 2
  },
  trgt_status: {
    required: true,
    type: 'string',
    enum: ['active', 'inactive']
  },
  trgt_desc: {
    type: 'string',
    min: 2
  }
}