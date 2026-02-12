import express, { urlencoded } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import userRoutes from './routes/user.route.js';
import cookieParser from 'cookie-parser';
import errorMiddleware from './middleware/error.middleware.js';

export const app = express();

app.use(express.json());
app.use(urlencoded({extended : true}));

app.use(cors ({
    origin : [process.env.FRONTEND_URL],
    credentials : true
}));

app.use(cookieParser());
app.use(morgan('dev'));

//3 route
app.use('/api/v1/user' , userRoutes);


//error middleWare
app.use(errorMiddleware);
