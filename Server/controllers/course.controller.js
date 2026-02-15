import fs from 'fs';
import COURSE from "../models/course.model.js";
import AppError from "../utils/error.js";
import cloudinary from 'cloudinary';

/////////////////////
/////////////////////
const getAllCourse = async (req, res, next) => {

  try {
    const courses = await COURSE.find().select("-lectures");

    if (!courses) {
      return next(new AppError("No Course Found", 404));
    }

    res.status(200).json({
      message: "All Courser",
      success: true,
      courses,
    });
  } catch (e) {
    return next(new AppError(e.message, 400));
  }
};
//////////////////////
/////////////////////
const getLectureByCourseId = async (req, res, next) => {
  const courseId = req.params;

  const course = await COURSE.findById(courseId);

  if (!course) {
    return next(new AppError("Course Not Found", 401));
  }

  res.status(200).json({
    success: true,
    message: "course lectuer fetched successfully",
    lecture: course.lectures,
  });
};

/////////////////////
/////////////////////
const createCourse = async (req, res, next) => {
  const { title, description, category, createdBy, lectures, thumbnail } =
    req.body;

  if (!title || !description || !category || !createdBy) {
    return next(new AppError("Every Field Is Mendatory"));
  }
  try {
    const course = await COURSE.create({
      title,
      description,
      category,
      createdBy,
      thumbnail :{
         public_id: "default",
        secure_url: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
      }
    });

    if(req.file){
      const result = await cloudinary.v2.uploader.upload(req.file.path , {
        folder : "neoLearn",
      });
      if(result){
        course.thumbnail.public_id = result.public_id;
        course.thumbnail.secure_url = result.secure_url;
      }
      await course.save();
      await fs.promises.unlink(`uploads/${req.file.filename}`);
    }
    await course.save();
    return res.status(201).json({
      success: true,
      message: "Course Created Successfully",
      course
  
    });
  } catch (e) {
    return next(new AppError(e.message, 400));
  }
};

export { getAllCourse, getLectureByCourseId , createCourse };
