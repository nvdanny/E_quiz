const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
module.exports = {
    signUp: async (data) => {
      try {
        const {username, password, email, phoneNumber} = data;
        const user = await User.findOne({ username });
        if (user) {
          return {
            error : 'User already exists'
          }
        }
    
        const newUser = new User({ username, password, email, phoneNumber });
        const salt = await bcrypt.genSalt(10);
        newUser.password = await bcrypt.hash(password, salt);
    
        await newUser.save();
    
        const payload = { id: newUser.id, role: newUser.role};
        jwt.sign(payload, config.secretOrKey, { expiresIn: '1h' }, (err, token) => {
          if (err) throw err;
          return {
            token,
          }
        });
      } 
      catch (err) {
        return {
          error: err
        }
      }
    },
    signIn: async (data) => {
      try {
        const {username, password} = data;
        const user = await User.findOne({ username });
        if (!user) {
          return {
            error: 'Invalid credentials',
          };
        }
    
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
          return {
            error: 'Invalid credentials',
          }
        }
    
        const payload = { id: user.id, role: user.role };
        jwt.sign(payload, config.secretOrKey, { expiresIn: '1h' }, (err, token) => {
          if (err) throw err;
          return {
            token,
          };
        });
      } catch (err) {
        return {
          error: 'Server error'
        }
      }
    }
}