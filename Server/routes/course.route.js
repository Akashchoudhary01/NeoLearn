import {Router} from 'express';
import { getAllCourse  , getLectureByCourseId} from '../controllers/course.controller.js';

const router = Router();

router.get('/' , getAllCourse);
router.get('/:id' , getLectureByCourseId);

export default router;