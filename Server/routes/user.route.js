import {Router} from 'express';
import {register , login , logout , getprofile} from '../controllers/user.controller.js'

const router = Router();

router.post("/register" , register);
router.post("/login" , login);
router.get("/logout" , logout);
router.post("/me" , getprofile);

export default router;