import mongoose from "mongoose";

export const connectDb = () => {
mongoose.connect(process.env.MONGODB_URI as string)
  .then(() => console.log('MongoDB connected✅'))
  .catch(err => console.error('MongoDB connection error🚨:', err));
}
