const login = {
  '/auth/login': {
    post: {
      tags: ['Auth'],
      summary: 'Login',
      security: [],
      requestBody: {
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                user_email: {
                  type: 'string',
                  example: 'backend@yopmail.com',
                },
                user_password: {
                  type: 'string',
                  description: `Must contain Uppercas, number, and special character.`,
                  example: 'Admin@123',
                },
                is_keep_signin: {
                  type: 'boolean'
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
                      'token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJjb2RlIjoibHFsN0NEWEoyOHFzMFF5TWcwZE1qcGtmVkh5N1RzIiwidXNlcl9pZCI6IjM0MmNlN2YyLTJhMmQtNGU1YS04NTQ0LTRhMDYyNjFiMDkxYyIsInVzZXJfZW1haWwiOiJiYWNrZW5kQHlvcG1haWwuY29tIn0.6fQDTLjhsQakaQM3C6Vq8h76dc-LQtpFNrF4lk78DO0',
                      'user': {
                        'user_first_name': 'Backend',
                        'user_last_name': 'Team',
                        'user_full_name': 'Backend Team',
                        'user_name': 'backend_team',
                        'user_email': 'backend@yopmail.com',
                        'user_password': '09zqjs8fiP93st1tnF+nRNT/Ew20uZmAC9srSqHap94=',
                        'user_fk_usrl_id': '5feddf56-73df-4564-9707-f2477f3be6fd',
                        'user_role': {
                          'usrl_name': 'Super Admin',
                          'usrl_id': '5feddf56-73df-4564-9707-f2477f3be6fd'
                        },
                        'user_status': 'active',
                        'user_default_target': 'd5867ee8-34b5-4923-87b4-a7ba35ceaa06',
                        'user_target': [
                          {
                            '_id': '64635dbd20c89c33db099b9e',
                            'trgt_name': 'Hindi Jagran',
                            'trgt_slug': 'hindi_jagran',
                            'trgt_img': 'https://storage.googleapis.com/dev-cms-backend-media/target/1686134933903-b5995546-848f-40e5-aacd-20342ee8a907.png',
                            'trgt_domain': 'https://hindijagran.com',
                            'trgt_color': '#ffd966',
                            'trgt_desc': 'Hindi Jagran',
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
                              'user_id': '4fdc9862-2ebf-48e8-827b-c420e1adcff8',
                              'user_full_name': 'Manish Parihar',
                              'user_email': 'manishparihar@tatvic.com',
                              'user_role': 'Super Admin',
                              'user_image': '',
                              'user_mobile_number': ''
                            },
                            'trgt_id': '616a9df6-9ffa-4a13-81d8-c65ea2f92d6b',
                            'trgt_created_on': '2023-05-16T10:41:01.682Z',
                            'trgt_updated_on': '2023-06-07T10:48:58.270Z',
                            '__v': 0,
                            'trgt_index': 9
                          },
                          {
                            '_id': '644b8fdd0f997360b346bf23',
                            'trgt_name': 'Nai Dunia',
                            'trgt_slug': 'nai_dunia',
                            'trgt_img': 'https://storage.googleapis.com/dev-cms-backend-media/target/1686134487113-71e65c92-80f3-413b-a6b0-499633962440.png',
                            'trgt_domain': 'https://www.naidunia.com/',
                            'trgt_desc': 'Naidunia Bhopal ePaper: Read Latest Hindi Newspaper online.',
                            'trgt_status': 'active',
                            'trgt_created_by': {
                              'user_id': '2ad2a8e6-b7e6-473c-ae37-913aaf033b61',
                              'user_full_name': 'QA Team',
                              'user_role': 'Super Admin',
                              'user_image': ''
                            },
                            'trgt_updated_by': {
                              'user_id': '4fdc9862-2ebf-48e8-827b-c420e1adcff8',
                              'user_full_name': 'Manish Parihar',
                              'user_email': 'manishparihar@tatvic.com',
                              'user_role': 'Super Admin',
                              'user_image': '',
                              'user_mobile_number': ''
                            },
                            'trgt_id': '4f6fc5e0-946e-44e1-91dd-0b7fbc0ebfc6',
                            'trgt_created_on': '2023-04-28T09:20:29.186Z',
                            'trgt_updated_on': '2023-06-07T10:41:34.587Z',
                            '__v': 0,
                            'trgt_color': '#95bdff',
                            'trgt_index': 10
                          },
                          {
                            'trgt_id': '82d8e272-d6f2-4225-9629-4a4012a43e19',
                            'trgt_name': 'Jagran English',
                            'trgt_slug': 'english-jagran',
                            'trgt_img': 'https://storage.googleapis.com/dev-cms-backend-media/target/1687154288081-67fae68b-c3c4-4c47-bceb-1e91b9a1126d.png',
                            'trgt_index': 11,
                            'trgt_domain': 'http://englishjagran.in',
                            'trgt_color': '#894f29',
                            'trgt_desc': 'Nice Application',
                            'trgt_status': 'active'
                          },
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
                            '_id': '6459c5d4ce8eac7b14e87cca',
                            'trgt_name': 'Jagran Punjabi',
                            'trgt_slug': 'jagran_panjabi',
                            'trgt_img': 'https://storage.googleapis.com/dev-cms-backend-media/target/1686134951020-1a0c2e82-75f1-4092-b777-e64552edac6a.png',
                            'trgt_domain': 'http://Jagranpunjabi.com',
                            'trgt_status': 'active',
                            'trgt_created_by': {
                              'user_id': '41715f7d-928d-4bae-ad19-6c0cccbe29b3',
                              'user_full_name': 'Sachin Shillak',
                              'user_role': 'Super Admin',
                              'user_image': ''
                            },
                            'trgt_updated_by': {
                              'user_id': '4fdc9862-2ebf-48e8-827b-c420e1adcff8',
                              'user_full_name': 'Manish Parihar',
                              'user_email': 'manishparihar@tatvic.com',
                              'user_role': 'Super Admin',
                              'user_image': '',
                              'user_mobile_number': ''
                            },
                            'trgt_id': 'bc8baaae-7138-449b-b00d-29a4e5b2b94e',
                            'trgt_created_on': '2023-05-09T04:02:28.739Z',
                            'trgt_updated_on': '2023-06-07T10:49:17.331Z',
                            '__v': 0,
                            'trgt_color': '#f6dda0',
                            'trgt_desc': 'jagran_panjabi',
                            'trgt_index': 13
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
                          },
                          {
                            '_id': '6459c4cace8eac7b14e87c6c',
                            'trgt_name': 'OnlyMyHealth',
                            'trgt_slug': 'onlymyhealth',
                            'trgt_img': 'https://storage.googleapis.com/dev-cms-backend-media/target/1686134970798-b2bd40ea-3aa6-456b-9180-9232f8d118af.png',
                            'trgt_domain': 'https://OnlyMyHealth.com',
                            'trgt_status': 'active',
                            'trgt_created_by': {
                              'user_id': '41715f7d-928d-4bae-ad19-6c0cccbe29b3',
                              'user_full_name': 'Sachin Shillak',
                              'user_role': 'Super Admin',
                              'user_image': ''
                            },
                            'trgt_updated_by': {
                              'user_id': '4fdc9862-2ebf-48e8-827b-c420e1adcff8',
                              'user_full_name': 'Manish Parihar',
                              'user_email': 'manishparihar@tatvic.com',
                              'user_role': 'Super Admin',
                              'user_image': '',
                              'user_mobile_number': ''
                            },
                            'trgt_id': '1244b21c-d879-4e86-962d-1abc676e31b7',
                            'trgt_created_on': '2023-05-09T03:58:02.087Z',
                            'trgt_updated_on': '2023-06-07T10:49:35.293Z',
                            '__v': 0,
                            'trgt_color': '#c2debf',
                            'trgt_desc': 'OnlyMyHealth',
                            'trgt_index': 16
                          },
                          {
                            '_id': '647820fee357673c2764e886',
                            'trgt_name': 'Jagran - Dev',
                            'trgt_slug': 'jagran-dev',
                            'trgt_img': 'https://storage.googleapis.com/dev-cms-backend-media/target/1685594343516-f8559e0a-f4ca-4701-bc70-d8061f8a07de.webp',
                            'trgt_index': 18,
                            'trgt_domain': 'http://jagrandev.com',
                            'trgt_color': '#cfddc2',
                            'trgt_desc': 'Jagran-dev',
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
                              'user_id': '2ad2a8e6-b7e6-473c-ae37-913aaf033b61',
                              'user_full_name': 'QA Team',
                              'user_email': 'qa@yopmail.com',
                              'user_role': 'Super Admin',
                              'user_image': '',
                              'user_mobile_number': ''
                            },
                            'trgt_id': 'd5867ee8-34b5-4923-87b4-a7ba35ceaa06',
                            'trgt_created_on': '2023-06-01T04:39:26.139Z',
                            'trgt_updated_on': '2023-06-01T04:39:26.139Z',
                            '__v': 0
                          },
                          {
                            '_id': '64782126e357673c2764e893',
                            'trgt_name': 'Jagran- Test',
                            'trgt_slug': 'jagran--test',
                            'trgt_img': 'https://storage.googleapis.com/dev-cms-backend-media/target/1685594397849-566fd677-8e61-4303-ae02-b163ec5795c4.webp',
                            'trgt_index': 19,
                            'trgt_domain': 'http://jagrantest.com',
                            'trgt_color': '#e8c5c5',
                            'trgt_desc': 'Jagran- Test',
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
                              'user_id': '2ad2a8e6-b7e6-473c-ae37-913aaf033b61',
                              'user_full_name': 'QA Team',
                              'user_email': 'qa@yopmail.com',
                              'user_role': 'Super Admin',
                              'user_image': '',
                              'user_mobile_number': ''
                            },
                            'trgt_id': 'a8ca2f19-2c5b-43c2-805e-8979101a3953',
                            'trgt_created_on': '2023-06-01T04:40:06.567Z',
                            'trgt_updated_on': '2023-06-01T04:40:06.567Z',
                            '__v': 0
                          },
                          {
                            '_id': '647c53fa65dd56f35f2d50be',
                            'trgt_name': 'Tatvic Analytics',
                            'trgt_slug': 'tatvic-analytics',
                            'trgt_img': 'https://storage.googleapis.com/dev-cms-backend-media/target/1685869968404-a7713d76-0f78-419e-ac04-6a79891fb3fc.png',
                            'trgt_index': 20,
                            'trgt_domain': 'http://tatvicanalytics.com',
                            'trgt_color': 'rgba(0,192,197,0.4)',
                            'trgt_desc': 'Tatvic is a Great Place to Work by meeting and exceeding global benchmarks in Fair Treatment.',
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
                              'user_id': '2ad2a8e6-b7e6-473c-ae37-913aaf033b61',
                              'user_full_name': 'QA Team',
                              'user_email': 'qa@yopmail.com',
                              'user_role': 'Super Admin',
                              'user_image': '',
                              'user_mobile_number': ''
                            },
                            'trgt_id': 'd91908c0-5bf9-4046-b63c-ae0d21f35ddb',
                            'trgt_created_on': '2023-06-04T09:06:02.940Z',
                            'trgt_updated_on': '2023-06-04T09:12:53.420Z',
                            '__v': 0
                          },
                          {
                            '_id': '647d71c065dd56f35f2e0bd6',
                            'trgt_name': 'Jagran-Test1',
                            'trgt_slug': 'jagran_test1',
                            'trgt_img': 'https://storage.googleapis.com/dev-cms-backend-media/target/1685942592867-c117a241-9e54-4777-b2dc-de18a3940651.jpeg',
                            'trgt_index': 21,
                            'trgt_domain': 'https://www.Jagran.com',
                            'trgt_color': '#db1d1d',
                            'trgt_status': 'active',
                            'trgt_created_by': {
                              'user_id': '41715f7d-928d-4bae-ad19-6c0cccbe29b3',
                              'user_full_name': 'Sachin Shillak',
                              'user_email': 'sachin@tatvic.com',
                              'user_role': 'Super Admin',
                              'user_image': '',
                              'user_mobile_number': ''
                            },
                            'trgt_updated_by': {
                              'user_id': '41715f7d-928d-4bae-ad19-6c0cccbe29b3',
                              'user_full_name': 'Sachin Shillak',
                              'user_email': 'sachin@tatvic.com',
                              'user_role': 'Super Admin',
                              'user_image': '',
                              'user_mobile_number': ''
                            },
                            'trgt_id': 'b37bf9c6-0a64-48d2-9fa0-93e3b99f809d',
                            'trgt_created_on': '2023-06-05T05:25:20.235Z',
                            'trgt_updated_on': '2023-06-05T05:27:48.522Z',
                            '__v': 0
                          },
                          {
                            '_id': '647edaec65dd56f35f2ec2e9',
                            'trgt_name': 'Jagran Test123',
                            'trgt_slug': 'test123',
                            'trgt_img': 'https://storage.googleapis.com/dev-cms-backend-media/target/1686035128723-7a93810e-8fcf-4018-b932-b638480f40a0.jpeg',
                            'trgt_index': 22,
                            'trgt_domain': 'https://www.Jagrantest.com',
                            'trgt_color': '#c90f89',
                            'trgt_desc': 'Jagran Test123',
                            'trgt_status': 'active',
                            'trgt_created_by': {
                              'user_id': '41715f7d-928d-4bae-ad19-6c0cccbe29b3',
                              'user_full_name': 'Sachin Shillak',
                              'user_email': 'sachin@tatvic.com',
                              'user_role': 'Super Admin',
                              'user_image': '',
                              'user_mobile_number': ''
                            },
                            'trgt_updated_by': {
                              'user_id': '41715f7d-928d-4bae-ad19-6c0cccbe29b3',
                              'user_full_name': 'Sachin Shillak',
                              'user_email': 'sachin@tatvic.com',
                              'user_role': 'Super Admin',
                              'user_image': '',
                              'user_mobile_number': ''
                            },
                            'trgt_id': '01614941-eca2-4a2e-9951-f0024812a0ac',
                            'trgt_created_on': '2023-06-06T07:06:20.473Z',
                            'trgt_updated_on': '2023-06-06T07:10:37.803Z',
                            '__v': 0
                          },
                          {
                            'trgt_id': '8adf79cf-3608-4772-a9d7-1b8e31779ea7',
                            'trgt_name': 'Gujarati Jagran',
                            'trgt_slug': 'gujarati-jagran',
                            'trgt_img': 'https://storage.googleapis.com/dev-cms-backend-media/target/1686298908910-c890f66b-0026-43b2-8c89-690fdc77bf72.png',
                            'trgt_index': 24,
                            'trgt_domain': 'https://gujaratiJagran.com',
                            'trgt_color': '#95b930',
                            'trgt_desc': 'Gujarati Jagran',
                            'trgt_status': 'active',
                            'trgt_created_on': '2023-06-09T08:21:56.025Z',
                            'trgt_created_by': {
                              'user_id': '4fdc9862-2ebf-48e8-827b-c420e1adcff8',
                              'user_full_name': 'Manish Parihar',
                              'user_email': 'manishparihar@tatvic.com',
                              'user_role': 'Super Admin',
                              'user_image': '',
                              'user_mobile_number': ''
                            },
                            'trgt_updated_on': '2023-06-14T08:49:40.881Z',
                            'trgt_updated_by': {
                              'user_id': 'f03a0719-71c6-4603-ab94-6e09cdbcb01b',
                              'user_full_name': 'Abhishek Pal',
                              'user_email': 'abhishek.pal@jagrannewmedia.com',
                              'user_role': 'Super Admin',
                              'user_image': '',
                              'user_mobile_number': ''
                            },
                            '_id': '6482e124aeedea2c5a7a4fad',
                            '__v': 0
                          }
                        ],
                        'user_login_attempt': 0,
                        'user_created_by': {
                          'user_id': '6e4b6ba2-c237-4326-82d6-ebf3c9e397db',
                          'user_full_name': 'Backend Team',
                          'user_role': 'Admin',
                          'user_image': ''
                        },
                        'user_updated_by': {
                          'user_id': '342ce7f2-2a2d-4e5a-8544-4a06261b091c',
                          'user_full_name': 'Backend Team',
                          'user_email': 'backend@yopmail.com',
                          'user_role': 'Super Admin',
                          'user_image': '',
                          'user_mobile_number': ''
                        },
                        'user_id': '342ce7f2-2a2d-4e5a-8544-4a06261b091c',
                        'user_created_on': '2023-04-28T08:59:23.386Z',
                        'user_updated_on': '2023-06-13T06:49:01.704Z',
                        'user_login_attempt_release_at': null,
                        'user_reset_token': 'XIVWIz5oDX7HXdKkJtUabwmkZciQaK',
                        'user_reset_token_expired_at': '2023-06-22T10:08:49.488Z',
                        'access': {
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
                        }
                      }
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
        }
      }
    }
  }
};

const forgotPassword = {
  '/auth/forgot-password': {
    post: {
      tags: ['Auth'],
      summary: 'Forgot Password',
      security: [],
      requestBody: {
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                user_email: {
                  type: 'string',
                  example: 'john.snow@gmail.com',
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
        }
      }
    }
  },
}

const resetPassword = {
  '/auth/reset-password': {
    put: {
      tags: ['Auth'],
      summary: 'Reset Password',
      security: [],
      requestBody: {
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                user_reset_token: {
                  type: 'string',
                  example: 'pOgH8N71MjBUftxjfSVWASZucdZIou',
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
        }
      }
    }
  },
}

const resetTokenValidate = {
  '/auth/validate/reset-link': {
    get: {
      tags: ['Auth'],
      summary: 'Validate Reset Token',
      security: [],
      requestBody: {},
      parameters: [
        {
          name: 'token',
          in: 'query',
          description: 'Reset token',
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
                    example: 'Oops! Something went wrong.',
                  }
                },
              },
            },
          },
        }
      }
    }
  },
}

// const validateToken = {
//   '/auth/validate/token': {
//     get: {
//       tags: ['Auth'],
//       summary: 'Validate Token',
//       security: [
//         {
//           bearerAuth: [],
//         },
//       ],
//       requestBody: {},
//       responses: {
//         200: {
//           content: {
//             'application/json': {
//               schema: {
//                 type: 'object',
//                 properties: {
//                   status: {
//                     type: 'number',
//                     example: 200
//                   },
//                   message: {
//                     type: 'string',
//                     example: 'OK',
//                   }
//                 },
//               },
//             },
//           },
//         },
//         500: {
//           description: 'Internal Server Error',
//           content: {
//             'application/json': {
//               schema: {
//                 type: 'object',
//                 properties: {
//                   status: {
//                     type: 'number',
//                     example: 500,
//                   },
//                   message: {
//                     type: 'string',
//                     example: 'Oops! Something went wrong.',
//                   }
//                 },
//               },
//             },
//           },
//         }
//       }
//     }
//   },
// }

const logout = {
  '/auth/logout': {
    get: {
      tags: ['Auth'],
      summary: 'Logout User',
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
        }
      }
    }
  }
}

const Auth = { ...login, ...forgotPassword, ...resetPassword, ...resetTokenValidate, ...logout };
export default Auth;