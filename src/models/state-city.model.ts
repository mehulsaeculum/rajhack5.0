const mongoose = require('mongoose');
import { Schema } from 'mongoose';
const uuid = require('uuid/v4');
// model plugins
import paginate from './plugins/paginate';
import toJSON from './plugins/tojson';
import fileExport from './plugins/export';

const citySchema = new Schema({
  city_id: {
    type: String,
    default: uuid
  },
  city_name: {
    type: String,
    trim: true
  },
}, { _id: false })

const stateSchema = new Schema({
  state_id: {
    type: String,
    default: uuid
  },
  state_name: {
    type: String,
    trim: true
  },
  state_city: {
    type: [citySchema]
  },
}, { timestamps: false });

stateSchema.plugin(toJSON);
stateSchema.plugin(fileExport);
stateSchema.plugin(paginate);

const StateCityModel = mongoose.model('state_cities', stateSchema);

export default StateCityModel;
