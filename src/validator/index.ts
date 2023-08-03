// external packages
import Joi from 'joi';

// regular expressions
import Formates from './formats';

const getJoiValidationType = (data: any) => {
  switch (data.type) {
    case 'string':
      return Joi.string().allow(null, '')
    case 'number':
      return Joi.number().allow(null)
    case 'boolean':
      return Joi.boolean()
    case 'date':
      return Joi.date()
    case 'array':
      return Joi.array()
    case 'object':
      return Joi.object()
    case 'email':
      return Joi.string().email()
    case 'ref':
      return Joi.ref(data.ref)
    default:
      return Joi.any()
  }
}

const createJoiSchemaFromObject = (data: any) => {
  const schemaData: any = {}

  Object.keys(data).forEach((ele: any) => {
    let singleFieldSchema: any = getJoiValidationType(data[ele])

    if (data[ele].enum) {
      (data[ele].enum || []).forEach((value: any) => {
        singleFieldSchema = singleFieldSchema.valid(value)
      });
    }

    if (data[ele].min) {
      singleFieldSchema = singleFieldSchema.min(data[ele].min)
    }

    if (data[ele].max) {
      singleFieldSchema = singleFieldSchema.max(data[ele].max)
    }

    if (data[ele].pattern) {
      singleFieldSchema = singleFieldSchema.pattern(Formates[data[ele].pattern as keyof typeof Formates])
    }

    if (data[ele].messages) {
      singleFieldSchema = singleFieldSchema.messages(data[ele]?.messages)
    }

    if (data[ele].schema) {
      if (data[ele].type === 'array') {
        singleFieldSchema = singleFieldSchema.items(typeof data[ele].schema === 'string' ? getJoiValidationType({ type: data[ele].schema }) : createJoiSchemaFromObject(data[ele].schema))
      } else {
        singleFieldSchema = createJoiSchemaFromObject(data[ele].schema)
      }
    }

    if (data[ele].required) {
      singleFieldSchema = singleFieldSchema.required()
    }

    schemaData[ele] = singleFieldSchema
  })

  return Joi.object(schemaData).unknown(true)
}

const validators = (schema: Object, data: Object, callback: any) => {
  const { error, value } = createJoiSchemaFromObject(schema).validate(data)
  callback(error, value)
}

export default validators 