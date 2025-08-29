import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import { AuthRoutes } from './routes/AuthRoutes';
import { ElectionRoutes } from './routes/ElectionRoutes';

dotenv.config();
export const app = express();


// CORS configuration
app.use(cors({
  origin: process.env.CLIENT_ORIGIN || 'http://localhost:4300',
  credentials: true, // Required if you're using cookies/sessions
}));

app.use(express.json());
app.use('/api/health', (req, res) => res.send('API is running'));
app.use('/api/auth', AuthRoutes);
app.use('/api/elections', ElectionRoutes);
// app.use('/api/users', UserRoutes);
// app.use('/api/votes', VoteRoutes);
