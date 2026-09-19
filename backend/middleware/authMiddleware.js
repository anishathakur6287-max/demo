const jwt = require('jsonwebtoken');
const { UserModel, inMemoryUsers } = require('../models/User');
const { getDBStatus } = require('../config/db');

const protect = async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    token = req.headers.authorization.split(' ')[1];
  }

  if (!token) {
    return res.status(401).json({
      success: false,
      message: 'Access denied. No token provided.'
    });
  }

  try {
    const secret = process.env.JWT_SECRET || 'super_secret_university_jwt_key_2026_xyz123';
    const decoded = jwt.verify(token, secret);

    const { connected } = getDBStatus();
    let user;

    if (connected) {
      user = await UserModel.findById(decoded.id).select('-password');
    } else {
      user = inMemoryUsers.find(u => u._id.toString() === decoded.id.toString());
      if (user) {
        const { password, ...sanitized } = user;
        user = sanitized;
      }
    }

    if (!user) {
      return res.status(401).json({
        success: false,
        message: 'The user belonging to this token no longer exists.'
      });
    }

    req.user = user;
    next();
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: 'Invalid or expired token.'
    });
  }
};

module.exports = { protect };
