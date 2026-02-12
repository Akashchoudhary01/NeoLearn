import {Router} from 'express';
import {register , login , logout , getprofile, forgotPassword, resetPassword , ChangePassword} from '../controllers/user.controller.js'
import isLoggedIn from '../middleware/auth.middleware.js';
import uploads from '../middleware/multer.middleware.js';

const router = Router();

router.post("/register" , uploads.single('avatar') ,  register);
router.post("/login" , login); 
router.get("/logout" , logout);
router.get("/me" , isLoggedIn ,  getprofile);
router.post("/reset" , forgotPassword);
router.post("/reset/:token" , resetPassword);
router.post("/changepassword" ,isLoggedIn ,ChangePassword);

export default router;