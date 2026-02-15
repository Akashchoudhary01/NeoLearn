import { Router } from "express";
import {
  getAllCourse,
  getLectureByCourseId,
  createCourse,
  deleteCourse,
  updateCourse,
} from "../controllers/course.controller.js";
import isLoggedIn from "../middleware/auth.middleware.js";
import uploads from "../middleware/multer.middleware.js";

const router = Router();

router.get("/", getAllCourse);
router.get("/:id", isLoggedIn, getLectureByCourseId);
router.post("/", isLoggedIn, uploads.single("thumbnail"), createCourse);
router.delete("/:id", isLoggedIn, deleteCourse);
router.put("/:id", isLoggedIn, uploads.single("thumbnail"), updateCourse);

export default router;
