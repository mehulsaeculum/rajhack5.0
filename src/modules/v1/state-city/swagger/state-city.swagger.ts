const stateLookup = {
  '/state/lookup': {
    get: {
      tags: ['State'],
      summary: 'State lookup',
      security: [
        {
          bearerAuth: [],
        }
      ],
      parameters: [],
      responses: {
        200: {
          description: 'State retirieved successfully.',
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
  },
}

const cityLookup = {
  '/state/{state_id}/city/lookup': {
    get: {
      tags: ['State'],
      summary: 'city of state lookup',
      security: [
        {
          bearerAuth: [],
        }
      ],
      parameters: [
        {
          name: 'state_id',
          in: 'path',
          description: 'state id',
          required: true,
          type: 'string'
        }
      ],
      responses: {
        200: {
          description: 'State retirieved successfully.',
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
  },
}

export default {
  ...stateLookup,
  ...cityLookup,
};