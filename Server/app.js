import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import userRoutes from './routes/user.route.js';
import cookieParser from 'cookie-parser';

export const app = express();

app.use(express.json());

app.use(cors ({
    origin : [process.env.FRONTEND_URL],
    credentials : true
}));

app.use(cookieParser());
app.use(morgan('dev'));

//3 route
app.use('/api/v1/user' , userRoutes);


//for all unmatched routes
