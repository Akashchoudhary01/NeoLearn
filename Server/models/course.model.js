import mongoose, { Schema , model } from "mongoose";

const courseSchema = new mongoose.Schema({
    title : {
        type : String,
        maxLength : [40 , 'Title Should be less then 40 character'],
        required : true,
        trim : true,
    },
    Description : {
        type : String,
        minLength : [4 , 'Title Should be at least 4 character'],
        maxLength : [400 , 'Title Should be less then 400 character'],
        required : true,
        trim : true,
    },
    lecture :{
        type: String,
    
    },
    banner : {  
        public_id :{
            type : String
        },
        secure_url :{
            type : String
        }    },

} , {
    timestamps : true,
})

const COURSE = new model("course" , courseSchema);

export default COURSE;