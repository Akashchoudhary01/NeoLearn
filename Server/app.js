import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';

export const app = express();

app.use(express.json());

app.use(cors ({
    origin : [process.env.FRONTEND_URL],
    credentials : true
}));

app.use(cookieParser());
app.use(cookieParser());

//3 route


//for all unmatched routes
