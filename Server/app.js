import express, { urlencoded } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import userRoutes from './routes/user.route.js';
import cookieParser from 'cookie-parser';
import errorMiddleware from './middleware/error.middleware.js';
import courseRouter from './routes/course.route.js';
import paymentRoute from './routes/payment.route.js'
import miscellaneousRoute from './routes/miscellaneous.route.js'

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
app.use('/api/v1/courses' , courseRouter);
app.use('/api/v1/' , miscellaneousRoute);
app.use('/api/v1/payment' , paymentRoute);


//error middleWare
app.use(errorMiddleware);
