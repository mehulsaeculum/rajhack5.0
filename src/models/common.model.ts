// external packages
import { Schema } from 'mongoose';

const userSchema = new Schema({
  user_id: {
    type: String,
    trim: true
  },
  user_full_name: {
    type: String,
    trim: true
  },
  user_email: {
    type: String,
    trim: true
  },
  user_role: {
    type: Object
  },
  user_image: {
    type: Object
  },
  user_mobile_number: {
    type: String,
    trim: true
  }
}, { _id: false });

export { userSchema }
