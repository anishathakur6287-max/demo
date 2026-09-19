const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please provide your full name'],
      trim: true,
      maxlength: [100, 'Name cannot exceed 100 characters']
    },
    email: {
      type: String,
      required: [true, 'Please provide your university or personal email'],
      unique: true,
      lowercase: true,
      trim: true,
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        'Please provide a valid email address'
      ]
    },
    password: {
      type: String,
      required: [true, 'Please provide a password'],
      minlength: [6, 'Password must be at least 6 characters']
    },
    role: {
      type: String,
      enum: ['student', 'faculty', 'staff', 'alumni'],
      default: 'student'
    },
    department: {
      type: String,
      default: 'Computer Science & AI'
    },
    studentId: {
      type: String,
      default: () => 'JNU-' + Math.floor(100000 + Math.random() * 900000)
    },
    avatar: {
      type: String,
      default: ''
    }
  },
  {
    timestamps: true
  }
);

// Fallback in-memory store if MongoDB is not running locally
const inMemoryUsers = [];

module.exports = {
  UserModel: mongoose.models.User || mongoose.model('User', userSchema),
  inMemoryUsers
};
