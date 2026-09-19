const mongoose = require('mongoose');

let isConnected = false;

const connectDB = async () => {
  const uri = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/university_portal';

  // Check if Atlas placeholders are still unfilled
  if (uri.includes('<username>') || uri.includes('<password>')) {
    console.warn(`[MongoDB Atlas] Notice: Placeholder <username> or <password> detected in MONGODB_URI.`);
    console.warn(`[MongoDB Atlas] Please replace <username> and <password> with your actual MongoDB Atlas database credentials in backend/.env.`);
    console.warn(`[MongoDB Atlas] Running in fallback mode until credentials are provided.`);
    isConnected = false;
    return;
  }

  try {
    const conn = await mongoose.connect(uri, {
      serverSelectionTimeoutMS: 5000
    });
    isConnected = true;
    console.log(`[MongoDB Atlas] ✓ Connected successfully: ${conn.connection.host}`);
  } catch (error) {
    console.warn(`[MongoDB Warning] Could not connect to MongoDB Atlas (${error.message}).`);
    console.warn(`[MongoDB Warning] Check your IP Whitelist (Network Access) in MongoDB Atlas and user password.`);
    console.warn(`[MongoDB Warning] Running in fallback mode.`);
    isConnected = false;
  }
};

const getDBStatus = () => ({
  connected: isConnected,
  type: isConnected ? 'MongoDB Atlas (Mongoose)' : 'Resilient In-Memory Store'
});

module.exports = { connectDB, getDBStatus };
