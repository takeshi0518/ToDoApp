import mongoose from 'mongoose';
import env from 'dotenv';

env.config();

const MONGO_URI = process.env.MONGO_URI;

mongoose.connect(MONGO_URI);