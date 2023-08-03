// external packages
const mongoose = require('mongoose');
const uuid = require('uuid/v4');
import { Schema } from 'mongoose';

// model plugins
import paginate from './plugins/paginate';
import toJSON from './plugins/tojson';
import fileExport from './plugins/export';

// user schema
import { userSchema } from './common.model';

const userRolePermissionSchema = new Schema({
  per_name: {
    type: String
  },
  per_id: {
    type: String,
    trim: true
  },
  usrl_per_all: {
    type: Boolean
  },
  usrl_per_view: {
    type: Boolean
  },
  usrl_per_edit: {
    type: Boolean
  },
  usrl_per_delete: {
    type: Boolean
  },
  usrl_per_create: {
    type: Boolean
  },
  usrl_per_approve: {
    type: Boolean
  },
  usrl_per_active: {
    type: Boolean
  }
})

const userRoleSchema = new Schema({
  usrl_id: {
    type: String,
    default: uuid
  },
  usrl_name: {
    type: String,
    trim: true
  },
  usrl_desc: {
    type: String,
    trim: true
  },
  usrl_associate: {
    type: String,
    trim: true
  },
  usrl_permission: {
    type: [userRolePermissionSchema]
  },
  usrl_status: {
    type: String,
    trim: true
  },
  usrl_default: {
    type: Boolean,
    default: false
  },
  usrl_custom_field: {
    type: Object
  },
  usrl_config: {
    type: Object,
  },
  usrl_created_on: {
    type: Date,
    default: Date.now
  },
  usrl_created_by: {
    type: userSchema,
  },
  usrl_updated_on: {
    type: Date,
    default: Date.now
  },
  usrl_updated_by: {
    type: userSchema,
  },
  usrl_archived_on: {
    type: Date
  },
  usrl_archived_by: {
    type: userSchema
  }
}, { timestamps: false });

userRoleSchema.plugin(paginate).plugin(fileExport).plugin(toJSON);
export default mongoose.model('users_roles', userRoleSchema);
