const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('../config');
module.exports = {
    signUp: async (data) => {
      try {
        const {username, password, email, phoneNumber, birthday, university, major, year, studentId, linkFb, region} = data;
        const user = await User.findOne({ $or: [{ email: email }, { phoneNumber: phoneNumber }]});
        if (user) {
          return {
            error : 'User already exists'
          }
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        let newUser = new User({
          username: username,
          password: hashedPassword,
          phoneNumber: phoneNumber,
          email: email,
          birthday: birthday,
          university: university,
          major: major,
          year: year,
          linkFb: linkFb,
          studentId: studentId,
          displayName: data.displayName,
          region: region,
          identityCard: data.identityCard

        })
        newUser = await User.create(newUser);
        const payload = { id: newUser._id, role: newUser.role};
        const token = jwt.sign(payload, config.secretOrKey, { expiresIn: '2h' });
        return {
          accessToken: token,
          data: newUser,
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
        const {email, password} = data;
        const user = await User.findOne({email: email});
        if (!user) {
          return {
            error: 'Email not found',
          };
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
          return {
            error: 'Invalid password',
          }
        }
        const payload = { id: user._id, role: user.role };
        const accessToken = jwt.sign(payload, config.secretOrKey, { expiresIn: '2h' });
        const userObj = user.toObject();
        delete userObj.password;
        return {
          data: userObj,
          accessToken: accessToken,
        }
      } catch (err) {
        return {
          error: 'Server error'
        }
      }
    }
}