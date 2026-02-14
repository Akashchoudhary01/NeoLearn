import {Router} from 'express';
import { getAllCourse  , getLectureByCourseId , createCourse} from '../controllers/course.controller.js';
import isLoggedIn from '../middleware/auth.middleware.js';

const router = Router();

router.get('/' , getAllCourse);
router.get('/:id' , isLoggedIn ,  getLectureByCourseId);
router.post ('/' , isLoggedIn ,  createCourse);

export default router;