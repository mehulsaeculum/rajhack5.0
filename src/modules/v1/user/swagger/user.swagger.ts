const userCreate = {
  '/user': {
    post: {
      tags: ['User'],
      summary: 'Create a new user.',
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
                user_first_name: {
                  type: 'string',
                  example: 'Norman',
                },
                user_last_name: {
                  type: 'string',
                  example: 'Beard',
                },
                user_name: {
                  type: 'string',
                  example: 'kylymytiqu'
                },
                user_email: {
                  type: 'string',
                  example: 'xasy@mailinator.com',
                },
                user_password: {
                  type: 'string',
                  description: `unencrypted user's password`,
                  example: 'Pa$$w0rd!',
                },
                user_status: {
                  type: 'string',
                  example: 'active',
                },
                user_fk_usrl_id: {
                  type: 'string',
                  example: '64b7740c-088d-4a87-8540-4d5b0982d197'
                },
                user_target: {
                  type: 'array',
                  example: [
                    '7c06810b-f806-441a-956a-33c447fe7b47',
                    'b610e5c4-1c39-45d1-8986-3e04ad9a6487',
                    'e6802d21-e1df-47fe-adb9-dc44305c391e'
                  ]
                },
                user_social_link: {
                  type: 'Object',
                  example: {
                    instagram: 'https://www.instagram.com/amitabhbachchan',
                    facebook: 'https://www.facebook.com/amitabhbachchan/',
                    twitter: 'https://twitter.com/SrBachchan',
                    linkedin: 'https://in.linkedin.com/in/amitabh-bachchan-06767a23'
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
                  },
                  data: {
                    type: 'object',
                    example: {
                      'user_first_name': 'Norman',
                      'user_last_name': 'Beard',
                      'user_full_name': 'Norman Beard',
                      'user_name': 'kylymytiqu',
                      'user_email': 'xasy@mailinator.com',
                      'user_password': 'eEMQw43YMF6sP2qJN75kjg==',
                      'user_fk_usrl_id': '64b7740c-088d-4a87-8540-4d5b0982d197',
                      'user_role': {
                        'usrl_name': 'Admin',
                        'usrl_id': '64b7740c-088d-4a87-8540-4d5b0982d197'
                      },
                      'user_status': 'active',
                      'user_default_target': null,
                      'user_target': [
                        {
                          'trgt_name': 'i Next',
                          'trgt_slug': 'inext',
                          'trgt_img': 'https://storage.googleapis.com/dev-cms-backend-media/target/1685439573093-2a5672ab-9092-4000-8dac-6021baa90776.png',
                          'trgt_domain': 'https://www.inext.com/',
                          'trgt_desc': 'Dainik Jagran is an Indian Hindi language daily newspaper.',
                          'trgt_status': 'active',
                          'trgt_created_by': {
                            'user_id': '2ad2a8e6-b7e6-473c-ae37-913aaf033b61',
                            'user_full_name': 'QA Team',
                            'user_role': 'Super Admin',
                            'user_image': ''
                          },
                          'trgt_updated_by': {
                            'user_id': '342ce7f2-2a2d-4e5a-8544-4a06261b091c',
                            'user_full_name': 'Backend Team',
                            'user_email': 'backend@yopmail.com',
                            'user_role': 'Super Admin',
                            'user_image': '',
                            'user_mobile_number': ''
                          },
                          'trgt_id': 'e6802d21-e1df-47fe-adb9-dc44305c391e',
                          'trgt_created_on': '2023-04-28T09:18:27.760Z',
                          'trgt_updated_on': '2023-05-30T13:57:29.453Z',
                          'trgt_color': '#fcc4bb',
                          'trgt_index': 12
                        },
                        {
                          'trgt_name': 'Jagran Josh',
                          'trgt_domain': 'https://jagranjosh.com',
                          'trgt_status': 'active',
                          'trgt_id': '7c06810b-f806-441a-956a-33c447fe7b47',
                          'trgt_created_on': '2023-03-02T13:05:29.518Z',
                          'trgt_updated_on': '2023-06-08T12:44:08.804Z',
                          'trgt_desc': 'jagran-josh',
                          'trgt_slug': 'jagran-josh',
                          'trgt_img': 'https://storage.googleapis.com/dev-cms-backend-media/target/1686228239131-298a6b6e-7da9-419a-a4ee-6dad8d6bd907.png',
                          'trgt_updated_by': {
                            'user_id': '2ad2a8e6-b7e6-473c-ae37-913aaf033b61',
                            'user_full_name': 'QA Team',
                            'user_email': 'qa@yopmail.com',
                            'user_role': 'Super Admin',
                            'user_image': '',
                            'user_mobile_number': ''
                          },
                          'trgt_color': 'rgba(250,150,150,0.56)',
                          'trgt_index': 14
                        },
                        {
                          'trgt_name': 'Her Zindagi',
                          'trgt_slug': 'herzindagi',
                          'trgt_img': 'https://storage.googleapis.com/dev-cms-backend-media/target/1685439617962-ee1d4573-93fa-43e6-82ba-775260d1aa7f.png',
                          'trgt_domain': 'https://www.herzindagi.com/',
                          'trgt_desc': 'A Jagran New Media Product. Your very own online BFF! A platform for women, by women.',
                          'trgt_status': 'active',
                          'trgt_created_by': {
                            'user_id': '2ad2a8e6-b7e6-473c-ae37-913aaf033b61',
                            'user_full_name': 'QA Team',
                            'user_role': 'Super Admin',
                            'user_image': ''
                          },
                          'trgt_updated_by': {
                            'user_id': '2ad2a8e6-b7e6-473c-ae37-913aaf033b61',
                            'user_full_name': 'QA Team',
                            'user_email': 'qa@yopmail.com',
                            'user_role': 'Super Admin',
                            'user_image': '',
                            'user_mobile_number': ''
                          },
                          'trgt_id': 'b610e5c4-1c39-45d1-8986-3e04ad9a6487',
                          'trgt_created_on': '2023-04-28T09:16:57.694Z',
                          'trgt_updated_on': '2023-05-31T12:14:12.925Z',
                          'trgt_color': '#eeb1cb',
                          'trgt_index': 15
                        }
                      ],
                      'user_login_attempt': 0,
                      'user_created_by': {
                        'user_id': '342ce7f2-2a2d-4e5a-8544-4a06261b091c',
                        'user_full_name': 'Backend Team',
                        'user_email': 'backend@yopmail.com',
                        'user_role': 'Super Admin',
                        'user_image': '',
                        'user_mobile_number': ''
                      },
                      'user_updated_by': {
                        'user_id': '342ce7f2-2a2d-4e5a-8544-4a06261b091c',
                        'user_full_name': 'Backend Team',
                        'user_email': 'backend@yopmail.com',
                        'user_role': 'Super Admin',
                        'user_image': '',
                        'user_mobile_number': ''
                      },
                      'user_id': '4f0a32bf-1ff3-4f25-b02d-f4782879f6c9',
                      'user_created_on': '2023-06-23T06:43:20.990Z',
                      'user_updated_on': '2023-06-23T06:43:20.990Z'
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
                  message: {
                    type: 'string',
                    example: 'Internal Server Error',
                  },
                },
              },
            },
          },
        },
      }
    }
  }
};

const userPagging = {
  '/user/pagging': {
    post: {
      tags: ['User'],
      summary: 'Get User list with pagination.',
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
                  example: 1,
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
                  example: 'user_updated_on'
                },
                global_value: {
                  type: 'string',
                  example: 'norman'
                },
                global_filter: {
                  type: 'array',
                  example: [
                    'user_first_name',
                    'user_last_name',
                    'user_email',
                    'user_role.usrl_name',
                    'user_created_by.user_full_name'
                  ]
                },
                filters: {
                  type: 'array',
                  example: [
                    {
                      'field': 'user_status',
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
                          'user_first_name': 'Norman',
                          'user_last_name': 'Beard',
                          'user_full_name': 'Norman Beard',
                          'user_name': 'kylymytiqu',
                          'user_email': 'xasy@mailinator.com',
                          'user_password': 'eEMQw43YMF6sP2qJN75kjg==',
                          'user_fk_usrl_id': '64b7740c-088d-4a87-8540-4d5b0982d197',
                          'user_role': {
                            'usrl_name': 'Admin',
                            'usrl_id': '64b7740c-088d-4a87-8540-4d5b0982d197'
                          },
                          'user_status': 'active',
                          'user_default_target': null,
                          'user_target': [
                            {
                              '_id': '644b8f630f997360b346bf0a',
                              'trgt_name': 'i Next',
                              'trgt_slug': 'inext',
                              'trgt_img': 'https://storage.googleapis.com/dev-cms-backend-media/target/1685439573093-2a5672ab-9092-4000-8dac-6021baa90776.png',
                              'trgt_domain': 'https://www.inext.com/',
                              'trgt_desc': 'Dainik Jagran is an Indian Hindi language daily newspaper.',
                              'trgt_status': 'active',
                              'trgt_created_by': {
                                'user_id': '2ad2a8e6-b7e6-473c-ae37-913aaf033b61',
                                'user_full_name': 'QA Team',
                                'user_role': 'Super Admin',
                                'user_image': ''
                              },
                              'trgt_updated_by': {
                                'user_id': '342ce7f2-2a2d-4e5a-8544-4a06261b091c',
                                'user_full_name': 'Backend Team',
                                'user_email': 'backend@yopmail.com',
                                'user_role': 'Super Admin',
                                'user_image': '',
                                'user_mobile_number': ''
                              },
                              'trgt_id': 'e6802d21-e1df-47fe-adb9-dc44305c391e',
                              'trgt_created_on': '2023-04-28T09:18:27.760Z',
                              'trgt_updated_on': '2023-05-30T13:57:29.453Z',
                              '__v': 0,
                              'trgt_color': '#fcc4bb',
                              'trgt_index': 12
                            },
                            {
                              '_id': '64009f1993d66e3cf3935284',
                              'trgt_name': 'Jagran Josh',
                              'trgt_domain': 'https://jagranjosh.com',
                              'trgt_status': 'active',
                              'trgt_id': '7c06810b-f806-441a-956a-33c447fe7b47',
                              'trgt_created_on': '2023-03-02T13:05:29.518Z',
                              'trgt_updated_on': '2023-06-08T12:44:08.804Z',
                              '__v': 0,
                              'trgt_desc': 'jagran-josh',
                              'trgt_slug': 'jagran-josh',
                              'trgt_img': 'https://storage.googleapis.com/dev-cms-backend-media/target/1686228239131-298a6b6e-7da9-419a-a4ee-6dad8d6bd907.png',
                              'trgt_updated_by': {
                                'user_id': '2ad2a8e6-b7e6-473c-ae37-913aaf033b61',
                                'user_full_name': 'QA Team',
                                'user_email': 'qa@yopmail.com',
                                'user_role': 'Super Admin',
                                'user_image': '',
                                'user_mobile_number': ''
                              },
                              'trgt_color': 'rgba(250,150,150,0.56)',
                              'trgt_index': 14
                            },
                            {
                              '_id': '644b8f090f997360b346bef8',
                              'trgt_name': 'Her Zindagi',
                              'trgt_slug': 'herzindagi',
                              'trgt_img': 'https://storage.googleapis.com/dev-cms-backend-media/target/1685439617962-ee1d4573-93fa-43e6-82ba-775260d1aa7f.png',
                              'trgt_domain': 'https://www.herzindagi.com/',
                              'trgt_desc': 'A Jagran New Media Product. Your very own online BFF! A platform for women, by women.',
                              'trgt_status': 'active',
                              'trgt_created_by': {
                                'user_id': '2ad2a8e6-b7e6-473c-ae37-913aaf033b61',
                                'user_full_name': 'QA Team',
                                'user_role': 'Super Admin',
                                'user_image': ''
                              },
                              'trgt_updated_by': {
                                'user_id': '2ad2a8e6-b7e6-473c-ae37-913aaf033b61',
                                'user_full_name': 'QA Team',
                                'user_email': 'qa@yopmail.com',
                                'user_role': 'Super Admin',
                                'user_image': '',
                                'user_mobile_number': ''
                              },
                              'trgt_id': 'b610e5c4-1c39-45d1-8986-3e04ad9a6487',
                              'trgt_created_on': '2023-04-28T09:16:57.694Z',
                              'trgt_updated_on': '2023-05-31T12:14:12.925Z',
                              '__v': 0,
                              'trgt_color': '#eeb1cb',
                              'trgt_index': 15
                            }
                          ],
                          'user_login_attempt': 0,
                          'user_social_link': {
                            'facebook': 'https://www.facebook.com/amitabhbachchan/',
                            'instagram': 'https://www.instagram.com/amitabhbachchan',
                            'twitter': 'https://twitter.com/SrBachchan'
                          },
                          'user_created_by': {
                            'user_id': '342ce7f2-2a2d-4e5a-8544-4a06261b091c',
                            'user_full_name': 'Backend Team',
                            'user_email': 'backend@yopmail.com',
                            'user_role': 'Super Admin',
                            'user_image': '',
                            'user_mobile_number': ''
                          },
                          'user_updated_by': {
                            'user_id': '342ce7f2-2a2d-4e5a-8544-4a06261b091c',
                            'user_full_name': 'Backend Team',
                            'user_email': 'backend@yopmail.com',
                            'user_role': 'Super Admin',
                            'user_image': '',
                            'user_mobile_number': ''
                          },
                          'user_id': '4f0a32bf-1ff3-4f25-b02d-f4782879f6c9',
                          'user_created_on': '2023-06-23T06:43:20.990Z',
                          'user_updated_on': '2023-06-23T06:43:20.990Z'
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

const userExport = {
  '/user/export': {
    post: {
      tags: ['User'],
      summary: 'Get User list with Filters.',
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
                  example: 'user_updated_on'
                },
                global_value: {
                  type: 'string',
                  example: 'norman'
                },
                global_filter: {
                  type: 'array',
                  example: [
                    'user_first_name',
                    'user_last_name',
                    'user_email',
                    'user_role.usrl_name',
                    'user_created_by.user_full_name'
                  ]
                },
                filters: {
                  type: 'array',
                  example: [
                    {
                      'field': 'user_status',
                      'value': 'active',
                      'type': 'select',
                      'operator': 'eq',
                      'subType': 'string'
                    }
                  ]
                }
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
                  type: 'array',
                  example: [
                    {
                      'user_first_name': 'Norman',
                      'user_last_name': 'Beard',
                      'user_full_name': 'Norman Beard',
                      'user_name': 'kylymytiqu',
                      'user_email': 'xasy@mailinator.com',
                      'user_password': 'eEMQw43YMF6sP2qJN75kjg==',
                      'user_fk_usrl_id': '64b7740c-088d-4a87-8540-4d5b0982d197',
                      'user_role': {
                        'usrl_name': 'Admin',
                        'usrl_id': '64b7740c-088d-4a87-8540-4d5b0982d197'
                      },
                      'user_status': 'active',
                      'user_default_target': null,
                      'user_target': [
                        {
                          '_id': '644b8f630f997360b346bf0a',
                          'trgt_name': 'i Next',
                          'trgt_slug': 'inext',
                          'trgt_img': 'https://storage.googleapis.com/dev-cms-backend-media/target/1685439573093-2a5672ab-9092-4000-8dac-6021baa90776.png',
                          'trgt_domain': 'https://www.inext.com/',
                          'trgt_desc': 'Dainik Jagran is an Indian Hindi language daily newspaper.',
                          'trgt_status': 'active',
                          'trgt_created_by': {
                            'user_id': '2ad2a8e6-b7e6-473c-ae37-913aaf033b61',
                            'user_full_name': 'QA Team',
                            'user_role': 'Super Admin',
                            'user_image': ''
                          },
                          'trgt_updated_by': {
                            'user_id': '342ce7f2-2a2d-4e5a-8544-4a06261b091c',
                            'user_full_name': 'Backend Team',
                            'user_email': 'backend@yopmail.com',
                            'user_role': 'Super Admin',
                            'user_image': '',
                            'user_mobile_number': ''
                          },
                          'trgt_id': 'e6802d21-e1df-47fe-adb9-dc44305c391e',
                          'trgt_created_on': '2023-04-28T09:18:27.760Z',
                          'trgt_updated_on': '2023-05-30T13:57:29.453Z',
                          '__v': 0,
                          'trgt_color': '#fcc4bb',
                          'trgt_index': 12
                        },
                        {
                          '_id': '64009f1993d66e3cf3935284',
                          'trgt_name': 'Jagran Josh',
                          'trgt_domain': 'https://jagranjosh.com',
                          'trgt_status': 'active',
                          'trgt_id': '7c06810b-f806-441a-956a-33c447fe7b47',
                          'trgt_created_on': '2023-03-02T13:05:29.518Z',
                          'trgt_updated_on': '2023-06-08T12:44:08.804Z',
                          '__v': 0,
                          'trgt_desc': 'jagran-josh',
                          'trgt_slug': 'jagran-josh',
                          'trgt_img': 'https://storage.googleapis.com/dev-cms-backend-media/target/1686228239131-298a6b6e-7da9-419a-a4ee-6dad8d6bd907.png',
                          'trgt_updated_by': {
                            'user_id': '2ad2a8e6-b7e6-473c-ae37-913aaf033b61',
                            'user_full_name': 'QA Team',
                            'user_email': 'qa@yopmail.com',
                            'user_role': 'Super Admin',
                            'user_image': '',
                            'user_mobile_number': ''
                          },
                          'trgt_color': 'rgba(250,150,150,0.56)',
                          'trgt_index': 14
                        },
                        {
                          '_id': '644b8f090f997360b346bef8',
                          'trgt_name': 'Her Zindagi',
                          'trgt_slug': 'herzindagi',
                          'trgt_img': 'https://storage.googleapis.com/dev-cms-backend-media/target/1685439617962-ee1d4573-93fa-43e6-82ba-775260d1aa7f.png',
                          'trgt_domain': 'https://www.herzindagi.com/',
                          'trgt_desc': 'A Jagran New Media Product. Your very own online BFF! A platform for women, by women.',
                          'trgt_status': 'active',
                          'trgt_created_by': {
                            'user_id': '2ad2a8e6-b7e6-473c-ae37-913aaf033b61',
                            'user_full_name': 'QA Team',
                            'user_role': 'Super Admin',
                            'user_image': ''
                          },
                          'trgt_updated_by': {
                            'user_id': '2ad2a8e6-b7e6-473c-ae37-913aaf033b61',
                            'user_full_name': 'QA Team',
                            'user_email': 'qa@yopmail.com',
                            'user_role': 'Super Admin',
                            'user_image': '',
                            'user_mobile_number': ''
                          },
                          'trgt_id': 'b610e5c4-1c39-45d1-8986-3e04ad9a6487',
                          'trgt_created_on': '2023-04-28T09:16:57.694Z',
                          'trgt_updated_on': '2023-05-31T12:14:12.925Z',
                          '__v': 0,
                          'trgt_color': '#eeb1cb',
                          'trgt_index': 15
                        }
                      ],
                      'user_login_attempt': 0,
                      'user_social_link': {
                        'facebook': 'https://www.facebook.com/amitabhbachchan/',
                        'instagram': 'https://www.instagram.com/amitabhbachchan',
                        'twitter': 'https://twitter.com/SrBachchan'
                      },
                      'user_created_by': {
                        'user_id': '342ce7f2-2a2d-4e5a-8544-4a06261b091c',
                        'user_full_name': 'Backend Team',
                        'user_email': 'backend@yopmail.com',
                        'user_role': 'Super Admin',
                        'user_image': '',
                        'user_mobile_number': ''
                      },
                      'user_updated_by': {
                        'user_id': '342ce7f2-2a2d-4e5a-8544-4a06261b091c',
                        'user_full_name': 'Backend Team',
                        'user_email': 'backend@yopmail.com',
                        'user_role': 'Super Admin',
                        'user_image': '',
                        'user_mobile_number': ''
                      },
                      'user_id': '4f0a32bf-1ff3-4f25-b02d-f4782879f6c9',
                      'user_created_on': '2023-06-23T06:43:20.990Z',
                      'user_updated_on': '2023-06-23T06:43:20.990Z'
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
};

const userGetUpdateDelete = {
  '/user/{user_id}': {
    get: {
      tags: ['User'],
      summary: 'Get User by ID.',
      security: [
        {
          bearerAuth: [],
        }
      ],
      parameters: [
        {
          name: 'user_id',
          in: 'path',
          description: 'The ID of the User to retrieve',
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
                      'user_first_name': 'Norman',
                      'user_last_name': 'Beard',
                      'user_full_name': 'Norman Beard',
                      'user_name': 'kylymytiqu',
                      'user_email': 'xasy@mailinator.com',
                      'user_fk_usrl_id': '64b7740c-088d-4a87-8540-4d5b0982d197',
                      'user_role': {
                        'usrl_name': 'Admin',
                        'usrl_id': '64b7740c-088d-4a87-8540-4d5b0982d197'
                      },
                      'user_status': 'active',
                      'user_default_target': null,
                      'user_target': [
                        {
                          '_id': '644b8f630f997360b346bf0a',
                          'trgt_name': 'i Next',
                          'trgt_slug': 'inext',
                          'trgt_img': 'https://storage.googleapis.com/dev-cms-backend-media/target/1685439573093-2a5672ab-9092-4000-8dac-6021baa90776.png',
                          'trgt_domain': 'https://www.inext.com/',
                          'trgt_desc': 'Dainik Jagran is an Indian Hindi language daily newspaper.',
                          'trgt_status': 'active',
                          'trgt_created_by': {
                            'user_id': '2ad2a8e6-b7e6-473c-ae37-913aaf033b61',
                            'user_full_name': 'QA Team',
                            'user_role': 'Super Admin',
                            'user_image': ''
                          },
                          'trgt_updated_by': {
                            'user_id': '342ce7f2-2a2d-4e5a-8544-4a06261b091c',
                            'user_full_name': 'Backend Team',
                            'user_email': 'backend@yopmail.com',
                            'user_role': 'Super Admin',
                            'user_image': '',
                            'user_mobile_number': ''
                          },
                          'trgt_id': 'e6802d21-e1df-47fe-adb9-dc44305c391e',
                          'trgt_created_on': '2023-04-28T09:18:27.760Z',
                          'trgt_updated_on': '2023-05-30T13:57:29.453Z',
                          '__v': 0,
                          'trgt_color': '#fcc4bb',
                          'trgt_index': 12
                        },
                        {
                          '_id': '64009f1993d66e3cf3935284',
                          'trgt_name': 'Jagran Josh',
                          'trgt_domain': 'https://jagranjosh.com',
                          'trgt_status': 'active',
                          'trgt_id': '7c06810b-f806-441a-956a-33c447fe7b47',
                          'trgt_created_on': '2023-03-02T13:05:29.518Z',
                          'trgt_updated_on': '2023-06-08T12:44:08.804Z',
                          '__v': 0,
                          'trgt_desc': 'jagran-josh',
                          'trgt_slug': 'jagran-josh',
                          'trgt_img': 'https://storage.googleapis.com/dev-cms-backend-media/target/1686228239131-298a6b6e-7da9-419a-a4ee-6dad8d6bd907.png',
                          'trgt_updated_by': {
                            'user_id': '2ad2a8e6-b7e6-473c-ae37-913aaf033b61',
                            'user_full_name': 'QA Team',
                            'user_email': 'qa@yopmail.com',
                            'user_role': 'Super Admin',
                            'user_image': '',
                            'user_mobile_number': ''
                          },
                          'trgt_color': 'rgba(250,150,150,0.56)',
                          'trgt_index': 14
                        },
                        {
                          '_id': '644b8f090f997360b346bef8',
                          'trgt_name': 'Her Zindagi',
                          'trgt_slug': 'herzindagi',
                          'trgt_img': 'https://storage.googleapis.com/dev-cms-backend-media/target/1685439617962-ee1d4573-93fa-43e6-82ba-775260d1aa7f.png',
                          'trgt_domain': 'https://www.herzindagi.com/',
                          'trgt_desc': 'A Jagran New Media Product. Your very own online BFF! A platform for women, by women.',
                          'trgt_status': 'active',
                          'trgt_created_by': {
                            'user_id': '2ad2a8e6-b7e6-473c-ae37-913aaf033b61',
                            'user_full_name': 'QA Team',
                            'user_role': 'Super Admin',
                            'user_image': ''
                          },
                          'trgt_updated_by': {
                            'user_id': '2ad2a8e6-b7e6-473c-ae37-913aaf033b61',
                            'user_full_name': 'QA Team',
                            'user_email': 'qa@yopmail.com',
                            'user_role': 'Super Admin',
                            'user_image': '',
                            'user_mobile_number': ''
                          },
                          'trgt_id': 'b610e5c4-1c39-45d1-8986-3e04ad9a6487',
                          'trgt_created_on': '2023-04-28T09:16:57.694Z',
                          'trgt_updated_on': '2023-05-31T12:14:12.925Z',
                          '__v': 0,
                          'trgt_color': '#eeb1cb',
                          'trgt_index': 15
                        }
                      ],
                      'user_social_link': {
                        'facebook': 'https://www.facebook.com/amitabhbachchan/',
                        'instagram': 'https://www.instagram.com/amitabhbachchan',
                        'twitter': 'https://twitter.com/SrBachchan'
                      },
                      'user_created_by': {
                        'user_id': '342ce7f2-2a2d-4e5a-8544-4a06261b091c',
                        'user_full_name': 'Backend Team',
                        'user_email': 'backend@yopmail.com',
                        'user_role': 'Super Admin',
                        'user_image': '',
                        'user_mobile_number': ''
                      },
                      'user_updated_by': {
                        'user_id': '342ce7f2-2a2d-4e5a-8544-4a06261b091c',
                        'user_full_name': 'Backend Team',
                        'user_email': 'backend@yopmail.com',
                        'user_role': 'Super Admin',
                        'user_image': '',
                        'user_mobile_number': ''
                      },
                      'user_id': '4f0a32bf-1ff3-4f25-b02d-f4782879f6c9',
                      'user_created_on': '2023-06-23T06:43:20.990Z',
                      'user_updated_on': '2023-06-23T06:43:20.990Z',
                      '__v': 0,
                      'access': {
                        'usrl_name': 'Admin',
                        'usrl_status': 'active',
                        'usrl_updated_by': {
                          'user_id': '2ad2a8e6-b7e6-473c-ae37-913aaf033b61',
                          'user_full_name': 'QA Team',
                          'user_email': 'qa@yopmail.com',
                          'user_role': 'Admin',
                          'user_image': '',
                          'user_mobile_number': ''
                        },
                        'usrl_id': '64b7740c-088d-4a87-8540-4d5b0982d197',
                        'usrl_created_on': '2023-03-07T06:46:33.664Z',
                        'usrl_updated_on': '2023-06-07T06:12:37.854Z',
                        'usrl_permission': [
                          {
                            'per_name': 'User',
                            'per_id': 'e28418bd-6b09-4169-848b-7b25689348f5',
                            'usrl_per_view': true,
                            'usrl_per_edit': true,
                            'usrl_per_delete': true,
                            'usrl_per_create': true,
                            'usrl_per_approve': true,
                            'usrl_per_active': true,
                            '_id': '644b6e8e0f997360b346b792'
                          },
                          {
                            'per_name': 'Role',
                            'per_id': 'edc39667-a80f-4d4e-b254-df941d4dcc9b',
                            'usrl_per_view': true,
                            'usrl_per_edit': true,
                            'usrl_per_delete': true,
                            'usrl_per_create': true,
                            'usrl_per_approve': true,
                            'usrl_per_active': true,
                            '_id': '644b6e8e0f997360b346b793'
                          },
                          {
                            'per_name': 'Approval Workflow',
                            'per_id': '4c76e390-1aa6-4b28-b844-4a0db44470e9',
                            'usrl_per_view': true,
                            'usrl_per_edit': true,
                            'usrl_per_delete': true,
                            'usrl_per_create': true,
                            'usrl_per_approve': true,
                            'usrl_per_active': true,
                            '_id': '644b6e8e0f997360b346b794'
                          },
                          {
                            'per_name': 'Target System',
                            'per_id': 'eff502cf-ffe7-49ab-9f74-a4f636bb204e',
                            'usrl_per_view': true,
                            'usrl_per_edit': false,
                            'usrl_per_delete': false,
                            'usrl_per_create': false,
                            'usrl_per_approve': false,
                            '_id': '644b6e8e0f997360b346b795'
                          },
                          {
                            'per_name': 'Event/Activity',
                            'per_id': '61c04c77-df06-4854-8451-4c573222cebf',
                            'usrl_per_view': true,
                            'usrl_per_edit': true,
                            'usrl_per_delete': true,
                            'usrl_per_create': true,
                            'usrl_per_approve': true,
                            '_id': '644b6e8e0f997360b346b796'
                          },
                          {
                            'per_name': 'Tags',
                            'per_id': '7156a3b4-465a-4906-8bde-2bb01912d901',
                            'usrl_per_view': true,
                            'usrl_per_edit': true,
                            'usrl_per_delete': true,
                            'usrl_per_create': true,
                            'usrl_per_approve': true,
                            '_id': '644b6e8e0f997360b346b797'
                          },
                          {
                            'per_name': 'Create Template',
                            'per_id': '2db48860-0e28-432c-9a8a-fc26671af063',
                            'usrl_per_view': true,
                            'usrl_per_edit': true,
                            'usrl_per_delete': true,
                            'usrl_per_create': true,
                            'usrl_per_approve': true,
                            'usrl_per_active': true,
                            '_id': '644b6e8e0f997360b346b798'
                          },
                          {
                            'per_name': 'Categories',
                            'per_id': '634bbae2-cb0a-4869-9f8a-00bdc0eb1389',
                            'usrl_per_view': true,
                            'usrl_per_edit': true,
                            'usrl_per_delete': true,
                            'usrl_per_create': true,
                            'usrl_per_approve': true,
                            '_id': '644b6e8e0f997360b346b799'
                          },
                          {
                            'per_name': 'Faq',
                            'per_id': '383d5e9b-ee1b-4146-bbf0-f3113e778b65',
                            'usrl_per_view': true,
                            'usrl_per_edit': true,
                            'usrl_per_delete': true,
                            'usrl_per_create': true,
                            'usrl_per_approve': true,
                            'usrl_per_active': true,
                            '_id': '644b6e8e0f997360b346b79a'
                          },
                          {
                            'per_name': 'Feed',
                            'per_id': '1c913287-1016-46c9-927a-b4025b22adf6',
                            'usrl_per_view': true,
                            'usrl_per_edit': true,
                            'usrl_per_active': true,
                            '_id': '644b6e8e0f997360b346b79b'
                          },
                          {
                            'per_name': 'Notification',
                            'per_id': 'fd1a5b19-617c-46ae-b2b4-e41fc654b07f',
                            'usrl_per_view': true,
                            'usrl_per_edit': true,
                            'usrl_per_delete': true,
                            'usrl_per_create': true,
                            'usrl_per_approve': true,
                            'usrl_per_active': true,
                            '_id': '644b6e8e0f997360b346b79c'
                          },
                          {
                            'per_name': 'Comment',
                            'per_id': '6b348319-8ade-4f0b-8488-15bb5ba1d4be',
                            'usrl_per_view': true,
                            'usrl_per_edit': true,
                            'usrl_per_approve': true,
                            'usrl_per_active': true,
                            '_id': '644b6e8e0f997360b346b79d'
                          },
                          {
                            'per_name': 'Menu Category',
                            'per_id': '69c71316-817c-40e4-b408-3c1308b825ca',
                            'usrl_per_view': true,
                            'usrl_per_edit': true,
                            'usrl_per_delete': true,
                            'usrl_per_create': true,
                            'usrl_per_approve': true,
                            '_id': '644b6e8e0f997360b346b79e'
                          },
                          {
                            'per_name': 'Image Size',
                            'per_id': '71271981-64e3-4719-8966-33c5521e9805',
                            'usrl_per_view': true,
                            'usrl_per_edit': true,
                            'usrl_per_delete': true,
                            'usrl_per_create': true,
                            'usrl_per_approve': true,
                            '_id': '644b6e8e0f997360b346b79f'
                          },
                          {
                            'per_name': 'Topic',
                            'per_id': '3f7bd0be-517e-46c7-9684-cf9ca5c8ceea',
                            'usrl_per_view': true,
                            'usrl_per_edit': true,
                            'usrl_per_delete': true,
                            'usrl_per_create': true,
                            'usrl_per_approve': true,
                            'usrl_per_active': true,
                            '_id': '644b6e8e0f997360b346b7a0'
                          },
                          {
                            'per_name': 'My Profile',
                            'per_id': '19b2d2ca-c012-40e3-bbca-00d39c64c8d4',
                            'usrl_per_view': true,
                            'usrl_per_edit': true,
                            'usrl_per_create': true,
                            '_id': '64749e14454a6f6e88945245'
                          },
                          {
                            'per_name': 'Collection',
                            'per_id': 'ffa0753c-ba25-4c5d-b54d-57d0500ccf29',
                            'usrl_per_view': true,
                            'usrl_per_edit': true,
                            'usrl_per_create': true,
                            '_id': '64749e14454a6f6e88945246'
                          },
                          {
                            'per_name': 'Ftp Collection',
                            'per_id': '54938ce9-26b9-4252-b4aa-6d262f820a21',
                            'usrl_per_view': true,
                            'usrl_per_edit': true,
                            'usrl_per_create': true,
                            '_id': '64749e14454a6f6e88945247'
                          },
                          {
                            'per_name': 'Audit Log',
                            'per_id': '05accbbd-6f1b-41bf-88ee-89d971673c82',
                            'usrl_per_view': true,
                            '_id': '64749e14454a6f6e88945248'
                          },
                          {
                            'per_name': 'Create Article',
                            'per_id': '9c99bf3e-a2d1-4351-88ea-dcdbbe0bc577',
                            'usrl_per_view': true,
                            'usrl_per_edit': true,
                            'usrl_per_delete': true,
                            'usrl_per_create': true,
                            'usrl_per_approve': true,
                            'usrl_per_active': true,
                            '_id': '64749e14454a6f6e88945249'
                          },
                          {
                            'per_name': 'Meta tags',
                            'per_id': '9325fca8-4124-4f07-91c5-83bfa36c83bb',
                            'usrl_per_view': true,
                            'usrl_per_edit': true,
                            'usrl_per_delete': true,
                            'usrl_per_create': true,
                            'usrl_per_approve': true,
                            'usrl_per_active': true,
                            '_id': '64749e14454a6f6e8894524a'
                          },
                          {
                            'per_name': 'Media',
                            'per_id': 'c355b748-8014-45bd-8c30-20f3d9dacf4d',
                            'usrl_per_view': true,
                            'usrl_per_edit': true,
                            'usrl_per_delete': true,
                            'usrl_per_create': true,
                            'usrl_per_approve': true,
                            'usrl_per_active': true,
                            '_id': '64784c65e357673c27653a4a'
                          },
                          {
                            'per_name': 'Global Setting',
                            'per_id': 'b7c95f33-4b6a-4e81-bc31-583a26c62641',
                            'usrl_per_view': true,
                            'usrl_per_edit': true,
                            'usrl_per_delete': true,
                            'usrl_per_create': true,
                            'usrl_per_approve': true,
                            'usrl_per_active': true,
                            '_id': '64784edfe357673c27654488'
                          },
                          {
                            'per_name': 'Review Article',
                            'per_id': '640b5777-dc58-4eb7-b740-4a7a96b919eb',
                            'usrl_per_view': true,
                            '_id': '647d8a1865dd56f35f2e4845'
                          },
                          {
                            'per_name': 'My Task',
                            'per_id': '46212608-18cf-48e2-b571-febbbc0c9565',
                            'usrl_per_view': true,
                            'usrl_per_edit': true,
                            'usrl_per_delete': true,
                            'usrl_per_create': true,
                            'usrl_per_approve': true,
                            'usrl_per_active': true,
                            '_id': '64801fd594aac3cb08607e0b'
                          }
                        ],
                        'usrl_default': true,
                        'usrl_associate': 'Admin'
                      }
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
      tags: ['User'],
      summary: 'Delete an existing User.',
      security: [
        {
          bearerAuth: [],
        },
      ],
      parameters: [
        {
          name: 'user_id',
          in: 'path',
          description: 'The ID of the User to delete',
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
      tags: ['User'],
      summary: 'Update an existing User.',
      security: [
        {
          bearerAuth: [],
        },
      ],
      parameters: [
        {
          name: 'user_id',
          in: 'path',
          description: 'The ID of the User to update',
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
                user_first_name: {
                  type: 'string',
                  example: 'Norman',
                },
                user_last_name: {
                  type: 'string',
                  example: 'Beard',
                },
                user_name: {
                  type: 'string',
                  example: 'kylymytiqu'
                },
                user_email: {
                  type: 'string',
                  example: 'sas@mailinator.com',
                },
                user_password: {
                  type: 'string',
                  description: `unencrypted user's password`,
                  example: 'Pa$$w0rd!',
                },
                user_status: {
                  type: 'string',
                  example: 'active',
                },
                user_fk_usrl_id: {
                  type: 'string',
                  example: '64b7740c-088d-4a87-8540-4d5b0982d197'
                },
                user_target: {
                  type: 'array',
                  example: [
                    '7c06810b-f806-441a-956a-33c447fe7b47',
                    'b610e5c4-1c39-45d1-8986-3e04ad9a6487',
                    'e6802d21-e1df-47fe-adb9-dc44305c391e'
                  ]
                },
                user_social_link: {
                  type: 'Object',
                  example: {
                    instagram: 'https://www.instagram.com/amitabhbachchan',
                    facebook: 'https://www.facebook.com/amitabhbachchan/',
                    twitter: 'https://twitter.com/SrBachchan',
                    linkedin: 'https://in.linkedin.com/in/amitabh-bachchan-06767a23'
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

const bulkUserGet = {
  '/user/bulk': {
    post: {
      tags: ['User'],
      summary: 'Get User list from Multiple userids.',
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
                ids: {
                  type: 'array',
                  example: [
                    '4a3db43e-c840-4649-8378-ccda4f916f33'
                  ]
                },
                not_in: {
                  type: 'boolean',
                  example: false
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
                    type: 'array',
                    example: [
                      {
                        user_id: '4a3db43e-c840-4649-8378-ccda4f916f33',
                        user_name: 'admin',
                        user_email: 'admin@yopmail.com',
                        user_image: 'https://i.pinimg.com/736x/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg',
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
};

const userLookup = {
  '/user/lookup': {
    get: {
      tags: ['User'],
      summary: 'Get Users Lookup.',
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
                        'user_id': '5f906f42-c4db-4943-a82b-15ab08ea14e6',
                        'user_name': 'jagran',
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

const userStatusUpdate = {
  '/user/{user_id}/status': {
    put: {
      tags: ['User'],
      summary: `Update an existing User's status.`,
      security: [
        {
          bearerAuth: [],
        }
      ],
      parameters: [
        {
          name: 'user_id',
          in: 'path',
          description: 'The ID of the User to update status',
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
                user_status: {
                  type: 'string',
                  enum: ['active', 'inactive']
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

const userProfileGet = {
  '/user/profile': {
    get: {
      tags: ['User'],
      summary: 'Get User Profile.',
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
                    type: 'object',
                    example: {
                      'user_first_name': 'Norman',
                      'user_last_name': 'Beard',
                      'user_full_name': 'Norman Beard',
                      'user_name': 'kylymytiqu',
                      'user_email': 'xasy@mailinator.com',
                      'user_fk_usrl_id': '64b7740c-088d-4a87-8540-4d5b0982d197',
                      'user_role': {
                        'usrl_name': 'Admin',
                        'usrl_id': '64b7740c-088d-4a87-8540-4d5b0982d197'
                      },
                      'user_status': 'active',
                      'user_default_target': null,
                      'user_target': [
                        {
                          '_id': '644b8f630f997360b346bf0a',
                          'trgt_name': 'i Next',
                          'trgt_slug': 'inext',
                          'trgt_img': 'https://storage.googleapis.com/dev-cms-backend-media/target/1685439573093-2a5672ab-9092-4000-8dac-6021baa90776.png',
                          'trgt_domain': 'https://www.inext.com/',
                          'trgt_desc': 'Dainik Jagran is an Indian Hindi language daily newspaper.',
                          'trgt_status': 'active',
                          'trgt_created_by': {
                            'user_id': '2ad2a8e6-b7e6-473c-ae37-913aaf033b61',
                            'user_full_name': 'QA Team',
                            'user_role': 'Super Admin',
                            'user_image': ''
                          },
                          'trgt_updated_by': {
                            'user_id': '342ce7f2-2a2d-4e5a-8544-4a06261b091c',
                            'user_full_name': 'Backend Team',
                            'user_email': 'backend@yopmail.com',
                            'user_role': 'Super Admin',
                            'user_image': '',
                            'user_mobile_number': ''
                          },
                          'trgt_id': 'e6802d21-e1df-47fe-adb9-dc44305c391e',
                          'trgt_created_on': '2023-04-28T09:18:27.760Z',
                          'trgt_updated_on': '2023-05-30T13:57:29.453Z',
                          '__v': 0,
                          'trgt_color': '#fcc4bb',
                          'trgt_index': 12
                        },
                        {
                          '_id': '64009f1993d66e3cf3935284',
                          'trgt_name': 'Jagran Josh',
                          'trgt_domain': 'https://jagranjosh.com',
                          'trgt_status': 'active',
                          'trgt_id': '7c06810b-f806-441a-956a-33c447fe7b47',
                          'trgt_created_on': '2023-03-02T13:05:29.518Z',
                          'trgt_updated_on': '2023-06-08T12:44:08.804Z',
                          '__v': 0,
                          'trgt_desc': 'jagran-josh',
                          'trgt_slug': 'jagran-josh',
                          'trgt_img': 'https://storage.googleapis.com/dev-cms-backend-media/target/1686228239131-298a6b6e-7da9-419a-a4ee-6dad8d6bd907.png',
                          'trgt_updated_by': {
                            'user_id': '2ad2a8e6-b7e6-473c-ae37-913aaf033b61',
                            'user_full_name': 'QA Team',
                            'user_email': 'qa@yopmail.com',
                            'user_role': 'Super Admin',
                            'user_image': '',
                            'user_mobile_number': ''
                          },
                          'trgt_color': 'rgba(250,150,150,0.56)',
                          'trgt_index': 14
                        },
                        {
                          '_id': '644b8f090f997360b346bef8',
                          'trgt_name': 'Her Zindagi',
                          'trgt_slug': 'herzindagi',
                          'trgt_img': 'https://storage.googleapis.com/dev-cms-backend-media/target/1685439617962-ee1d4573-93fa-43e6-82ba-775260d1aa7f.png',
                          'trgt_domain': 'https://www.herzindagi.com/',
                          'trgt_desc': 'A Jagran New Media Product. Your very own online BFF! A platform for women, by women.',
                          'trgt_status': 'active',
                          'trgt_created_by': {
                            'user_id': '2ad2a8e6-b7e6-473c-ae37-913aaf033b61',
                            'user_full_name': 'QA Team',
                            'user_role': 'Super Admin',
                            'user_image': ''
                          },
                          'trgt_updated_by': {
                            'user_id': '2ad2a8e6-b7e6-473c-ae37-913aaf033b61',
                            'user_full_name': 'QA Team',
                            'user_email': 'qa@yopmail.com',
                            'user_role': 'Super Admin',
                            'user_image': '',
                            'user_mobile_number': ''
                          },
                          'trgt_id': 'b610e5c4-1c39-45d1-8986-3e04ad9a6487',
                          'trgt_created_on': '2023-04-28T09:16:57.694Z',
                          'trgt_updated_on': '2023-05-31T12:14:12.925Z',
                          '__v': 0,
                          'trgt_color': '#eeb1cb',
                          'trgt_index': 15
                        }
                      ],
                      'user_social_link': {
                        'facebook': 'https://www.facebook.com/amitabhbachchan/',
                        'instagram': 'https://www.instagram.com/amitabhbachchan',
                        'twitter': 'https://twitter.com/SrBachchan'
                      },
                      'user_created_by': {
                        'user_id': '342ce7f2-2a2d-4e5a-8544-4a06261b091c',
                        'user_full_name': 'Backend Team',
                        'user_email': 'backend@yopmail.com',
                        'user_role': 'Super Admin',
                        'user_image': '',
                        'user_mobile_number': ''
                      },
                      'user_updated_by': {
                        'user_id': '342ce7f2-2a2d-4e5a-8544-4a06261b091c',
                        'user_full_name': 'Backend Team',
                        'user_email': 'backend@yopmail.com',
                        'user_role': 'Super Admin',
                        'user_image': '',
                        'user_mobile_number': ''
                      },
                      'user_id': '4f0a32bf-1ff3-4f25-b02d-f4782879f6c9',
                      'user_created_on': '2023-06-23T06:43:20.990Z',
                      'user_updated_on': '2023-06-23T06:43:20.990Z',
                      '__v': 0,
                      'access': {
                        'usrl_name': 'Admin',
                        'usrl_status': 'active',
                        'usrl_updated_by': {
                          'user_id': '2ad2a8e6-b7e6-473c-ae37-913aaf033b61',
                          'user_full_name': 'QA Team',
                          'user_email': 'qa@yopmail.com',
                          'user_role': 'Admin',
                          'user_image': '',
                          'user_mobile_number': ''
                        },
                        'usrl_id': '64b7740c-088d-4a87-8540-4d5b0982d197',
                        'usrl_created_on': '2023-03-07T06:46:33.664Z',
                        'usrl_updated_on': '2023-06-07T06:12:37.854Z',
                        'usrl_permission': [
                          {
                            'per_name': 'User',
                            'per_id': 'e28418bd-6b09-4169-848b-7b25689348f5',
                            'usrl_per_view': true,
                            'usrl_per_edit': true,
                            'usrl_per_delete': true,
                            'usrl_per_create': true,
                            'usrl_per_approve': true,
                            'usrl_per_active': true,
                            '_id': '644b6e8e0f997360b346b792'
                          },
                          {
                            'per_name': 'Role',
                            'per_id': 'edc39667-a80f-4d4e-b254-df941d4dcc9b',
                            'usrl_per_view': true,
                            'usrl_per_edit': true,
                            'usrl_per_delete': true,
                            'usrl_per_create': true,
                            'usrl_per_approve': true,
                            'usrl_per_active': true,
                            '_id': '644b6e8e0f997360b346b793'
                          },
                          {
                            'per_name': 'Approval Workflow',
                            'per_id': '4c76e390-1aa6-4b28-b844-4a0db44470e9',
                            'usrl_per_view': true,
                            'usrl_per_edit': true,
                            'usrl_per_delete': true,
                            'usrl_per_create': true,
                            'usrl_per_approve': true,
                            'usrl_per_active': true,
                            '_id': '644b6e8e0f997360b346b794'
                          },
                          {
                            'per_name': 'Target System',
                            'per_id': 'eff502cf-ffe7-49ab-9f74-a4f636bb204e',
                            'usrl_per_view': true,
                            'usrl_per_edit': false,
                            'usrl_per_delete': false,
                            'usrl_per_create': false,
                            'usrl_per_approve': false,
                            '_id': '644b6e8e0f997360b346b795'
                          },
                          {
                            'per_name': 'Event/Activity',
                            'per_id': '61c04c77-df06-4854-8451-4c573222cebf',
                            'usrl_per_view': true,
                            'usrl_per_edit': true,
                            'usrl_per_delete': true,
                            'usrl_per_create': true,
                            'usrl_per_approve': true,
                            '_id': '644b6e8e0f997360b346b796'
                          },
                          {
                            'per_name': 'Tags',
                            'per_id': '7156a3b4-465a-4906-8bde-2bb01912d901',
                            'usrl_per_view': true,
                            'usrl_per_edit': true,
                            'usrl_per_delete': true,
                            'usrl_per_create': true,
                            'usrl_per_approve': true,
                            '_id': '644b6e8e0f997360b346b797'
                          },
                          {
                            'per_name': 'Create Template',
                            'per_id': '2db48860-0e28-432c-9a8a-fc26671af063',
                            'usrl_per_view': true,
                            'usrl_per_edit': true,
                            'usrl_per_delete': true,
                            'usrl_per_create': true,
                            'usrl_per_approve': true,
                            'usrl_per_active': true,
                            '_id': '644b6e8e0f997360b346b798'
                          },
                          {
                            'per_name': 'Categories',
                            'per_id': '634bbae2-cb0a-4869-9f8a-00bdc0eb1389',
                            'usrl_per_view': true,
                            'usrl_per_edit': true,
                            'usrl_per_delete': true,
                            'usrl_per_create': true,
                            'usrl_per_approve': true,
                            '_id': '644b6e8e0f997360b346b799'
                          },
                          {
                            'per_name': 'Faq',
                            'per_id': '383d5e9b-ee1b-4146-bbf0-f3113e778b65',
                            'usrl_per_view': true,
                            'usrl_per_edit': true,
                            'usrl_per_delete': true,
                            'usrl_per_create': true,
                            'usrl_per_approve': true,
                            'usrl_per_active': true,
                            '_id': '644b6e8e0f997360b346b79a'
                          },
                          {
                            'per_name': 'Feed',
                            'per_id': '1c913287-1016-46c9-927a-b4025b22adf6',
                            'usrl_per_view': true,
                            'usrl_per_edit': true,
                            'usrl_per_active': true,
                            '_id': '644b6e8e0f997360b346b79b'
                          },
                          {
                            'per_name': 'Notification',
                            'per_id': 'fd1a5b19-617c-46ae-b2b4-e41fc654b07f',
                            'usrl_per_view': true,
                            'usrl_per_edit': true,
                            'usrl_per_delete': true,
                            'usrl_per_create': true,
                            'usrl_per_approve': true,
                            'usrl_per_active': true,
                            '_id': '644b6e8e0f997360b346b79c'
                          },
                          {
                            'per_name': 'Comment',
                            'per_id': '6b348319-8ade-4f0b-8488-15bb5ba1d4be',
                            'usrl_per_view': true,
                            'usrl_per_edit': true,
                            'usrl_per_approve': true,
                            'usrl_per_active': true,
                            '_id': '644b6e8e0f997360b346b79d'
                          },
                          {
                            'per_name': 'Menu Category',
                            'per_id': '69c71316-817c-40e4-b408-3c1308b825ca',
                            'usrl_per_view': true,
                            'usrl_per_edit': true,
                            'usrl_per_delete': true,
                            'usrl_per_create': true,
                            'usrl_per_approve': true,
                            '_id': '644b6e8e0f997360b346b79e'
                          },
                          {
                            'per_name': 'Image Size',
                            'per_id': '71271981-64e3-4719-8966-33c5521e9805',
                            'usrl_per_view': true,
                            'usrl_per_edit': true,
                            'usrl_per_delete': true,
                            'usrl_per_create': true,
                            'usrl_per_approve': true,
                            '_id': '644b6e8e0f997360b346b79f'
                          },
                          {
                            'per_name': 'Topic',
                            'per_id': '3f7bd0be-517e-46c7-9684-cf9ca5c8ceea',
                            'usrl_per_view': true,
                            'usrl_per_edit': true,
                            'usrl_per_delete': true,
                            'usrl_per_create': true,
                            'usrl_per_approve': true,
                            'usrl_per_active': true,
                            '_id': '644b6e8e0f997360b346b7a0'
                          },
                          {
                            'per_name': 'My Profile',
                            'per_id': '19b2d2ca-c012-40e3-bbca-00d39c64c8d4',
                            'usrl_per_view': true,
                            'usrl_per_edit': true,
                            'usrl_per_create': true,
                            '_id': '64749e14454a6f6e88945245'
                          },
                          {
                            'per_name': 'Collection',
                            'per_id': 'ffa0753c-ba25-4c5d-b54d-57d0500ccf29',
                            'usrl_per_view': true,
                            'usrl_per_edit': true,
                            'usrl_per_create': true,
                            '_id': '64749e14454a6f6e88945246'
                          },
                          {
                            'per_name': 'Ftp Collection',
                            'per_id': '54938ce9-26b9-4252-b4aa-6d262f820a21',
                            'usrl_per_view': true,
                            'usrl_per_edit': true,
                            'usrl_per_create': true,
                            '_id': '64749e14454a6f6e88945247'
                          },
                          {
                            'per_name': 'Audit Log',
                            'per_id': '05accbbd-6f1b-41bf-88ee-89d971673c82',
                            'usrl_per_view': true,
                            '_id': '64749e14454a6f6e88945248'
                          },
                          {
                            'per_name': 'Create Article',
                            'per_id': '9c99bf3e-a2d1-4351-88ea-dcdbbe0bc577',
                            'usrl_per_view': true,
                            'usrl_per_edit': true,
                            'usrl_per_delete': true,
                            'usrl_per_create': true,
                            'usrl_per_approve': true,
                            'usrl_per_active': true,
                            '_id': '64749e14454a6f6e88945249'
                          },
                          {
                            'per_name': 'Meta tags',
                            'per_id': '9325fca8-4124-4f07-91c5-83bfa36c83bb',
                            'usrl_per_view': true,
                            'usrl_per_edit': true,
                            'usrl_per_delete': true,
                            'usrl_per_create': true,
                            'usrl_per_approve': true,
                            'usrl_per_active': true,
                            '_id': '64749e14454a6f6e8894524a'
                          },
                          {
                            'per_name': 'Media',
                            'per_id': 'c355b748-8014-45bd-8c30-20f3d9dacf4d',
                            'usrl_per_view': true,
                            'usrl_per_edit': true,
                            'usrl_per_delete': true,
                            'usrl_per_create': true,
                            'usrl_per_approve': true,
                            'usrl_per_active': true,
                            '_id': '64784c65e357673c27653a4a'
                          },
                          {
                            'per_name': 'Global Setting',
                            'per_id': 'b7c95f33-4b6a-4e81-bc31-583a26c62641',
                            'usrl_per_view': true,
                            'usrl_per_edit': true,
                            'usrl_per_delete': true,
                            'usrl_per_create': true,
                            'usrl_per_approve': true,
                            'usrl_per_active': true,
                            '_id': '64784edfe357673c27654488'
                          },
                          {
                            'per_name': 'Review Article',
                            'per_id': '640b5777-dc58-4eb7-b740-4a7a96b919eb',
                            'usrl_per_view': true,
                            '_id': '647d8a1865dd56f35f2e4845'
                          },
                          {
                            'per_name': 'My Task',
                            'per_id': '46212608-18cf-48e2-b571-febbbc0c9565',
                            'usrl_per_view': true,
                            'usrl_per_edit': true,
                            'usrl_per_delete': true,
                            'usrl_per_create': true,
                            'usrl_per_approve': true,
                            'usrl_per_active': true,
                            '_id': '64801fd594aac3cb08607e0b'
                          }
                        ],
                        'usrl_default': true,
                        'usrl_associate': 'Admin'
                      }
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
        }
      }
    }
  }
};

const userDefaultTargetUpdate = {
  '/user/{user_id}/target/{trgt_id}/default': {
    put: {
      tags: ['User'],
      summary: 'Update User Default Target.',
      security: [
        {
          bearerAuth: [],
        }
      ],
      parameters: [
        {
          name: 'user_id',
          in: 'path',
          description: 'The ID of the User to update Target',
          required: true,
          type: 'string'
        },
        {
          name: 'trgt_id',
          in: 'path',
          description: 'The ID of the Target which set to default',
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
    }
  }
};

const userProfileUpdate = {
  '/user/{user_id}/profile': {
    put: {
      tags: ['User'],
      summary: `Update an existing User's profile.`,
      security: [
        {
          bearerAuth: [],
        }
      ],
      parameters: [
        {
          name: 'user_id',
          in: 'path',
          description: 'The ID of the User to update profile',
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
                user_email: {
                  type: 'string',
                  example: 'John@yopmail.com',
                },
                user_first_name: {
                  type: 'string',
                  example: 'John',
                },
                user_last_name: {
                  type: 'string',
                  example: 'Cena',
                },
                user_mobile_number: {
                  type: 'string',
                  example: '7894562314',
                },
                user_image: {
                  type: 'object',
                  example: {
                    original: {
                      name: '1682167756151-5916af7c-e507-424d-99d4-9ec8a3806af7.jpg',
                      ext: 'jpg',
                      mime: 'image/jpeg',
                      size: {
                        value: 28048.92,
                        unit: 'KB'
                      },
                      width: {
                        value: 200,
                        unit: 'px'
                      },
                      height: {
                        value: 100,
                        unit: 'px'
                      },
                      length: {},
                      path: 'image/1682167756151-5916af7c-e507-424d-99d4-9ec8a3806af7.jpg'
                    }
                  },
                },
                user_status: {
                  type: 'string',
                  example: 'active',
                  enum: ['active', 'inactive']
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

const userPasswordUpdate = {
  '/user/{user_id}/password': {
    put: {
      tags: ['User'],
      summary: `Update an existing User's password.`,
      security: [
        {
          bearerAuth: [],
        }
      ],
      parameters: [
        {
          name: 'user_id',
          in: 'path',
          description: 'The ID of the User to update password',
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
                user_current_password: {
                  type: 'string',
                  example: 'Admin@123',
                },
                user_password: {
                  type: 'string',
                  example: 'Admin@12345',
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

const userFileUpload = {
  '/user/file/upload': {
    post: {
      tags: ['User'],
      summary: 'Upload user image',
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
                      'path': 'https://storage.googleapis.com/dev-cms-backend-media/user/image/2023-06-19/user/image/1687157456720-3777e6ca-0854-4dd1-a62b-e5b331e3ecf9.jpg',
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

const User = {
  ...userCreate, ...userPagging, ...userExport, ...userGetUpdateDelete, ...userStatusUpdate, ...userLookup, ...userProfileGet,
  ...bulkUserGet, ...userDefaultTargetUpdate, ...userProfileUpdate, ...userPasswordUpdate, ...userFileUpload
};
export default User;