import { Schema, model } from "mongoose";

const courseSchema = new Schema(
  {
    title: {
      type: String,
      maxLength: [40, "Title Should be less then 40 character"],
      minLength: [8, "Title must be at least 8  character"],
      required: [true, "title is Required"],
      trim: true,
    },
    Description: {
      type: String,
      minLength: [4, "Title Should be at least 4 character"],
      maxLength: [400, "Title Should be less then 400 character"],
      required: [true, "Description is Required"],
      trim: true,
    },
    category: {
      type: String,
      minLength: [4, "Title must be at least 4 character"],
      maxLength: [400, "Title Should be less then 400 character"],
      required: [true, "category is Required"],
      trim: true,
    },
    createdBy: {
      type: String,
      required: true,
      trim: true,
    },
    lectures: [
      {
        type: String,
        doescription: String,
        lecture: {
          public_id: {
            type: String,
          },
          secure_url: {
            type: String,
          },
        },
      },
    ],
    noOfLecture: {
      type: Number,
      default : 0,
    },
    thumbnail: {
      public_id: {
        type: String,
      },
      secure_url: {
        type: String,
      },
    },
  },
  {
    timestamps: true,
  },
);

const COURSE = new model("course", courseSchema);

export default COURSE;
