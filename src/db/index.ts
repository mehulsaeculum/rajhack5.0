// external packages
const mongoose = require('mongoose');

// establish a connection to MongoDB
mongoose.connect(process.env.DB_URL || '', {})
  .then(() => console.log('Connected to MongoDB...'))
  .catch((err: any) => console.error('Could not connect to MongoDB...', err));
