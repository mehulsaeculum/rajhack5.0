const targetAdd = {
  '/target': {
    post: {
      tags: ['Target'],
      summary: 'Create a new Target.',
      security: [
        {
          bearerAuth: [],
        }
      ],
      requestBody: {
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                trgt_name: {
                  type: 'string',
                  example: 'Jagran Josh',
                },
                trgt_slug: {
                  type: 'string',
                  example: 'jagran-josh'
                },
                trgt_img: {
                  type: 'string',
                  example: {
                    'original': {
                      'name': '1682167756151-5916af7c-e507-424d-99d4-9ec8a3806af7.jpg',
                      'ext': 'jpg',
                      'mime': 'image/jpeg',
                      'size': {
                        'value': 28048.92,
                        'unit': 'KB'
                      },
                      'width': {
                        'value': 200,
                        'unit': 'px'
                      },
                      'height': {
                        'value': 100,
                        'unit': 'px'
                      },
                      'length': {},
                      'path': 'image/1682167756151-5916af7c-e507-424d-99d4-9ec8a3806af7.jpg'
                    }
                  },
                },
                trgt_color: {
                  type: 'string',
                  example: '#545645644430'
                },
                trgt_domain: {
                  type: 'string',
                  example: 'https://www.jagranjosh.com/'
                },
                trgt_desc: {
                  type: 'string',
                  example: 'Stay updated with education news and jobs on Jagran Josh. Get the latest news on CBSE, ICSE, Board Exams, Government Jobs, Date sheets, Admit cards, Results, etc here.'
                },
                trgt_status: {
                  type: 'string',
                  example: 'active',
                }
              },
            },
          }
        }
      },
      responses: {
        200: {
          description: 'Target has been added successfully.',
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  status: {
                    type: 'number',
                    example: 200
                  },
                  message: {
                    type: 'string',
                    example: 'OK',
                  },
                  data: {
                    type: 'object',
                    example: {
                      'trgt_name': 'Jagran Josh',
                      'trgt_slug': 'jagran-josh',
                      'trgt_img': 'image/target/1681149529753_jagran_josh.png',
                      'trgt_domain': 'https://www.jagranjosh.com/',
                      'trgt_desc': 'Stay updated with education news and jobs on Jagran Josh. Get the latest news on CBSE, ICSE, Board Exams, Government Jobs, Date sheets, Admit cards, Results, etc here.',
                      'trgt_status': 'active',
                      'trgt_created_by': {
                        'user_id': 'aac1edb0-65fd-4c99-a044-3f529db85fcf',
                        'user_name': 'kunjan_thakkar'
                      },
                      'trgt_updated_by': {
                        'user_id': 'aac1edb0-65fd-4c99-a044-3f529db85fcf',
                        'user_name': 'kunjan_thakkar'
                      },
                      'trgt_id': '483837b7-8a8e-49c0-8a07-f0f1b34b6b2e',
                      'trgt_created_on': '2023-04-11T07:07:57.712Z',
                      'trgt_updated_on': '2023-04-11T07:07:57.712Z'
                    }
                  }
                },
              },
            },
          },
        },
        500: {
          description: 'Internal Server Error',
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  status: {
                    type: 'number',
                    example: 500,
                  },
                  message: {
                    type: 'string',
                    example: 'Oops! Something went wrong.',
                  }
                },
              },
            },
          },
        },
      }
    }
  }
}

const targetPagging = {
  '/target/pagging': {
    post: {
      tags: ['Target'],
      summary: 'Get Target list with pagination.',
      security: [
        {
          bearerAuth: [],
        }
      ],
      requestBody: {
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                page_index: {
                  type: 'number',
                  example: 0,
                },
                page_size: {
                  type: 'number',
                  example: 10,
                },
                sort_order: {
                  type: 'string',
                  example: 'desc',
                },
                sort_by: {
                  type: 'string',
                  example: 'trgt_updated_on'
                },
                global_value: {
                  type: 'string',
                  example: 'English'
                },
                global_filter: {
                  type: 'array',
                  example: [
                    'trgt_name',
                    'trgt_slug',
                    'trgt_domain',
                    'trgt_desc',
                    'trgt_status'
                  ]
                },
                filters: {
                  type: 'array',
                  example: [
                    {
                      'field': 'trgt_status',
                      'value': 'active',
                      'type': 'select',
                      'operator': 'eq',
                      'subType': 'string'
                    }
                  ]
                }
              },
            },
          }
        }
      },
      responses: {
        200: {
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  status: {
                    type: 'number',
                    example: 200
                  },
                  message: {
                    type: 'string',
                    example: 'OK',
                  },
                  data: {
                    type: 'object',
                    example: {
                      'count': 1,
                      'list': [
                        {
                          'trgt_name': 'Jagran English',
                          'trgt_slug': 'english-jagran',
                          'trgt_img': {
                            'original': {
                              'name': '1682167756151-5916af7c-e507-424d-99d4-9ec8a3806af7.jpg',
                              'ext': 'jpg',
                              'mime': 'image/jpeg',
                              'size': {
                                'value': 28048.92,
                                'unit': 'KB'
                              },
                              'width': {
                                'value': 200,
                                'unit': 'px'
                              },
                              'height': {
                                'value': 100,
                                'unit': 'px'
                              },
                              'length': {},
                              'path': 'image/1682167756151-5916af7c-e507-424d-99d4-9ec8a3806af7.jpg'
                            }
                          },
                          'trgt_domain': 'http://englishjagran.in',
                          'trgt_color': '#894f29',
                          'trgt_status': 'active',
                          'trgt_created_by': {
                            'user_id': '2ad2a8e6-b7e6-473c-ae37-913aaf033b61',
                            'user_full_name': 'QA Team',
                            'user_email': 'qa@yopmail.com',
                            'user_role': 'Super Admin',
                            'user_image': '',
                            'user_mobile_number': ''
                          },
                          'trgt_updated_by': {
                            'user_id': 'f03a0719-71c6-4603-ab94-6e09cdbcb01b',
                            'user_full_name': 'Abhishek Pal',
                            'user_email': 'abhishek.pal@jagrannewmedia.com',
                            'user_role': 'Super Admin',
                            'user_image': '',
                            'user_mobile_number': ''
                          },
                          'trgt_id': '82d8e272-d6f2-4225-9629-4a4012a43e19',
                          'trgt_created_on': '2023-05-15T11:29:34.042Z',
                          'trgt_updated_on': '2023-06-19T06:14:25.154Z',
                          'trgt_index': 11,
                          'trgt_desc': 'Nice Application'
                        }
                      ]
                    }
                  }
                },
              },
            },
          },
        },
        500: {
          description: 'Internal Server Error',
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  status: {
                    type: 'number',
                    example: 500,
                  },
                  message: {
                    type: 'string',
                    example: 'Oops! Something went wrong.',
                  }
                },
              },
            },
          },
        },
      }
    }
  }
}

const targetGetUpdateDelete = {
  '/target/{trgt_id}': {
    get: {
      tags: ['Target'],
      summary: 'Get Target by ID.',
      security: [
        {
          bearerAuth: [],
        },
      ],
      parameters: [
        {
          'name': 'trgt_id',
          'in': 'path',
          'description': 'The ID of the Target to retrieve',
          'required': true,
          'type': 'string'
        }
      ],
      responses: {
        200: {
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  status: {
                    type: 'number',
                    example: 200
                  },
                  message: {
                    type: 'string',
                    example: 'OK',
                  },
                  data: {
                    type: 'object',
                    example: {
                      'trgt_name': 'Jagran English',
                      'trgt_slug': 'english-jagran',
                      'trgt_img': {
                        'original': {
                          'name': '1682167756151-5916af7c-e507-424d-99d4-9ec8a3806af7.jpg',
                          'ext': 'jpg',
                          'mime': 'image/jpeg',
                          'size': {
                            'value': 28048.92,
                            'unit': 'KB'
                          },
                          'width': {
                            'value': 200,
                            'unit': 'px'
                          },
                          'height': {
                            'value': 100,
                            'unit': 'px'
                          },
                          'length': {},
                          'path': 'image/1682167756151-5916af7c-e507-424d-99d4-9ec8a3806af7.jpg'
                        }
                      },
                      'trgt_domain': 'http://englishjagran.in',
                      'trgt_color': '#894f29',
                      'trgt_status': 'active',
                      'trgt_created_by': {
                        'user_id': '2ad2a8e6-b7e6-473c-ae37-913aaf033b61',
                        'user_full_name': 'QA Team',
                        'user_email': 'qa@yopmail.com',
                        'user_role': 'Super Admin',
                        'user_image': '',
                        'user_mobile_number': ''
                      },
                      'trgt_updated_by': {
                        'user_id': 'f03a0719-71c6-4603-ab94-6e09cdbcb01b',
                        'user_full_name': 'Abhishek Pal',
                        'user_email': 'abhishek.pal@jagrannewmedia.com',
                        'user_role': 'Super Admin',
                        'user_image': '',
                        'user_mobile_number': ''
                      },
                      'trgt_id': '82d8e272-d6f2-4225-9629-4a4012a43e19',
                      'trgt_created_on': '2023-05-15T11:29:34.042Z',
                      'trgt_updated_on': '2023-06-19T06:14:25.154Z',
                      'trgt_index': 11,
                      'trgt_desc': 'Nice Application'
                    }
                  }
                },
              },
            },
          },
        },
        500: {
          description: 'Internal Server Error',
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  status: {
                    type: 'number',
                    example: 500,
                  },
                  message: {
                    type: 'string',
                    example: 'Oops! Something went wrong.',
                  }
                },
              },
            },
          },
        },
      }
    },
    put: {
      tags: ['Target'],
      summary: 'Update an existing Target.',
      security: [
        {
          bearerAuth: [],
        }
      ],
      parameters: [
        {
          'name': 'trgt_id',
          'in': 'path',
          'description': 'The ID of the Target to update',
          'required': true,
          'type': 'string'
        }
      ],
      requestBody: {
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                trgt_name: {
                  type: 'string',
                  example: 'Jagran Josh updated',
                },
                trgt_slug: {
                  type: 'string',
                  example: 'jagran-josh-updated'
                },
                trgt_img: {
                  type: 'object',
                  example: {
                    'original': {
                      'name': '1682167756151-5916af7c-e507-424d-99d4-9ec8a3806af7.jpg',
                      'ext': 'jpg',
                      'mime': 'image/jpeg',
                      'size': {
                        'value': 28048.92,
                        'unit': 'KB'
                      },
                      'width': {
                        'value': 200,
                        'unit': 'px'
                      },
                      'height': {
                        'value': 100,
                        'unit': 'px'
                      },
                      'length': {},
                      'path': 'image/1682167756151-5916af7c-e507-424d-99d4-9ec8a3806af7.jpg'
                    }
                  }
                },
                trgt_color: {
                  type: 'string',
                  example: '#545645644430'
                },
                trgt_domain: {
                  type: 'string',
                  example: 'https://www.jagranjosh.com/'
                },
                trgt_desc: {
                  type: 'string',
                  example: 'Stay updated with education news and jobs on Jagran Josh. Get the latest news on CBSE, ICSE, Board Exams, Government Jobs, Date sheets, Admit cards, Results, etc here.'
                },
                trgt_status: {
                  type: 'string',
                  example: 'active',
                }
              }
            },
          }
        }
      },
      responses: {
        200: {
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  status: {
                    type: 'number',
                    example: 200
                  },
                  message: {
                    type: 'string',
                    example: 'OK',
                  }
                },
              },
            },
          },
        },
        500: {
          description: 'Internal Server Error',
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  status: {
                    type: 'number',
                    example: 500,
                  },
                  message: {
                    type: 'string',
                    example: 'Oops! Something went wrong.',
                  }
                },
              },
            },
          },
        },
      }
    },
    delete: {
      tags: ['Target'],
      summary: 'Delete an existing Target.',
      security: [
        {
          bearerAuth: [],
        }
      ],
      parameters: [
        {
          'name': 'trgt_id',
          'in': 'path',
          'description': 'The ID of the Target to delete',
          'required': true,
          'type': 'string'
        }
      ],
      responses: {
        200: {
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  status: {
                    type: 'number',
                    example: 200
                  },
                  message: {
                    type: 'string',
                    example: 'OK',
                  }
                }
              },
            },
          },
        },
        500: {
          description: 'Internal Server Error',
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  status: {
                    type: 'number',
                    example: 500,
                  },
                  message: {
                    type: 'string',
                    example: 'Oops! Something went wrong.',
                  }
                },
              },
            },
          },
        },
      }
    }
  }
}

const targetStatusUpdate = {
  '/target/{trgt_id}/status': {
    put: {
      tags: ['Target'],
      summary: `Update an existing Target's status.`,
      security: [
        {
          bearerAuth: [],
        }
      ],
      parameters: [
        {
          'name': 'trgt_id',
          'in': 'path',
          'description': 'The ID of the Target to update status',
          'required': true,
          'type': 'string'
        }
      ],
      requestBody: {
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                trgt_status: {
                  type: 'string',
                  example: 'inactive'
                }
              },
            },
          }
        }
      },
      responses: {
        200: {
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  status: {
                    type: 'number',
                    example: 200
                  },
                  message: {
                    type: 'string',
                    example: 'OK',
                  }
                }
              },
            },
          },
        },
        500: {
          description: 'Internal Server Error',
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  status: {
                    type: 'number',
                    example: 500,
                  },
                  message: {
                    type: 'string',
                    example: 'Oops! Something went wrong.',
                  }
                },
              },
            },
          },
        },
      },
    }
  }
}

const targetLookup = {
  '/target/lookup': {
    get: {
      tags: ['Target'],
      summary: 'Get Targets Lookup.',
      security: [
        {
          bearerAuth: [],
        }
      ],
      responses: {
        200: {
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  status: {
                    type: 'number',
                    example: 200
                  },
                  message: {
                    type: 'string',
                    example: 'OK',
                  },
                  data: {
                    type: 'array',
                    example: [
                      {
                        'trgt_name': 'Jagran Josh updated',
                        'trgt_id': '5a315866-7f68-493d-acd6-bb9c23f703c0'
                      },
                      {
                        'trgt_name': 'Nayi Duniya',
                        'trgt_id': '1226e14a-ac95-43c4-b96b-97fbb66c3530'
                      }
                    ]
                  }
                }
              },
            },
          },
        },
        500: {
          description: 'Internal Server Error',
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  status: {
                    type: 'number',
                    example: 500,
                  },
                  message: {
                    type: 'string',
                    example: 'Oops! Something went wrong.',
                  }
                },
              },
            },
          },
        }
      }
    }
  }
}

const targetGetBySlug = {
  '/target/{trgt_slug}/slug': {
    get: {
      tags: ['Target'],
      summary: 'Get Target by target slug.',
      security: [
        {
          bearerAuth: [],
        },
      ],
      parameters: [
        {
          'name': 'trgt_slug',
          'in': 'path',
          'description': 'The slug of the Target to retrieve',
          'required': true,
          'type': 'string'
        }
      ],
      responses: {
        200: {
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  status: {
                    type: 'number',
                    example: 200
                  },
                  message: {
                    type: 'string',
                    example: 'OK',
                  },
                  data: {
                    type: 'object',
                    example: {
                      'trgt_name': 'Nayi Duniya',
                      'trgt_id': '1226e14a-ac95-43c4-b96b-97fbb66c3530'
                    }
                  }
                }
              },
            },
          },
        },
        500: {
          description: 'Internal Server Error',
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  status: {
                    type: 'number',
                    example: 500,
                  },
                  message: {
                    type: 'string',
                    example: 'Oops! Something went wrong.',
                  }
                },
              },
            },
          },
        },
      },
    }
  }
}

const targetExport = {
  '/target/export': {
    post: {
      tags: ['Target'],
      summary: 'Get Target list to Export without pagination.',
      security: [
        {
          bearerAuth: [],
        }
      ],
      requestBody: {
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                sort_order: {
                  type: 'string',
                  example: 'desc',
                },
                sort_by: {
                  type: 'string',
                  example: 'trgt_updated_on'
                },
                global_value: {
                  type: 'string',
                  example: 'English'
                },
                global_filter: {
                  type: 'array',
                  example: [
                    'trgt_name',
                    'trgt_slug',
                    'trgt_domain',
                    'trgt_desc',
                    'trgt_status'
                  ]
                },
                filters: {
                  type: 'array',
                  example: [
                    {
                      'field': 'trgt_status',
                      'value': 'active',
                      'type': 'select',
                      'operator': 'eq',
                      'subType': 'string'
                    }
                  ]
                }
              },
            },
          }
        }
      },
      responses: {
        200: {
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  status: {
                    type: 'number',
                    example: 200
                  },
                  message: {
                    type: 'string',
                    example: 'OK',
                  },
                  data: {
                    type: 'object',
                    example: [
                      {
                        'trgt_name': 'Jagran English',
                        'trgt_slug': 'english-jagran',
                        'trgt_img': {
                          'original': {
                            'name': '1682167756151-5916af7c-e507-424d-99d4-9ec8a3806af7.jpg',
                            'ext': 'jpg',
                            'mime': 'image/jpeg',
                            'size': {
                              'value': 28048.92,
                              'unit': 'KB'
                            },
                            'width': {
                              'value': 200,
                              'unit': 'px'
                            },
                            'height': {
                              'value': 100,
                              'unit': 'px'
                            },
                            'length': {},
                            'path': 'image/1682167756151-5916af7c-e507-424d-99d4-9ec8a3806af7.jpg'
                          }
                        },
                        'trgt_domain': 'http://englishjagran.in',
                        'trgt_color': '#894f29',
                        'trgt_status': 'active',
                        'trgt_created_by': {
                          'user_id': '2ad2a8e6-b7e6-473c-ae37-913aaf033b61',
                          'user_full_name': 'QA Team',
                          'user_email': 'qa@yopmail.com',
                          'user_role': 'Super Admin',
                          'user_image': '',
                          'user_mobile_number': ''
                        },
                        'trgt_updated_by': {
                          'user_id': 'f03a0719-71c6-4603-ab94-6e09cdbcb01b',
                          'user_full_name': 'Abhishek Pal',
                          'user_email': 'abhishek.pal@jagrannewmedia.com',
                          'user_role': 'Super Admin',
                          'user_image': '',
                          'user_mobile_number': ''
                        },
                        'trgt_id': '82d8e272-d6f2-4225-9629-4a4012a43e19',
                        'trgt_created_on': '2023-05-15T11:29:34.042Z',
                        'trgt_updated_on': '2023-06-19T06:14:25.154Z',
                        'trgt_index': 11,
                        'trgt_desc': 'Nice Application'
                      }
                    ]
                  }
                },
              },
            },
          },
        },
        500: {
          description: 'Internal Server Error',
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  status: {
                    type: 'number',
                    example: 500,
                  },
                  message: {
                    type: 'string',
                    example: 'Oops! Something went wrong.',
                  }
                },
              },
            },
          },
        },
      }
    }
  }
}

const targetFileUpload = {
  '/target/file/upload': {
    post: {
      tags: ['Target'],
      summary: 'Upload target image',
      security: [
        {
          bearerAuth: [],
        }
      ],
      requestBody: {
        content: {
          'multipart/form-data': {
            schema: {
              type: 'object',
              properties: {
                file: {
                  type: 'string',
                  format: 'binary'
                },
                media_type: {
                  type: 'string'
                },
                file_type: {
                  type: 'string'
                },
                module: {
                  type: 'string'
                }
              }
            }
          }
        }
      },
      responses: {
        200: {
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  status: {
                    type: 'number',
                    example: 200
                  },
                  message: {
                    type: 'string',
                    example: 'OK',
                  },
                  data: {
                    type: 'object',
                    example: {
                      'file_name': '1687157456720-3777e6ca-0854-4dd1-a62b-e5b331e3ecf9.jpg',
                      'path': 'https://storage.googleapis.com/dev-cms-backend-media/2023-06-19/target/image/1687157456720-3777e6ca-0854-4dd1-a62b-e5b331e3ecf9.jpg',
                      'original_name': 'Quotefancy-18291-3840x2160 (copy).jpg',
                      'name': '1687157456720-3777e6ca-0854-4dd1-a62b-e5b331e3ecf9.jpg',
                      'ext': 'jpg',
                      'mime': 'image/jpeg',
                      'size': {
                        'value': 2.78,
                        'unit': 'MB'
                      },
                      'width': {
                        'value': 3840,
                        'unit': 'px'
                      },
                      'height': {
                        'value': 2160,
                        'unit': 'px'
                      },
                      'length': {}
                    }
                  }
                },
              },
            },
          },
        },
        500: {
          description: 'Internal Server Error',
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  status: {
                    type: 'number',
                    example: 500,
                  },
                  message: {
                    type: 'string',
                    example: 'Oops! Something went wrong.',
                  }
                },
              },
            },
          },
        },
      }
    }
  }
}

const Target = { ...targetAdd, ...targetPagging, ...targetGetUpdateDelete, ...targetStatusUpdate, ...targetLookup, ...targetGetBySlug, ...targetExport, ...targetFileUpload };
export default Target;