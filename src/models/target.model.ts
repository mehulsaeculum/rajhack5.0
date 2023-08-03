// external packages
const uuid = require('uuid/v4');
const mongoose = require('mongoose');
import { Schema } from 'mongoose';

// model plugins
import paginate from './plugins/paginate';
import toJSON from './plugins/tojson';
import fileExport from './plugins/export';

// user schema
import { userSchema } from './common.model';

const targetSchema = new Schema({
  trgt_id: {
    type: String,
    default: uuid
  },
  trgt_name: {
    type: String,
    trim: true
  },
  trgt_slug: {
    type: String,
    trim: true
  },
  trgt_img: {
    type: mongoose.Schema.Types.Mixed
  },
  trgt_index: {
    type: Number
  },
  trgt_domain: {
    type: String,
    trim: true
  },
  trgt_color: {
    type: String,
    trim: true
  },
  trgt_desc: {
    type: String,
  },
  trgt_custom_field: {
    type: Object
  },
  trgt_status: {
    type: String,
    trim: true
  },
  trgt_config: {
    type: Object
  },
  trgt_created_on: {
    type: Date,
    default: Date.now
  },
  trgt_created_by: {
    type: userSchema
  },
  trgt_updated_on: {
    type: Date,
    default: Date.now
  },
  trgt_updated_by: {
    type: userSchema
  },
  trgt_archived_on: {
    type: Date
  },
  trgt_archived_by: {
    type: userSchema
  }
}, { timestamps: false });

targetSchema.plugin(paginate).plugin(fileExport).plugin(toJSON);
export default mongoose.model('targets', targetSchema);
