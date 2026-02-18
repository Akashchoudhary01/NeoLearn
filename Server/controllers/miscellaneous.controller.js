import USER from "../models/user.models.js";
import AppError from "../utils/error.js";
import sendEmail from "../utils/sendEmail.js";

const contactUs = async(req , res , next)=>{
    const {name , email , message} = req.body;

    if( !name || !email || !message ){
        return next(new AppError('All filds are mendatory' , 401));
    }

    try {
        
        const subject = "contact-us-form"
        const textMessage = ` ${name} - ${email} <br/> ${message}`;
        
        //await the message send
        await sendEmail(process.env.CONTACT_US_EMAIL , subject , textMessage);
    } catch (e) {
        return next (new AppError(e.message , 400));
    }
    return res.status(200).json({
        success : true,
        message : "message Send Successfully"
    });
}

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