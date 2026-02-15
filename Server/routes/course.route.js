import { Router } from "express";
import {
  getAllCourse,
  getLectureByCourseId,
  createCourse,
  deleteCourse,
  updateCourse,
  AddLectureToCourseById,
} from "../controllers/course.controller.js";
import { isLoggedIn, authorizedRoles } from "../middleware/auth.middleware.js";
import uploads from "../middleware/multer.middleware.js";

const router = Router();

router.get("/", getAllCourse);

router.get("/:id", isLoggedIn, getLectureByCourseId);

router.post(
  "/",
  isLoggedIn,
  uploads.single("thumbnail"),
  authorizedRoles("ADMIN"),
  createCourse,
);
router.post(
  "/:id",
  isLoggedIn,
  authorizedRoles("ADMIN"),
  uploads.single("lecture"),
  AddLectureToCourseById,
);

router.delete("/:id", isLoggedIn, authorizedRoles("ADMIN"), deleteCourse);

router.put(
  "/:id",
  isLoggedIn,
  uploads.single("thumbnail"),
  authorizedRoles("ADMIN"),
  updateCourse,
);

export default router;
