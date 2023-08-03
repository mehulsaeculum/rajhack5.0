// external packages
const uuid = require('uuid/v4');
const mongoose = require('mongoose');
import { Schema } from 'mongoose';

// model plugins
import paginate from './plugins/paginate';
import toJSON from './plugins/tojson';

// user schema
import { userSchema } from './common.model';

const perParentSchema = new Schema({
  per_id: {
    type: String,
    default: uuid
  },
  per_name: {
    type: String,
    trim: true
  },
});

const permissionSchema = new Schema({
  per_id: {
    type: String,
    default: uuid
  },
  per_name: {
    type: String,
    trim: true
  },
  per_desc: {
    type: String,
    trim: true
  },
  per_type: {
    type: String
  },
  per_parent: {
    type: perParentSchema,
    default: null
  },
  per_parent_id: {
    type: String
  },
  per_create: {
    type: Boolean
  },
  per_view: {
    type: Boolean
  },
  per_edit: {
    type: Boolean
  },
  per_delete: {
    type: Boolean
  },
  per_approve: {
    type: Boolean
  },
  per_active: {
    type: Boolean
  },
  per_status: {
    type: String,
    trim: true
  },
  per_custom_field: {
    type: Object
  },
  per_config: {
    type: Object
  },
  per_created_on: {
    type: Date,
    default: Date.now
  },
  per_created_by: {
    type: userSchema
  },
  per_updated_on: {
    type: Date,
    default: Date.now
  },
  per_updated_by: {
    type: userSchema
  },
  per_archived_on: {
    type: Date
  },
  per_archived_by: {
    type: userSchema
  }
}, { timestamps: false });

permissionSchema.plugin(paginate).plugin(toJSON);
export default mongoose.model('permissions', permissionSchema);
