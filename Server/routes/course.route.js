import {Router} from 'express';

const courseRouter = Router();

courseRouter.post('/create' , createCourse);

export default courseRouter;