import payments from "razorpay/dist/types/payments.js";
import { razorpay } from "../index.js";
import PAYMENT from "../models/payment.model.js"
import USER from "../models/user.models.js";
import AppError from "../utils/error.js";
const getRazorpayKey = async(req , res , next)=>{
    return res.status(200).json({
        success : true,
        message : 'Razorpay-API-key',
        key : process.env.RAZORPAY_KEY_ID
    })

}
const buySubscription = async(req , res , next)=>{
    const {id} = req.body;

    const user = USER.findById(id);

    if(!user){
        return next(new AppError("User not found !" , 404))
    }

    if(user.role ==="ADMIN"){
        return next (new AppError("Admin cannot purchase a subscription" , 400));
    }

    try {
        
  
    const subscription = await razorpay.subscriptions.create({
        plan_id : process.env.RAZORPAY_PLAN_ID,
        customer_notify : 1
    })

    user.subscription.id = subscription.id;
    user.subscription.status = subscription.status;

    await user.save();

    res.status(200).json({
        success : true,
        message : "Subscribed Successfully",
        subscription_id : subscription.id
    });
    } catch (error) {
        return next(new AppError("error.message" , 400));
        
    }

}
const verifySubscription = async(req , res , next)=>{
    const  { id} = req.user;
    const {razorpay_payment_id , razorpay_signature , razorpay_subscription_id } = req.body;

    const user = USER.findById(id);

    const subscriptionId = user.subscription.id;

    const generatedSignature =  crypto
       .create('sha256' , process.env.RAZORPAY_SECRET)
       .update(`${razorpay_payment_id}|${subscriptionId}`)
       .digest("hex");

    if(generatedSignature !== razorpay_signature){
        return next(new AppError('Payment not varified please try again ' , 400));
    }

    await PAYMENT.create({
        razorpay_payment_id,
        razorpay_subscription_id,
        razorpay_signature
    });

    user.subscription.status = 'active';
    await user.save();

    res.status(200).json({
        success : true,
        message : 'payment created or varified Successfully !'
    })

}
const cancelSubscription = async(req , res , next)=>{
    const {id} = req.user;
    const user = await USER.findById(id);

    if(!user){
        return next(new AppError("User not found !" , 404))
    }

    if(user.role ==="ADMIN"){
        return next (new AppError("Admin cannot purchase a subscription" , 400));
    }

    try {
        const subscriptionId = user.subscription.id;
        
        const subscription = await razorpay.subscriptions.cancel(subscriptionId);
        
        user.subscription.status = subscription.status;

     await user.save();

        res.status(200).json({
        success : true,
        message : 'Subscription Canceled  Successfully !'
    })
    
} catch (error) {
    return next (new AppError(error.message , 400));
}
    
     





}
const allPayments = async(req , res , next)=>{

}

export {
    getRazorpayKey,
    buySubscription,
    verifySubscription,
    cancelSubscription,
    allPayments
}