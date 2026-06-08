import React, { useEffect } from "react";
import HomeLayout from "../../Layout/HomeLayout";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getRazorPayId, purchaseCourseBundle, verifyUserPayment } from "../../Redux/Slices/RazorpaySlice";
import toast from "react-hot-toast";

const Checkout = () => {

    const dispatch = useDispatch();
    const nevigater = useNavigate();
    const razorpayKey = useSelector((state)=> state?.razorpay?.key);
    const subscription_id = useSelector((state)=> state?.razorpay?.subscription_id);
    const userData = useSelector((state)=> state?.auth?.data);
    const paymentDetails = ({
        razorpay_payment_id= ""
        razorpay_subscription_id= ""
        razorpay_signature= ""
    })

    async function HandleSubscription(e){
        e.preventDefault();
        if(!razorpayKey || !subscription_id){
            toast.error("Something Went Wrong")
            return 
        }
        const option  = {
            key : razorpayKey,
            subscription_id : subscription_id,
            name : "NeoLearn PVT. LTD.",
            description :  "Subscription",
            theme : {
                color : "#f37254"
            },
            prefilled :{
                email : userData.email,
                name : userData.fullName,
            },
            handler : async function (response){
                response. razorpay_payment_id = data.razorpay_payment_id,
            response.razorpay_subscription_id = data.razorpay_subscription_id,
            response.razorpay_signature  data.razorpay_signature

            toast.success ("Payment Successfull !")
            const response = await dispatch (verifyUserPayment(paymentDetails))
            isPaymentVerified ? nevigater("/checkout/success") : nevigater("/checkout/failed");


            }

        }

        const paymentObject = new Window.Razorpay(option);
        paymentObject.open();
    }

    async function Load (){
        await  dispatch(getRazorPayId())
        await dispatch (purchaseCourseBundle())
    }
    useEffect(()=>{
       Load();
    } , [])

  return (
    <HomeLayout>
      <div className="min-h-[90vh] flex flex-col justify-center items-center text-white"></div>
    </HomeLayout>
  );
};

export default Checkout;
