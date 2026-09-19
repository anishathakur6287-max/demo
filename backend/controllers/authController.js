const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { UserModel, inMemoryUsers } = require('../models/User');
const { getDBStatus } = require('../config/db');

// Helper to generate JWT Token
const generateToken = (id) => {
  const secret = process.env.JWT_SECRET || 'super_secret_university_jwt_key_2026_xyz123';
  return jwt.sign({ id }, secret, {
    expiresIn: '7d'
  });
};

// @desc    Register a new user (Student / Faculty / Staff / Alumni)
// @route   POST /api/auth/register
// @access  Public
const registerUser = async (req, res) => {
  try {
    const { name, email, password, role, department } = req.body;

    // Validation
    if (!name || !email || !password) {
      return res.status(400).json({
        success: false,
        message: 'Please provide full name, email, and password.'
      });
    }

    if (password.length < 6) {
      return res.status(400).json({
        success: false,
        message: 'Password must be at least 6 characters.'
      });
    }

    const { connected } = getDBStatus();

    // Check if user already exists
    if (connected) {
      const userExists = await UserModel.findOne({ email: email.toLowerCase() });
      if (userExists) {
        return res.status(400).json({
          success: false,
          message: 'An account with this email already exists.'
        });
      }

      // Hash password
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);

      const studentId = (role === 'faculty' ? 'JNU-FAC-' : role === 'staff' ? 'JNU-STF-' : 'JNU-') +
        Math.floor(100000 + Math.random() * 900000);

      const newUser = await UserModel.create({
        name,
        email: email.toLowerCase(),
        password: hashedPassword,
        role: role || 'student',
        department: department || 'General Studies',
        studentId,
        avatar: `https://api.dicebear.com/7.x/shapes/svg?seed=${encodeURIComponent(name)}`
      });

      const token = generateToken(newUser._id);

      return res.status(201).json({
        success: true,
        message: 'Account registered successfully!',
        token,
        user: {
          id: newUser._id,
          name: newUser.name,
          email: newUser.email,
          role: newUser.role,
          department: newUser.department,
          studentId: newUser.studentId,
          avatar: newUser.avatar,
          createdAt: newUser.createdAt
        }
      });
    } else {
      // In-Memory Fallback
      const userExists = inMemoryUsers.find(u => u.email.toLowerCase() === email.toLowerCase());
      if (userExists) {
        return res.status(400).json({
          success: false,
          message: 'An account with this email already exists.'
        });
      }

      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
      const id = Date.now().toString();
      const studentId = (role === 'faculty' ? 'JNU-FAC-' : role === 'staff' ? 'JNU-STF-' : 'JNU-') +
        Math.floor(100000 + Math.random() * 900000);

      const newUser = {
        _id: id,
        name,
        email: email.toLowerCase(),
        password: hashedPassword,
        role: role || 'student',
        department: department || 'General Studies',
        studentId,
        avatar: `https://api.dicebear.com/7.x/shapes/svg?seed=${encodeURIComponent(name)}`,
        createdAt: new Date()
      };

      inMemoryUsers.push(newUser);
      const token = generateToken(id);

      return res.status(201).json({
        success: true,
        message: 'Account registered successfully! (In-Memory Session)',
        token,
        user: {
          id: newUser._id,
          name: newUser.name,
          email: newUser.email,
          role: newUser.role,
          department: newUser.department,
          studentId: newUser.studentId,
          avatar: newUser.avatar,
          createdAt: newUser.createdAt
        }
      });
    }
  } catch (error) {
    console.error('Registration error:', error);
    return res.status(500).json({
      success: false,
      message: 'Server error during registration. Please try again.'
    });
  }
};

// @desc    Authenticate user & get token
// @route   POST /api/auth/login
// @access  Public
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: 'Please provide both email and password.'
      });
    }

    const { connected } = getDBStatus();
    let user;

    if (connected) {
      user = await UserModel.findOne({ email: email.toLowerCase() });
    } else {
      user = inMemoryUsers.find(u => u.email.toLowerCase() === email.toLowerCase());
    }

    if (!user) {
      return res.status(401).json({
        success: false,
        message: 'Invalid credentials. No user found with this email.'
      });
    }

    // Compare passwords
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: 'Invalid password. Please check your credentials.'
      });
    }

    const token = generateToken(user._id);

    return res.status(200).json({
      success: true,
      message: 'Logged in successfully!',
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        department: user.department,
        studentId: user.studentId,
        avatar: user.avatar,
        createdAt: user.createdAt
      }
    });
  } catch (error) {
    console.error('Login error:', error);
    return res.status(500).json({
      success: false,
      message: 'Server error during login. Please try again.'
    });
  }
};

// @desc    Get current logged in user
// @route   GET /api/auth/me
// @access  Private
const getMe = async (req, res) => {
  try {
    return res.status(200).json({
      success: true,
      user: req.user
    });
  } catch (error) {
    console.error('GetMe error:', error);
    return res.status(500).json({
      success: false,
      message: 'Server error fetching user profile.'
    });
  }
};

module.exports = {
  registerUser,
  loginUser,
  getMe
};
