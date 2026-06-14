import USER from "../models/user.models.js";
import AppError from "../utils/error.js";
import sendEmail from "../utils/sendEmail.js";

const contactUs = async (req, res, next) => {
  console.log("Contact route hit");

  try {
    console.log("Before sendEmail");

    await sendEmail(
      process.env.CONTACT_US_EMAIL,
      subject,
      textMessage
    );

    console.log("After sendEmail");

    return res.status(200).json({
      success: true,
      message: "message Send Successfully",
    });
  } catch (e) {
    console.error(e);
    return next(new AppError(e.message, 400));
  }
};

const userStats = async(req , res, next)=>{
    try {
        const allUserCount = await USER.countDocuments();
        
        const subscribedUserCount = await USER.countDocuments({
            'subscription.status' : 'active',
        });
        res.status(200).json({
            success: true,
            message: 'All registered users count',
            allUserCount,
            subscribedUserCount,
        });
        
    } catch (e) {
        return next (new AppError(e.message , 400));
        
    }

}
export {
    contactUs,
     userStats
}