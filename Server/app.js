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

app.use(urlencoded({extended : true}));
app.use(express.json());
app.use(cors({ origin: 'http://localhost:5173', credentials: true }));

app.use(cookieParser());
app.use(morgan('dev'));

//3 route
app.use('/api/v1/user' , userRoutes);
app.use('/api/v1/courses' , courseRouter);
app.use('/api/v1/' , miscellaneousRoute);
app.use('/api/v1/payments' , paymentRoute);


//error middleWare
app.use(errorMiddleware);
