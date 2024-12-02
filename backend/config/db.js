import mongoose from 'mongoose';

export const dbConnection = async () => {
  try {
    await mongoose.connect('DB-Link', {  //Add db link here
      bufferCommands: false,
      connectTimeoutMS: 30000,
    });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('MongoDB connection error:', error);
  }
};


