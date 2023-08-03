const permissionCreate = {
  '/permission': {
    post: {
      tags: ['Permission'],
      summary: 'Create a new permission.',
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
                per_name: {
                  type: 'string',
                  example: 'User',
                },
                per_desc: {
                  type: 'string',
                  example: 'permission module is added for permission managment',
                },
                per_type: {
                  type: 'string',
                  example: 'USER_ADD'
                },
                per_parent_id: {
                  type: 'string',
                  example: '41b524e6-53ae-4d92-9839-1c5df7bd24a7'
                },
                per_create: {
                  type: 'boolean',
                  example: true,
                },
                per_view: {
                  type: 'boolean',
                  example: true,
                },
                per_edit: {
                  type: 'boolean',
                  example: true,
                },
                per_delete: {
                  type: 'boolean',
                  example: true,
                },
                per_approve: {
                  type: 'boolean',
                  example: true,
                },
                per_active: {
                  type: 'boolean',
                  example: true,
                },
                per_status: {
                  type: 'string',
                  example: 'Active'
                },
                per_config: {
                  type: 'object',
                  example: {}
                },
                per_custom_field: {
                  type: 'object',
                  example: {
                    per_new_field: 'test'
                  }
                }
              },
            },
          },
          required: true,
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
                      'per_id': '2665095f-4a4f-428a-9866-4868be79a954',
                      'per_name': 'User',
                      'per_type': 'USER_ADD',
                      'per_desc': 'demo description',
                      'per_parent': {
                        'per_id': 'edc39667-a80f-4d4e-b254-df941d4dcc9b',
                        'per_name': 'USER',
                        '_id': '64952b7489e08f5f14e07872'
                      },
                      'per_parent_id': 'edc39667-a80f-4d4e-b254-df941d4dcc9b',
                      'per_create': false,
                      'per_view': true,
                      'per_edit': false,
                      'per_delete': false,
                      'per_approve': false,
                      'per_active': false,
                      'per_status': 'active',
                      'per_created_by': {
                        'user_id': '342ce7f2-2a2d-4e5a-8544-4a06261b091c',
                        'user_full_name': 'Backend Team',
                        'user_email': 'backend@yopmail.com',
                        'user_role': 'Super Admin',
                        'user_image': '',
                        'user_mobile_number': ''
                      },
                      'per_updated_by': {
                        'user_id': '342ce7f2-2a2d-4e5a-8544-4a06261b091c',
                        'user_full_name': 'Backend Team',
                        'user_email': 'backend@yopmail.com',
                        'user_role': 'Super Admin',
                        'user_image': '',
                        'user_mobile_number': ''
                      },
                      'per_created_on': '2023-06-23T05:19:48.180Z',
                      'per_updated_on': '2023-06-23T05:19:48.180Z'
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
};

const permissionPagging = {
  '/permission/pagging': {
    post: {
      tags: ['Permission'],
      summary: 'Get Permission list with pagination.',
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
                  example: 'per_updated_on'
                },
                global_value: {
                  type: 'string',
                  example: 'test'
                },
                global_filter: {
                  type: 'array',
                  example: [
                    'per_name',
                    'per_parent.per_name'
                  ]
                },
                filters: {
                  type: 'array',
                  example: [
                    {
                      'field': 'per_name',
                      'value': 'Test',
                      'type': 'string',
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
                          'per_name': 'Test',
                          'per_parent': {
                            'per_id': 'edc39667-a80f-4d4e-b254-df941d4dcc9b',
                            'per_name': 'Role',
                            '_id': '6494426e89e08f5f14e03c84'
                          },
                          'per_parent_id': 'edc39667-a80f-4d4e-b254-df941d4dcc9b',
                          'per_create': false,
                          'per_view': true,
                          'per_edit': false,
                          'per_delete': false,
                          'per_approve': false,
                          'per_active': false,
                          'per_status': 'active',
                          'per_created_by': {
                            'user_id': '342ce7f2-2a2d-4e5a-8544-4a06261b091c',
                            'user_full_name': 'Backend Team',
                            'user_email': 'backend@yopmail.com',
                            'user_role': 'Super Admin',
                            'user_image': '',
                            'user_mobile_number': ''
                          },
                          'per_updated_by': {
                            'user_id': '342ce7f2-2a2d-4e5a-8544-4a06261b091c',
                            'user_full_name': 'Backend Team',
                            'user_email': 'backend@yopmail.com',
                            'user_role': 'Super Admin',
                            'user_image': '',
                            'user_mobile_number': ''
                          },
                          'per_id': 'a86b11ca-2a26-4105-bce7-fc240e285cc5',
                          'per_created_on': '2023-06-22T12:45:34.705Z',
                          'per_updated_on': '2023-06-22T12:45:34.705Z'
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
};

const permissionGetUpdateDelete = {
  '/permission/{per_id}': {
    get: {
      tags: ['Permission'],
      summary: 'Get Permission by ID.',
      security: [
        {
          bearerAuth: [],
        }
      ],
      parameters: [
        {
          name: 'per_id',
          in: 'path',
          description: 'The ID of the Permission to retrieve',
          required: true,
          type: 'string'
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
                      'per_name': 'Test',
                      'per_parent': {
                        'per_id': 'edc39667-a80f-4d4e-b254-df941d4dcc9b',
                        'per_name': 'Role',
                        '_id': '6494426e89e08f5f14e03c84'
                      },
                      'per_parent_id': 'edc39667-a80f-4d4e-b254-df941d4dcc9b',
                      'per_create': false,
                      'per_view': true,
                      'per_edit': false,
                      'per_delete': false,
                      'per_approve': false,
                      'per_active': false,
                      'per_status': 'active',
                      'per_created_by': {
                        'user_id': '342ce7f2-2a2d-4e5a-8544-4a06261b091c',
                        'user_full_name': 'Backend Team',
                        'user_email': 'backend@yopmail.com',
                        'user_role': 'Super Admin',
                        'user_image': '',
                        'user_mobile_number': ''
                      },
                      'per_updated_by': {
                        'user_id': '342ce7f2-2a2d-4e5a-8544-4a06261b091c',
                        'user_full_name': 'Backend Team',
                        'user_email': 'backend@yopmail.com',
                        'user_role': 'Super Admin',
                        'user_image': '',
                        'user_mobile_number': ''
                      },
                      'per_id': 'a86b11ca-2a26-4105-bce7-fc240e285cc5',
                      'per_created_on': '2023-06-22T12:45:34.705Z',
                      'per_updated_on': '2023-06-22T12:45:34.705Z'
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
    },
    delete: {
      tags: ['Permission'],
      summary: 'Delete an existing Permission.',
      security: [
        {
          bearerAuth: [],
        },
      ],
      parameters: [
        {
          name: 'per_id',
          in: 'path',
          description: 'The ID of the Permission to delete',
          required: true,
          type: 'string'
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
      },
    },
    put: {
      tags: ['Permission'],
      summary: 'Update an existing Permission.',
      security: [
        {
          bearerAuth: [],
        },
      ],
      parameters: [
        {
          name: 'per_id',
          in: 'path',
          description: 'The ID of the Permission to update',
          required: true,
          type: 'string'
        }
      ],
      requestBody: {
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                per_name: {
                  type: 'string',
                  example: 'User',
                },
                per_desc: {
                  type: 'string',
                  example: 'permission module is added for permission managment',
                },
                per_type: {
                  type: 'string',
                  example: 'USER_ADD'
                },
                per_parent_id: {
                  type: 'string',
                  example: '41b524e6-53ae-4d92-9839-1c5df7bd24a7'
                },
                per_create: {
                  type: 'boolean',
                  example: true,
                },
                per_view: {
                  type: 'boolean',
                  example: true,
                },
                per_edit: {
                  type: 'boolean',
                  example: true,
                },
                per_delete: {
                  type: 'boolean',
                  example: true,
                },
                per_approve: {
                  type: 'boolean',
                  example: true,
                },
                per_active: {
                  type: 'boolean',
                  example: true,
                },
                per_status: {
                  type: 'string',
                  example: 'Active'
                },
                per_config: {
                  type: 'object',
                  example: {}
                },
                per_custom_field: {
                  type: 'object',
                  example: {
                    per_new_field: 'test'
                  }
                }
              },
            },
          },
          required: true,
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
    }
  }
};

const permissionAll = {
  '/permission/all': {
    get: {
      tags: ['Permission'],
      summary: 'Get All Permissions.',
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
                        'per_name': 'Test',
                        'per_parent': {
                          'per_id': 'edc39667-a80f-4d4e-b254-df941d4dcc9b',
                          'per_name': 'Role',
                          '_id': '6494426e89e08f5f14e03c84'
                        },
                        'per_parent_id': 'edc39667-a80f-4d4e-b254-df941d4dcc9b',
                        'per_create': false,
                        'per_view': true,
                        'per_edit': false,
                        'per_delete': false,
                        'per_approve': false,
                        'per_active': false,
                        'per_status': 'active',
                        'per_created_by': {
                          'user_id': '342ce7f2-2a2d-4e5a-8544-4a06261b091c',
                          'user_full_name': 'Backend Team',
                          'user_email': 'backend@yopmail.com',
                          'user_role': 'Super Admin',
                          'user_image': '',
                          'user_mobile_number': ''
                        },
                        'per_updated_by': {
                          'user_id': '342ce7f2-2a2d-4e5a-8544-4a06261b091c',
                          'user_full_name': 'Backend Team',
                          'user_email': 'backend@yopmail.com',
                          'user_role': 'Super Admin',
                          'user_image': '',
                          'user_mobile_number': ''
                        },
                        'per_id': 'a86b11ca-2a26-4105-bce7-fc240e285cc5',
                        'per_created_on': '2023-06-22T12:45:34.705Z',
                        'per_updated_on': '2023-06-22T12:45:34.705Z'
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
};

const permissionLookup = {
  '/permission/lookup': {
    get: {
      tags: ['Permission'],
      summary: 'Get Permissions Lookup.',
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
                        'per_id': '5f906f42-c4db-4943-a82b-15ab08ea14e6',
                        'per_name': 'jagran',
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
};

const permissionStatusUpdate = {
  '/permission/{per_id}/status': {
    put: {
      tags: ['Permission'],
      summary: `Update an existing Permission's status.`,
      security: [
        {
          bearerAuth: [],
        }
      ],
      parameters: [
        {
          name: 'per_id',
          in: 'path',
          description: 'The ID of the Permission to update status',
          required: true,
          type: 'string'
        }
      ],
      requestBody: {
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                per_status: {
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
};

const Permission = { ...permissionCreate, ...permissionPagging, ...permissionGetUpdateDelete, ...permissionAll, ...permissionStatusUpdate, ...permissionLookup };
export default Permission;