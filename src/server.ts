import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectDb } from './db/connect';
import routes from './routes/index'

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
connectDb();


// API Routes
app.use('/api', routes)


// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});