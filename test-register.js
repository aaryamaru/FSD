require('dotenv').config();
const mongoose = require('mongoose');
const User = require('./models/User');

mongoose.connect(process.env.MONGO_URI)
  .then(async () => {
    try {
      const user = new User({ username: 'cmdline_test_' + Date.now(), password: 'password123' });
      await user.save();
      console.log('Success!');
    } catch (e) {
      console.error('Error:', e);
    }
    process.exit(0);
  });
