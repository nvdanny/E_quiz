const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('../config');
module.exports = {
    signUp: async (data) => {
      try {
        const {username, password, email, phoneNumber} = data;
        const user = await User.findOne({ $or: [{ email: email }, { phoneNumber: phoneNumber }]});
        if (user) {
          return {
            error : 'User already exists'
          }
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({
          username: username,
          password: hashedPassword,
          phoneNumber: phoneNumber,
          email: email,
        })
        await User.create(newUser);
        const payload = { id: newUser._id.toString(), role: newUser.role};
        const token = jwt.sign(payload, config.secretOrKey, { expiresIn: '6h' });
        return {
          token,
        }
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
        const user = await User.findOne({userName: username});
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