// external packages
const uuid = require('uuid/v4');
const mongoose = require('mongoose');
import { Schema } from 'mongoose';

// model plugins
import paginate from './plugins/paginate';
import toJSON from './plugins/tojson';
import fileExport from './plugins/export';

// user schema
import { userSchema as userCSchema } from './common.model';

const userSocialLinkSchema = new Schema({
  facebook: {
    type: String,
    trim: true
  },
  instagram: {
    type: String,
    trim: true
  },
  twitter: {
    type: String,
    trim: true
  },
  linkedin: {
    type: String,
    trim: true
  }
}, { _id: false });

const userSchema = new Schema({
  user_id: {
    type: String,
    default: uuid
  },
  user_first_name: {
    type: String,
    trim: true
  },
  user_last_name: {
    type: String,
    trim: true
  },
  user_full_name: {
    type: String,
    trim: true
  },
  user_name: {
    type: String,
    trim: true
  },
  user_email: {
    type: String,
    trim: true
  },
  user_password: {
    type: String,
    trim: true
  },
  user_mobile_number: {
    type: String,
    trim: true
  },
  user_fk_usrl_id: {
    type: String,
    trim: true
  },
  user_role: {
    type: Object,
  },
  user_image: {
    type: mongoose.Schema.Types.Mixed
  },
  user_status: {
    type: String,
    trim: true
  },
  user_config: {
    type: Object,
  },
  user_reset_token: {
    type: String,
    trim: true
  },
  user_default_target: {
    type: String,
    trim: true
  },
  user_target: {
    type: mongoose.Schema.Types.Mixed
  },
  user_reset_token_expired_at: {
    type: Date,
  },
  user_login_attempt: {
    type: Number,
    default: 0
  },
  user_login_attempt_release_at: {
    type: Date,
  },
  user_social_link: {
    type: userSocialLinkSchema
  },
  user_custom_field: {
    type: Object
  },
  user_created_by: {
    type: userCSchema,
  },
  user_created_on: {
    type: Date,
    default: Date.now
  },
  user_updated_by: {
    type: userCSchema,
  },
  user_updated_on: {
    type: Date,
    default: Date.now
  },
  user_archived_by: {
    type: userCSchema
  },
  user_archived_on: {
    type: Date
  }
}, { timestamps: false });

userSchema.plugin(paginate).plugin(fileExport).plugin(toJSON);
export default mongoose.model('users', userSchema);
