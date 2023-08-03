const rolePagging = {
  '/role/pagging': {
    post: {
      tags: ['User-Role'],
      summary: 'Get all user role by pagging',
      security: [
        {
          bearerAuth: [],
        },
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
                  example: 'usrl_updated_on'
                },
                global_value: {
                  type: 'string',
                  example: 'Admin'
                },
                global_filter: {
                  type: 'array',
                  example: [
                    'usrl_name',
                    'usrl_associate'
                  ]
                },
                filters: {
                  type: 'array',
                  example: [
                    {
                      'field': 'usrl_status',
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
                      'count': 4,
                      'list': [
                        {
                          'usrl_name': 'Super Admin',
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
                              '_id': '644a3b460f997360b3469d91'
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
                              '_id': '644a3b460f997360b3469d92'
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
                              '_id': '644a3c7c0f997360b3469f4a'
                            },
                            {
                              'per_name': 'Target System',
                              'per_id': 'eff502cf-ffe7-49ab-9f74-a4f636bb204e',
                              'usrl_per_view': true,
                              'usrl_per_edit': true,
                              'usrl_per_delete': true,
                              'usrl_per_create': true,
                              'usrl_per_approve': true,
                              'usrl_per_active': true,
                              '_id': '644a3c7c0f997360b3469f4b'
                            },
                            {
                              'per_name': 'Event/Activity',
                              'per_id': '61c04c77-df06-4854-8451-4c573222cebf',
                              'usrl_per_view': true,
                              'usrl_per_edit': true,
                              'usrl_per_delete': true,
                              'usrl_per_create': true,
                              'usrl_per_approve': true,
                              'usrl_per_active': true,
                              '_id': '644a3c7c0f997360b3469f4c'
                            },
                            {
                              'per_name': 'Tags',
                              'per_id': '7156a3b4-465a-4906-8bde-2bb01912d901',
                              'usrl_per_view': true,
                              'usrl_per_edit': true,
                              'usrl_per_delete': true,
                              'usrl_per_create': true,
                              'usrl_per_approve': true,
                              'usrl_per_active': true,
                              '_id': '644a3c7c0f997360b3469f4d'
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
                              '_id': '644a3c7c0f997360b3469f4e'
                            },
                            {
                              'per_name': 'Categories',
                              'per_id': '634bbae2-cb0a-4869-9f8a-00bdc0eb1389',
                              'usrl_per_view': true,
                              'usrl_per_edit': true,
                              'usrl_per_delete': true,
                              'usrl_per_create': true,
                              'usrl_per_approve': true,
                              'usrl_per_active': true,
                              '_id': '644a3c7c0f997360b3469f4f'
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
                              '_id': '644a3c7c0f997360b3469f50'
                            },
                            {
                              'per_name': 'Feed',
                              'per_id': '1c913287-1016-46c9-927a-b4025b22adf6',
                              'usrl_per_view': true,
                              'usrl_per_edit': true,
                              'usrl_per_delete': true,
                              'usrl_per_create': true,
                              'usrl_per_approve': true,
                              'usrl_per_active': true,
                              '_id': '644a3c7c0f997360b3469f51'
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
                              '_id': '644a3c7c0f997360b3469f52'
                            },
                            {
                              'per_name': 'Comment',
                              'per_id': '6b348319-8ade-4f0b-8488-15bb5ba1d4be',
                              'usrl_per_view': true,
                              'usrl_per_edit': true,
                              'usrl_per_delete': true,
                              'usrl_per_create': true,
                              'usrl_per_approve': true,
                              'usrl_per_active': false,
                              '_id': '644a3c7c0f997360b3469f53'
                            },
                            {
                              'per_name': 'Menu Category',
                              'per_id': '69c71316-817c-40e4-b408-3c1308b825ca',
                              'usrl_per_view': true,
                              'usrl_per_edit': true,
                              'usrl_per_delete': true,
                              'usrl_per_create': true,
                              'usrl_per_approve': true,
                              'usrl_per_active': true,
                              '_id': '644a3c7c0f997360b3469f54'
                            },
                            {
                              'per_name': 'Image Size',
                              'per_id': '71271981-64e3-4719-8966-33c5521e9805',
                              'usrl_per_view': true,
                              'usrl_per_edit': true,
                              'usrl_per_delete': true,
                              'usrl_per_create': true,
                              'usrl_per_approve': true,
                              'usrl_per_active': true,
                              '_id': '644a3c7c0f997360b3469f55'
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
                              '_id': '644a3c7c0f997360b3469f56'
                            },
                            {
                              'per_name': 'My Profile',
                              'per_id': '19b2d2ca-c012-40e3-bbca-00d39c64c8d4',
                              'usrl_per_view': true,
                              'usrl_per_edit': true,
                              'usrl_per_delete': true,
                              'usrl_per_create': true,
                              'usrl_per_approve': true,
                              '_id': '64749436454a6f6e889448bc'
                            },
                            {
                              'per_name': 'Collection',
                              'per_id': 'ffa0753c-ba25-4c5d-b54d-57d0500ccf29',
                              'usrl_per_view': true,
                              'usrl_per_edit': true,
                              'usrl_per_delete': true,
                              'usrl_per_create': true,
                              'usrl_per_approve': true,
                              'usrl_per_active': true,
                              '_id': '64749436454a6f6e889448bd'
                            },
                            {
                              'per_name': 'Ftp Collection',
                              'per_id': '54938ce9-26b9-4252-b4aa-6d262f820a21',
                              'usrl_per_view': true,
                              'usrl_per_edit': true,
                              'usrl_per_delete': true,
                              'usrl_per_create': true,
                              'usrl_per_approve': true,
                              'usrl_per_active': true,
                              '_id': '64749436454a6f6e889448be'
                            },
                            {
                              'per_name': 'Audit Log',
                              'per_id': '05accbbd-6f1b-41bf-88ee-89d971673c82',
                              'usrl_per_view': true,
                              'usrl_per_edit': true,
                              'usrl_per_delete': true,
                              'usrl_per_create': true,
                              'usrl_per_approve': true,
                              '_id': '64749436454a6f6e889448bf'
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
                              '_id': '64749436454a6f6e889448c0'
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
                              '_id': '64749436454a6f6e889448c1'
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
                              '_id': '64784d13e357673c27653cd8'
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
                              '_id': '64784ebee357673c2765431c'
                            },
                            {
                              'per_name': 'Review Article',
                              'per_id': '640b5777-dc58-4eb7-b740-4a7a96b919eb',
                              'usrl_per_view': true,
                              'usrl_per_edit': true,
                              'usrl_per_approve': true,
                              'usrl_per_active': true,
                              '_id': '647d89b165dd56f35f2e4589'
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
                              '_id': '647efcf565dd56f35f2ee8b8'
                            }
                          ],
                          'usrl_status': 'active',
                          'usrl_updated_by': {
                            'user_id': '033f58eb-1ef2-4b44-a884-6fcc55c764e7',
                            'user_full_name': 'Frontend Team',
                            'user_email': 'frontend@yopmail.com',
                            'user_role': 'Super Admin',
                            'user_image': '',
                            'user_mobile_number': ''
                          },
                          'usrl_id': '5feddf56-73df-4564-9707-f2477f3be6fd',
                          'usrl_created_on': '2023-03-28T11:55:47.136Z',
                          'usrl_updated_on': '2023-06-20T10:04:51.887Z',
                          'usrl_associate': 'Super Admin',
                          'usrl_default': true
                        },
                        {
                          'usrl_name': 'Gayan',
                          'usrl_associate': 'Super Admin',
                          'usrl_permission': [
                            {
                              'per_name': 'User',
                              'per_id': 'e28418bd-6b09-4169-848b-7b25689348f5',
                              'usrl_per_view': false,
                              'usrl_per_edit': true,
                              'usrl_per_delete': true,
                              'usrl_per_create': true,
                              'usrl_per_approve': true,
                              'usrl_per_active': true,
                              '_id': '648ad38750791cc56384ba8a'
                            },
                            {
                              'per_name': 'Role',
                              'per_id': 'edc39667-a80f-4d4e-b254-df941d4dcc9b',
                              'usrl_per_view': false,
                              '_id': '648ad38750791cc56384ba8b'
                            },
                            {
                              'per_name': 'Approval Workflow',
                              'per_id': '4c76e390-1aa6-4b28-b844-4a0db44470e9',
                              '_id': '648ad38750791cc56384ba8c'
                            },
                            {
                              'per_name': 'Target System',
                              'per_id': 'eff502cf-ffe7-49ab-9f74-a4f636bb204e',
                              '_id': '648ad38750791cc56384ba8d'
                            },
                            {
                              'per_name': 'Event/Activity',
                              'per_id': '61c04c77-df06-4854-8451-4c573222cebf',
                              '_id': '648ad38750791cc56384ba8e'
                            },
                            {
                              'per_name': 'Tags',
                              'per_id': '7156a3b4-465a-4906-8bde-2bb01912d901',
                              '_id': '648ad38750791cc56384ba8f'
                            },
                            {
                              'per_name': 'Create Template',
                              'per_id': '2db48860-0e28-432c-9a8a-fc26671af063',
                              '_id': '648ad38750791cc56384ba90'
                            },
                            {
                              'per_name': 'Categories',
                              'per_id': '634bbae2-cb0a-4869-9f8a-00bdc0eb1389',
                              '_id': '648ad38750791cc56384ba91'
                            },
                            {
                              'per_name': 'Faq',
                              'per_id': '383d5e9b-ee1b-4146-bbf0-f3113e778b65',
                              '_id': '648ad38750791cc56384ba92'
                            },
                            {
                              'per_name': 'Feed',
                              'per_id': '1c913287-1016-46c9-927a-b4025b22adf6',
                              '_id': '648ad38750791cc56384ba93'
                            },
                            {
                              'per_name': 'Notification',
                              'per_id': 'fd1a5b19-617c-46ae-b2b4-e41fc654b07f',
                              '_id': '648ad38750791cc56384ba94'
                            },
                            {
                              'per_name': 'Comment',
                              'per_id': '6b348319-8ade-4f0b-8488-15bb5ba1d4be',
                              '_id': '648ad38750791cc56384ba95'
                            },
                            {
                              'per_name': 'Menu Category',
                              'per_id': '69c71316-817c-40e4-b408-3c1308b825ca',
                              '_id': '648ad38750791cc56384ba96'
                            },
                            {
                              'per_name': 'Image Size',
                              'per_id': '71271981-64e3-4719-8966-33c5521e9805',
                              '_id': '648ad38750791cc56384ba97'
                            },
                            {
                              'per_name': 'Topic',
                              'per_id': '3f7bd0be-517e-46c7-9684-cf9ca5c8ceea',
                              '_id': '648ad38750791cc56384ba98'
                            },
                            {
                              'per_name': 'My Profile',
                              'per_id': '19b2d2ca-c012-40e3-bbca-00d39c64c8d4',
                              '_id': '648ad38750791cc56384ba99'
                            },
                            {
                              'per_name': 'Collection',
                              'per_id': 'ffa0753c-ba25-4c5d-b54d-57d0500ccf29',
                              '_id': '648ad38750791cc56384ba9a'
                            },
                            {
                              'per_name': 'Ftp Collection',
                              'per_id': '54938ce9-26b9-4252-b4aa-6d262f820a21',
                              '_id': '648ad38750791cc56384ba9b'
                            },
                            {
                              'per_name': 'Audit Log',
                              'per_id': '05accbbd-6f1b-41bf-88ee-89d971673c82',
                              '_id': '648ad38750791cc56384ba9c'
                            },
                            {
                              'per_name': 'Create Article',
                              'per_id': '9c99bf3e-a2d1-4351-88ea-dcdbbe0bc577',
                              '_id': '648ad38750791cc56384ba9d'
                            },
                            {
                              'per_name': 'Meta tags',
                              'per_id': '9325fca8-4124-4f07-91c5-83bfa36c83bb',
                              '_id': '648ad38750791cc56384ba9e'
                            },
                            {
                              'per_name': 'Media',
                              'per_id': 'c355b748-8014-45bd-8c30-20f3d9dacf4d',
                              '_id': '648ad38750791cc56384ba9f'
                            },
                            {
                              'per_name': 'Global Setting',
                              'per_id': 'b7c95f33-4b6a-4e81-bc31-583a26c62641',
                              '_id': '648ad38750791cc56384baa0'
                            },
                            {
                              'per_name': 'Review Article',
                              'per_id': '640b5777-dc58-4eb7-b740-4a7a96b919eb',
                              '_id': '648ad38750791cc56384baa1'
                            },
                            {
                              'per_name': 'My Task',
                              'per_id': '46212608-18cf-48e2-b571-febbbc0c9565',
                              '_id': '648ad38750791cc56384baa2'
                            }
                          ],
                          'usrl_status': 'active',
                          'usrl_default': false,
                          'usrl_created_by': {
                            'user_id': 'f03a0719-71c6-4603-ab94-6e09cdbcb01b',
                            'user_full_name': 'Abhishek Pal',
                            'user_email': 'abhishek.pal@jagrannewmedia.com',
                            'user_role': 'Super Admin',
                            'user_image': '',
                            'user_mobile_number': ''
                          },
                          'usrl_updated_by': {
                            'user_id': 'f03a0719-71c6-4603-ab94-6e09cdbcb01b',
                            'user_full_name': 'Abhishek Pal',
                            'user_email': 'abhishek.pal@jagrannewmedia.com',
                            'user_role': 'Super Admin',
                            'user_image': '',
                            'user_mobile_number': ''
                          },
                          'usrl_id': '52e1100d-55b6-4971-8824-4deb995dd21a',
                          'usrl_created_on': '2023-06-15T09:01:59.370Z',
                          'usrl_updated_on': '2023-06-15T09:01:59.370Z'
                        },
                        {
                          'usrl_name': 'Abhishek',
                          'usrl_associate': 'Super Admin',
                          'usrl_permission': [
                            {
                              'per_name': 'User',
                              'per_id': 'e28418bd-6b09-4169-848b-7b25689348f5',
                              'usrl_per_view': true,
                              '_id': '648aa95f50791cc563849795'
                            },
                            {
                              'per_name': 'Role',
                              'per_id': 'edc39667-a80f-4d4e-b254-df941d4dcc9b',
                              'usrl_per_view': false,
                              '_id': '648aa95f50791cc563849796'
                            },
                            {
                              'per_name': 'Approval Workflow',
                              'per_id': '4c76e390-1aa6-4b28-b844-4a0db44470e9',
                              '_id': '648aa95f50791cc563849797'
                            },
                            {
                              'per_name': 'Target System',
                              'per_id': 'eff502cf-ffe7-49ab-9f74-a4f636bb204e',
                              '_id': '648aa95f50791cc563849798'
                            },
                            {
                              'per_name': 'Event/Activity',
                              'per_id': '61c04c77-df06-4854-8451-4c573222cebf',
                              '_id': '648aa95f50791cc563849799'
                            },
                            {
                              'per_name': 'Tags',
                              'per_id': '7156a3b4-465a-4906-8bde-2bb01912d901',
                              '_id': '648aa95f50791cc56384979a'
                            },
                            {
                              'per_name': 'Create Template',
                              'per_id': '2db48860-0e28-432c-9a8a-fc26671af063',
                              '_id': '648aa95f50791cc56384979b'
                            },
                            {
                              'per_name': 'Categories',
                              'per_id': '634bbae2-cb0a-4869-9f8a-00bdc0eb1389',
                              '_id': '648aa95f50791cc56384979c'
                            },
                            {
                              'per_name': 'Faq',
                              'per_id': '383d5e9b-ee1b-4146-bbf0-f3113e778b65',
                              '_id': '648aa95f50791cc56384979d'
                            },
                            {
                              'per_name': 'Feed',
                              'per_id': '1c913287-1016-46c9-927a-b4025b22adf6',
                              'usrl_per_view': false,
                              '_id': '648aa95f50791cc56384979e'
                            },
                            {
                              'per_name': 'Notification',
                              'per_id': 'fd1a5b19-617c-46ae-b2b4-e41fc654b07f',
                              '_id': '648aa95f50791cc56384979f'
                            },
                            {
                              'per_name': 'Comment',
                              'per_id': '6b348319-8ade-4f0b-8488-15bb5ba1d4be',
                              '_id': '648aa95f50791cc5638497a0'
                            },
                            {
                              'per_name': 'Menu Category',
                              'per_id': '69c71316-817c-40e4-b408-3c1308b825ca',
                              '_id': '648aa95f50791cc5638497a1'
                            },
                            {
                              'per_name': 'Image Size',
                              'per_id': '71271981-64e3-4719-8966-33c5521e9805',
                              '_id': '648aa95f50791cc5638497a2'
                            },
                            {
                              'per_name': 'Topic',
                              'per_id': '3f7bd0be-517e-46c7-9684-cf9ca5c8ceea',
                              '_id': '648aa95f50791cc5638497a3'
                            },
                            {
                              'per_name': 'My Profile',
                              'per_id': '19b2d2ca-c012-40e3-bbca-00d39c64c8d4',
                              'usrl_per_view': false,
                              '_id': '648aa95f50791cc5638497a4'
                            },
                            {
                              'per_name': 'Collection',
                              'per_id': 'ffa0753c-ba25-4c5d-b54d-57d0500ccf29',
                              '_id': '648aa95f50791cc5638497a5'
                            },
                            {
                              'per_name': 'Ftp Collection',
                              'per_id': '54938ce9-26b9-4252-b4aa-6d262f820a21',
                              '_id': '648aa95f50791cc5638497a6'
                            },
                            {
                              'per_name': 'Audit Log',
                              'per_id': '05accbbd-6f1b-41bf-88ee-89d971673c82',
                              '_id': '648aa95f50791cc5638497a7'
                            },
                            {
                              'per_name': 'Create Article',
                              'per_id': '9c99bf3e-a2d1-4351-88ea-dcdbbe0bc577',
                              '_id': '648aa95f50791cc5638497a8'
                            },
                            {
                              'per_name': 'Meta tags',
                              'per_id': '9325fca8-4124-4f07-91c5-83bfa36c83bb',
                              '_id': '648aa95f50791cc5638497a9'
                            },
                            {
                              'per_name': 'Media',
                              'per_id': 'c355b748-8014-45bd-8c30-20f3d9dacf4d',
                              '_id': '648aa95f50791cc5638497aa'
                            },
                            {
                              'per_name': 'Global Setting',
                              'per_id': 'b7c95f33-4b6a-4e81-bc31-583a26c62641',
                              '_id': '648aa95f50791cc5638497ab'
                            },
                            {
                              'per_name': 'Review Article',
                              'per_id': '640b5777-dc58-4eb7-b740-4a7a96b919eb',
                              '_id': '648aa95f50791cc5638497ac'
                            },
                            {
                              'per_name': 'My Task',
                              'per_id': '46212608-18cf-48e2-b571-febbbc0c9565',
                              '_id': '648aa95f50791cc5638497ad'
                            }
                          ],
                          'usrl_status': 'active',
                          'usrl_default': false,
                          'usrl_created_by': {
                            'user_id': 'f03a0719-71c6-4603-ab94-6e09cdbcb01b',
                            'user_full_name': 'Abhishek Pal',
                            'user_email': 'abhishek.pal@jagrannewmedia.com',
                            'user_role': 'Super Admin',
                            'user_image': '',
                            'user_mobile_number': ''
                          },
                          'usrl_updated_by': {
                            'user_id': 'f03a0719-71c6-4603-ab94-6e09cdbcb01b',
                            'user_full_name': 'Abhishek Pal',
                            'user_email': 'abhishek.pal@jagrannewmedia.com',
                            'user_role': 'Super Admin',
                            'user_image': '',
                            'user_mobile_number': ''
                          },
                          'usrl_id': 'c393c2a6-8523-4467-9e8c-08a724db768d',
                          'usrl_created_on': '2023-06-15T06:02:07.656Z',
                          'usrl_updated_on': '2023-06-15T06:06:58.603Z'
                        },
                        {
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

const roleExport = {
  '/role/export': {
    post: {
      tags: ['User-Role'],
      summary: 'Get all user role for export',
      security: [
        {
          bearerAuth: [],
        },
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
                  example: 'usrl_updated_on'
                },
                global_value: {
                  type: 'string',
                  example: 'Admin'
                },
                global_filter: {
                  type: 'array',
                  example: [
                    'usrl_name',
                    'usrl_associate'
                  ]
                },
                filters: {
                  type: 'array',
                  example: [
                    {
                      'field': 'usrl_status',
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
                    type: 'array',
                    example: [
                      {
                        'usrl_name': 'Super Admin',
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
                            '_id': '644a3b460f997360b3469d91'
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
                            '_id': '644a3b460f997360b3469d92'
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
                            '_id': '644a3c7c0f997360b3469f4a'
                          },
                          {
                            'per_name': 'Target System',
                            'per_id': 'eff502cf-ffe7-49ab-9f74-a4f636bb204e',
                            'usrl_per_view': true,
                            'usrl_per_edit': true,
                            'usrl_per_delete': true,
                            'usrl_per_create': true,
                            'usrl_per_approve': true,
                            'usrl_per_active': true,
                            '_id': '644a3c7c0f997360b3469f4b'
                          },
                          {
                            'per_name': 'Event/Activity',
                            'per_id': '61c04c77-df06-4854-8451-4c573222cebf',
                            'usrl_per_view': true,
                            'usrl_per_edit': true,
                            'usrl_per_delete': true,
                            'usrl_per_create': true,
                            'usrl_per_approve': true,
                            'usrl_per_active': true,
                            '_id': '644a3c7c0f997360b3469f4c'
                          },
                          {
                            'per_name': 'Tags',
                            'per_id': '7156a3b4-465a-4906-8bde-2bb01912d901',
                            'usrl_per_view': true,
                            'usrl_per_edit': true,
                            'usrl_per_delete': true,
                            'usrl_per_create': true,
                            'usrl_per_approve': true,
                            'usrl_per_active': true,
                            '_id': '644a3c7c0f997360b3469f4d'
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
                            '_id': '644a3c7c0f997360b3469f4e'
                          },
                          {
                            'per_name': 'Categories',
                            'per_id': '634bbae2-cb0a-4869-9f8a-00bdc0eb1389',
                            'usrl_per_view': true,
                            'usrl_per_edit': true,
                            'usrl_per_delete': true,
                            'usrl_per_create': true,
                            'usrl_per_approve': true,
                            'usrl_per_active': true,
                            '_id': '644a3c7c0f997360b3469f4f'
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
                            '_id': '644a3c7c0f997360b3469f50'
                          },
                          {
                            'per_name': 'Feed',
                            'per_id': '1c913287-1016-46c9-927a-b4025b22adf6',
                            'usrl_per_view': true,
                            'usrl_per_edit': true,
                            'usrl_per_delete': true,
                            'usrl_per_create': true,
                            'usrl_per_approve': true,
                            'usrl_per_active': true,
                            '_id': '644a3c7c0f997360b3469f51'
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
                            '_id': '644a3c7c0f997360b3469f52'
                          },
                          {
                            'per_name': 'Comment',
                            'per_id': '6b348319-8ade-4f0b-8488-15bb5ba1d4be',
                            'usrl_per_view': true,
                            'usrl_per_edit': true,
                            'usrl_per_delete': true,
                            'usrl_per_create': true,
                            'usrl_per_approve': true,
                            'usrl_per_active': false,
                            '_id': '644a3c7c0f997360b3469f53'
                          },
                          {
                            'per_name': 'Menu Category',
                            'per_id': '69c71316-817c-40e4-b408-3c1308b825ca',
                            'usrl_per_view': true,
                            'usrl_per_edit': true,
                            'usrl_per_delete': true,
                            'usrl_per_create': true,
                            'usrl_per_approve': true,
                            'usrl_per_active': true,
                            '_id': '644a3c7c0f997360b3469f54'
                          },
                          {
                            'per_name': 'Image Size',
                            'per_id': '71271981-64e3-4719-8966-33c5521e9805',
                            'usrl_per_view': true,
                            'usrl_per_edit': true,
                            'usrl_per_delete': true,
                            'usrl_per_create': true,
                            'usrl_per_approve': true,
                            'usrl_per_active': true,
                            '_id': '644a3c7c0f997360b3469f55'
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
                            '_id': '644a3c7c0f997360b3469f56'
                          },
                          {
                            'per_name': 'My Profile',
                            'per_id': '19b2d2ca-c012-40e3-bbca-00d39c64c8d4',
                            'usrl_per_view': true,
                            'usrl_per_edit': true,
                            'usrl_per_delete': true,
                            'usrl_per_create': true,
                            'usrl_per_approve': true,
                            '_id': '64749436454a6f6e889448bc'
                          },
                          {
                            'per_name': 'Collection',
                            'per_id': 'ffa0753c-ba25-4c5d-b54d-57d0500ccf29',
                            'usrl_per_view': true,
                            'usrl_per_edit': true,
                            'usrl_per_delete': true,
                            'usrl_per_create': true,
                            'usrl_per_approve': true,
                            'usrl_per_active': true,
                            '_id': '64749436454a6f6e889448bd'
                          },
                          {
                            'per_name': 'Ftp Collection',
                            'per_id': '54938ce9-26b9-4252-b4aa-6d262f820a21',
                            'usrl_per_view': true,
                            'usrl_per_edit': true,
                            'usrl_per_delete': true,
                            'usrl_per_create': true,
                            'usrl_per_approve': true,
                            'usrl_per_active': true,
                            '_id': '64749436454a6f6e889448be'
                          },
                          {
                            'per_name': 'Audit Log',
                            'per_id': '05accbbd-6f1b-41bf-88ee-89d971673c82',
                            'usrl_per_view': true,
                            'usrl_per_edit': true,
                            'usrl_per_delete': true,
                            'usrl_per_create': true,
                            'usrl_per_approve': true,
                            '_id': '64749436454a6f6e889448bf'
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
                            '_id': '64749436454a6f6e889448c0'
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
                            '_id': '64749436454a6f6e889448c1'
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
                            '_id': '64784d13e357673c27653cd8'
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
                            '_id': '64784ebee357673c2765431c'
                          },
                          {
                            'per_name': 'Review Article',
                            'per_id': '640b5777-dc58-4eb7-b740-4a7a96b919eb',
                            'usrl_per_view': true,
                            'usrl_per_edit': true,
                            'usrl_per_approve': true,
                            'usrl_per_active': true,
                            '_id': '647d89b165dd56f35f2e4589'
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
                            '_id': '647efcf565dd56f35f2ee8b8'
                          }
                        ],
                        'usrl_status': 'active',
                        'usrl_updated_by': {
                          'user_id': '033f58eb-1ef2-4b44-a884-6fcc55c764e7',
                          'user_full_name': 'Frontend Team',
                          'user_email': 'frontend@yopmail.com',
                          'user_role': 'Super Admin',
                          'user_image': '',
                          'user_mobile_number': ''
                        },
                        'usrl_id': '5feddf56-73df-4564-9707-f2477f3be6fd',
                        'usrl_created_on': '2023-03-28T11:55:47.136Z',
                        'usrl_updated_on': '2023-06-20T10:04:51.887Z',
                        'usrl_associate': 'Super Admin',
                        'usrl_default': true
                      },
                      {
                        'usrl_name': 'Gayan',
                        'usrl_associate': 'Super Admin',
                        'usrl_permission': [
                          {
                            'per_name': 'User',
                            'per_id': 'e28418bd-6b09-4169-848b-7b25689348f5',
                            'usrl_per_view': false,
                            'usrl_per_edit': true,
                            'usrl_per_delete': true,
                            'usrl_per_create': true,
                            'usrl_per_approve': true,
                            'usrl_per_active': true,
                            '_id': '648ad38750791cc56384ba8a'
                          },
                          {
                            'per_name': 'Role',
                            'per_id': 'edc39667-a80f-4d4e-b254-df941d4dcc9b',
                            'usrl_per_view': false,
                            '_id': '648ad38750791cc56384ba8b'
                          },
                          {
                            'per_name': 'Approval Workflow',
                            'per_id': '4c76e390-1aa6-4b28-b844-4a0db44470e9',
                            '_id': '648ad38750791cc56384ba8c'
                          },
                          {
                            'per_name': 'Target System',
                            'per_id': 'eff502cf-ffe7-49ab-9f74-a4f636bb204e',
                            '_id': '648ad38750791cc56384ba8d'
                          },
                          {
                            'per_name': 'Event/Activity',
                            'per_id': '61c04c77-df06-4854-8451-4c573222cebf',
                            '_id': '648ad38750791cc56384ba8e'
                          },
                          {
                            'per_name': 'Tags',
                            'per_id': '7156a3b4-465a-4906-8bde-2bb01912d901',
                            '_id': '648ad38750791cc56384ba8f'
                          },
                          {
                            'per_name': 'Create Template',
                            'per_id': '2db48860-0e28-432c-9a8a-fc26671af063',
                            '_id': '648ad38750791cc56384ba90'
                          },
                          {
                            'per_name': 'Categories',
                            'per_id': '634bbae2-cb0a-4869-9f8a-00bdc0eb1389',
                            '_id': '648ad38750791cc56384ba91'
                          },
                          {
                            'per_name': 'Faq',
                            'per_id': '383d5e9b-ee1b-4146-bbf0-f3113e778b65',
                            '_id': '648ad38750791cc56384ba92'
                          },
                          {
                            'per_name': 'Feed',
                            'per_id': '1c913287-1016-46c9-927a-b4025b22adf6',
                            '_id': '648ad38750791cc56384ba93'
                          },
                          {
                            'per_name': 'Notification',
                            'per_id': 'fd1a5b19-617c-46ae-b2b4-e41fc654b07f',
                            '_id': '648ad38750791cc56384ba94'
                          },
                          {
                            'per_name': 'Comment',
                            'per_id': '6b348319-8ade-4f0b-8488-15bb5ba1d4be',
                            '_id': '648ad38750791cc56384ba95'
                          },
                          {
                            'per_name': 'Menu Category',
                            'per_id': '69c71316-817c-40e4-b408-3c1308b825ca',
                            '_id': '648ad38750791cc56384ba96'
                          },
                          {
                            'per_name': 'Image Size',
                            'per_id': '71271981-64e3-4719-8966-33c5521e9805',
                            '_id': '648ad38750791cc56384ba97'
                          },
                          {
                            'per_name': 'Topic',
                            'per_id': '3f7bd0be-517e-46c7-9684-cf9ca5c8ceea',
                            '_id': '648ad38750791cc56384ba98'
                          },
                          {
                            'per_name': 'My Profile',
                            'per_id': '19b2d2ca-c012-40e3-bbca-00d39c64c8d4',
                            '_id': '648ad38750791cc56384ba99'
                          },
                          {
                            'per_name': 'Collection',
                            'per_id': 'ffa0753c-ba25-4c5d-b54d-57d0500ccf29',
                            '_id': '648ad38750791cc56384ba9a'
                          },
                          {
                            'per_name': 'Ftp Collection',
                            'per_id': '54938ce9-26b9-4252-b4aa-6d262f820a21',
                            '_id': '648ad38750791cc56384ba9b'
                          },
                          {
                            'per_name': 'Audit Log',
                            'per_id': '05accbbd-6f1b-41bf-88ee-89d971673c82',
                            '_id': '648ad38750791cc56384ba9c'
                          },
                          {
                            'per_name': 'Create Article',
                            'per_id': '9c99bf3e-a2d1-4351-88ea-dcdbbe0bc577',
                            '_id': '648ad38750791cc56384ba9d'
                          },
                          {
                            'per_name': 'Meta tags',
                            'per_id': '9325fca8-4124-4f07-91c5-83bfa36c83bb',
                            '_id': '648ad38750791cc56384ba9e'
                          },
                          {
                            'per_name': 'Media',
                            'per_id': 'c355b748-8014-45bd-8c30-20f3d9dacf4d',
                            '_id': '648ad38750791cc56384ba9f'
                          },
                          {
                            'per_name': 'Global Setting',
                            'per_id': 'b7c95f33-4b6a-4e81-bc31-583a26c62641',
                            '_id': '648ad38750791cc56384baa0'
                          },
                          {
                            'per_name': 'Review Article',
                            'per_id': '640b5777-dc58-4eb7-b740-4a7a96b919eb',
                            '_id': '648ad38750791cc56384baa1'
                          },
                          {
                            'per_name': 'My Task',
                            'per_id': '46212608-18cf-48e2-b571-febbbc0c9565',
                            '_id': '648ad38750791cc56384baa2'
                          }
                        ],
                        'usrl_status': 'active',
                        'usrl_default': false,
                        'usrl_created_by': {
                          'user_id': 'f03a0719-71c6-4603-ab94-6e09cdbcb01b',
                          'user_full_name': 'Abhishek Pal',
                          'user_email': 'abhishek.pal@jagrannewmedia.com',
                          'user_role': 'Super Admin',
                          'user_image': '',
                          'user_mobile_number': ''
                        },
                        'usrl_updated_by': {
                          'user_id': 'f03a0719-71c6-4603-ab94-6e09cdbcb01b',
                          'user_full_name': 'Abhishek Pal',
                          'user_email': 'abhishek.pal@jagrannewmedia.com',
                          'user_role': 'Super Admin',
                          'user_image': '',
                          'user_mobile_number': ''
                        },
                        'usrl_id': '52e1100d-55b6-4971-8824-4deb995dd21a',
                        'usrl_created_on': '2023-06-15T09:01:59.370Z',
                        'usrl_updated_on': '2023-06-15T09:01:59.370Z'
                      },
                      {
                        'usrl_name': 'Abhishek',
                        'usrl_associate': 'Super Admin',
                        'usrl_permission': [
                          {
                            'per_name': 'User',
                            'per_id': 'e28418bd-6b09-4169-848b-7b25689348f5',
                            'usrl_per_view': true,
                            '_id': '648aa95f50791cc563849795'
                          },
                          {
                            'per_name': 'Role',
                            'per_id': 'edc39667-a80f-4d4e-b254-df941d4dcc9b',
                            'usrl_per_view': false,
                            '_id': '648aa95f50791cc563849796'
                          },
                          {
                            'per_name': 'Approval Workflow',
                            'per_id': '4c76e390-1aa6-4b28-b844-4a0db44470e9',
                            '_id': '648aa95f50791cc563849797'
                          },
                          {
                            'per_name': 'Target System',
                            'per_id': 'eff502cf-ffe7-49ab-9f74-a4f636bb204e',
                            '_id': '648aa95f50791cc563849798'
                          },
                          {
                            'per_name': 'Event/Activity',
                            'per_id': '61c04c77-df06-4854-8451-4c573222cebf',
                            '_id': '648aa95f50791cc563849799'
                          },
                          {
                            'per_name': 'Tags',
                            'per_id': '7156a3b4-465a-4906-8bde-2bb01912d901',
                            '_id': '648aa95f50791cc56384979a'
                          },
                          {
                            'per_name': 'Create Template',
                            'per_id': '2db48860-0e28-432c-9a8a-fc26671af063',
                            '_id': '648aa95f50791cc56384979b'
                          },
                          {
                            'per_name': 'Categories',
                            'per_id': '634bbae2-cb0a-4869-9f8a-00bdc0eb1389',
                            '_id': '648aa95f50791cc56384979c'
                          },
                          {
                            'per_name': 'Faq',
                            'per_id': '383d5e9b-ee1b-4146-bbf0-f3113e778b65',
                            '_id': '648aa95f50791cc56384979d'
                          },
                          {
                            'per_name': 'Feed',
                            'per_id': '1c913287-1016-46c9-927a-b4025b22adf6',
                            'usrl_per_view': false,
                            '_id': '648aa95f50791cc56384979e'
                          },
                          {
                            'per_name': 'Notification',
                            'per_id': 'fd1a5b19-617c-46ae-b2b4-e41fc654b07f',
                            '_id': '648aa95f50791cc56384979f'
                          },
                          {
                            'per_name': 'Comment',
                            'per_id': '6b348319-8ade-4f0b-8488-15bb5ba1d4be',
                            '_id': '648aa95f50791cc5638497a0'
                          },
                          {
                            'per_name': 'Menu Category',
                            'per_id': '69c71316-817c-40e4-b408-3c1308b825ca',
                            '_id': '648aa95f50791cc5638497a1'
                          },
                          {
                            'per_name': 'Image Size',
                            'per_id': '71271981-64e3-4719-8966-33c5521e9805',
                            '_id': '648aa95f50791cc5638497a2'
                          },
                          {
                            'per_name': 'Topic',
                            'per_id': '3f7bd0be-517e-46c7-9684-cf9ca5c8ceea',
                            '_id': '648aa95f50791cc5638497a3'
                          },
                          {
                            'per_name': 'My Profile',
                            'per_id': '19b2d2ca-c012-40e3-bbca-00d39c64c8d4',
                            'usrl_per_view': false,
                            '_id': '648aa95f50791cc5638497a4'
                          },
                          {
                            'per_name': 'Collection',
                            'per_id': 'ffa0753c-ba25-4c5d-b54d-57d0500ccf29',
                            '_id': '648aa95f50791cc5638497a5'
                          },
                          {
                            'per_name': 'Ftp Collection',
                            'per_id': '54938ce9-26b9-4252-b4aa-6d262f820a21',
                            '_id': '648aa95f50791cc5638497a6'
                          },
                          {
                            'per_name': 'Audit Log',
                            'per_id': '05accbbd-6f1b-41bf-88ee-89d971673c82',
                            '_id': '648aa95f50791cc5638497a7'
                          },
                          {
                            'per_name': 'Create Article',
                            'per_id': '9c99bf3e-a2d1-4351-88ea-dcdbbe0bc577',
                            '_id': '648aa95f50791cc5638497a8'
                          },
                          {
                            'per_name': 'Meta tags',
                            'per_id': '9325fca8-4124-4f07-91c5-83bfa36c83bb',
                            '_id': '648aa95f50791cc5638497a9'
                          },
                          {
                            'per_name': 'Media',
                            'per_id': 'c355b748-8014-45bd-8c30-20f3d9dacf4d',
                            '_id': '648aa95f50791cc5638497aa'
                          },
                          {
                            'per_name': 'Global Setting',
                            'per_id': 'b7c95f33-4b6a-4e81-bc31-583a26c62641',
                            '_id': '648aa95f50791cc5638497ab'
                          },
                          {
                            'per_name': 'Review Article',
                            'per_id': '640b5777-dc58-4eb7-b740-4a7a96b919eb',
                            '_id': '648aa95f50791cc5638497ac'
                          },
                          {
                            'per_name': 'My Task',
                            'per_id': '46212608-18cf-48e2-b571-febbbc0c9565',
                            '_id': '648aa95f50791cc5638497ad'
                          }
                        ],
                        'usrl_status': 'active',
                        'usrl_default': false,
                        'usrl_created_by': {
                          'user_id': 'f03a0719-71c6-4603-ab94-6e09cdbcb01b',
                          'user_full_name': 'Abhishek Pal',
                          'user_email': 'abhishek.pal@jagrannewmedia.com',
                          'user_role': 'Super Admin',
                          'user_image': '',
                          'user_mobile_number': ''
                        },
                        'usrl_updated_by': {
                          'user_id': 'f03a0719-71c6-4603-ab94-6e09cdbcb01b',
                          'user_full_name': 'Abhishek Pal',
                          'user_email': 'abhishek.pal@jagrannewmedia.com',
                          'user_role': 'Super Admin',
                          'user_image': '',
                          'user_mobile_number': ''
                        },
                        'usrl_id': 'c393c2a6-8523-4467-9e8c-08a724db768d',
                        'usrl_created_on': '2023-06-15T06:02:07.656Z',
                        'usrl_updated_on': '2023-06-15T06:06:58.603Z'
                      },
                      {
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

const roleAdd = {
  '/role': {
    post: {
      tags: ['User-Role'],
      summary: 'Add user role',
      security: [
        {
          bearerAuth: [],
        },
      ],
      requestBody: {
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                usrl_name: {
                  type: 'string',
                  example: 'SEO',
                  required: true,
                },
                usrl_desc: {
                  type: 'string',
                  example: 'artical seo'
                },
                usrl_associate: {
                  type: 'string',
                  example: 'SEO',
                  required: true,
                },
                usrl_default: {
                  type: 'boolean',
                  example: false,
                  required: true
                },
                usrl_status: {
                  type: 'string',
                  example: 'active',
                  required: true,
                  enum: ['active', 'inactive']
                },
                usrl_permission: {
                  type: 'array',
                  required: true,
                  example: [{
                    'per_name': 'content model',
                    'per_id': 'a5sd14a6d5a6d',
                    'usrl_per_view': false,
                    'usrl_per_edit': true,
                    'usrl_per_delete': true,
                    'usrl_per_create': true,
                    'usrl_per_approve': true,
                    'usrl_per_active': true
                  }]
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
                      'usrl_name': 'Test',
                      'usrl_associate': 'Super Admin',
                      'usrl_permission': [
                        {
                          'per_name': 'content model',
                          'per_id': 'a5sd14a6d5a6d',
                          'usrl_per_edit': true,
                          'usrl_per_delete': true,
                          'usrl_per_create': true,
                          'usrl_per_approve': true,
                          'usrl_per_active': true,
                          '_id': '6495485d89e08f5f14e0ae8f'
                        }
                      ],
                      'usrl_status': 'active',
                      'usrl_default': false,
                      'usrl_created_by': {
                        'user_id': '342ce7f2-2a2d-4e5a-8544-4a06261b091c',
                        'user_full_name': 'Backend Team',
                        'user_email': 'backend@yopmail.com',
                        'user_role': 'Super Admin',
                        'user_image': '',
                        'user_mobile_number': ''
                      },
                      'usrl_updated_by': {
                        'user_id': '342ce7f2-2a2d-4e5a-8544-4a06261b091c',
                        'user_full_name': 'Backend Team',
                        'user_email': 'backend@yopmail.com',
                        'user_role': 'Super Admin',
                        'user_image': '',
                        'user_mobile_number': ''
                      },
                      'usrl_id': '293a9664-a2e6-43ad-9150-f0d527779ece',
                      'usrl_created_on': '2023-06-23T07:23:09.461Z',
                      'usrl_updated_on': '2023-06-23T07:23:09.461Z'
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

const roleGetUpdateDelete = {
  '/role/{usrl_id}': {
    put: {
      tags: ['User-Role'],
      summary: 'Update User Role',
      security: [
        {
          bearerAuth: [],
        },
      ],
      parameters: [
        {
          name: 'usrl_id',
          in: 'path',
          description: 'The ID of the User Role to update',
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
                usrl_name: {
                  type: 'string',
                  example: 'SEO New',
                  required: true,
                },
                usrl_desc: {
                  type: 'string',
                  example: 'artical seo'
                },
                usrl_associate: {
                  type: 'string',
                  example: 'SEO',
                  required: true,
                },
                usrl_default: {
                  type: 'boolean',
                  example: false,
                  required: true
                },
                usrl_status: {
                  type: 'string',
                  example: 'active',
                  required: true,
                  enum: ['active', 'inactive']
                },
                usrl_permission: {
                  type: 'array',
                  required: true,
                  example: [{
                    'per_name': 'content model',
                    'per_id': 'a5sd14a6d5a6d',
                    'usrl_per_view': false,
                    'usrl_per_edit': true,
                    'usrl_per_delete': true,
                    'usrl_per_create': true,
                    'usrl_per_approve': true,
                    'usrl_per_active': true
                  }]
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
                    status: {
                      type: 'number',
                      example: 500,
                    },
                    type: 'string',
                    example: 'Internal Server Error',
                  },
                },
              },
            },
          },
        },
      }
    },
    get: {
      tags: ['User-Role'],
      summary: 'Get User Role',
      security: [
        {
          bearerAuth: [],
        },
      ],
      parameters: [
        {
          name: 'usrl_id',
          in: 'path',
          description: 'The ID of the User Role to get',
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
                      'usrl_name': 'Test',
                      'usrl_associate': 'Super Admin',
                      'usrl_permission': [
                        {
                          'per_name': 'content model',
                          'per_id': 'a5sd14a6d5a6d',
                          'usrl_per_edit': true,
                          'usrl_per_delete': true,
                          'usrl_per_create': true,
                          'usrl_per_approve': true,
                          'usrl_per_active': true,
                          '_id': '6495485d89e08f5f14e0ae8f'
                        }
                      ],
                      'usrl_status': 'active',
                      'usrl_default': false,
                      'usrl_created_by': {
                        'user_id': '342ce7f2-2a2d-4e5a-8544-4a06261b091c',
                        'user_full_name': 'Backend Team',
                        'user_email': 'backend@yopmail.com',
                        'user_role': 'Super Admin',
                        'user_image': '',
                        'user_mobile_number': ''
                      },
                      'usrl_updated_by': {
                        'user_id': '342ce7f2-2a2d-4e5a-8544-4a06261b091c',
                        'user_full_name': 'Backend Team',
                        'user_email': 'backend@yopmail.com',
                        'user_role': 'Super Admin',
                        'user_image': '',
                        'user_mobile_number': ''
                      },
                      'usrl_id': '293a9664-a2e6-43ad-9150-f0d527779ece',
                      'usrl_created_on': '2023-06-23T07:23:09.461Z',
                      'usrl_updated_on': '2023-06-23T07:23:09.461Z'
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
                    example: 'Internal Server Error',
                  },
                },
              },
            },
          },
        },
      }
    },
    delete: {
      tags: ['User-Role'],
      summary: 'Delete User Role',
      security: [
        {
          bearerAuth: [],
        },
      ],
      parameters: [
        {
          name: 'usrl_id',
          in: 'path',
          description: 'The ID of the User Role to delete',
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

const roleStatusUpdate = {
  '/role/{usrl_id}/status': {
    put: {
      tags: ['User-Role'],
      summary: 'Update User Role status',
      security: [
        {
          bearerAuth: [],
        },
      ],
      parameters: [
        {
          name: 'usrl_id',
          in: 'path',
          description: 'The ID of the User Role to update',
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
                usrl_status: {
                  type: 'string',
                  example: 'active',
                  required: true,
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

const roleLookup = {
  '/role/lookup': {
    get: {
      tags: ['User-Role'],
      summary: 'Get User Role lookup',
      security: [
        {
          bearerAuth: [],
        },
      ],
      parameters: [
        {
          name: 'master',
          in: 'query',
          description: 'Get only master role if true',
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
                    type: 'array',
                    example: [
                      {
                        'usrl_name': 'Admin',
                        'usrl_id': '5a315866-7f68-493d-acd6-bb9c23f703c0'
                      },
                      {
                        'usrl_name': 'SEO',
                        'usrl_id': '1226e14a-ac95-43c4-b96b-97fbb66c3530'
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

const UserRole = { ...rolePagging, ...roleExport, ...roleAdd, ...roleGetUpdateDelete, ...roleStatusUpdate, ...roleLookup };
export default UserRole;