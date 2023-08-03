// external packages
const uuid = require('uuid/v4');
const mongoose = require('mongoose');
import { Schema } from 'mongoose';

// model plugins
import toJSON from './plugins/tojson';

// user schema
import { userSchema } from './common.model';

const userLoginSchema = new Schema({
  usrlg_id: {
    type: String,
    default: uuid
  },
  usrlg_fk_user_id: {
    type: String,
    trim: true
  },
  usrlg_access_code: {
    type: String,
    trim: true
  },
  usrlg_logout: {
    type: Boolean,
    default: false
  },
  usrlg_logout_at: {
    type: Date,
  },
  usrlg_expired_at: {
    type: Date,
  },
  usrlg_version: {
    type: String,
    trim: true
  },
  usrlg_ip: {
    type: String,
    trim: true
  },
  usrlg_browser: {
    type: String,
    trim: true
  },
  usrlg_device: {
    type: String,
    trim: true
  },
  usrlg_custom_field: {
    type: Object
  },
  usrlg_created_on: {
    type: Date,
    default: Date.now
  },
  usrlg_created_by: {
    type: userSchema
  },
  usrlg_updated_on: {
    type: Date,
    default: Date.now
  },
  usrlg_updated_by: {
    type: userSchema
  },
}, { timestamps: false });

userLoginSchema.plugin(toJSON);
export default mongoose.model('user_logins', userLoginSchema);
