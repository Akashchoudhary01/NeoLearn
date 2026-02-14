import COURSE from "../models/course.model.js"
import AppError from "../utils/error.js";

const getAllCourse = async(req , res , next)=>{
    try {
        
        const courses = await COURSE.find().select('-lectures');

        if(!courses){
            return next (new AppError('No Course Found' , 404));
        }
        
        res.status(200).json({
            message : 'All Courser',
            success : true,
            courses,
        })
    } catch (e) {
        return next(new AppError(e.message , 400));
        
    }
}

const getLectureByCourseId = async(req , res , next)=>{
 const courseId = req.user.id;

  const course = await COURSE.findById(courseId);

  if(!course){
    return next (new AppError('Course Not Found' , 401));
  }

}

export {getAllCourse , 
    getLectureByCourseId
};