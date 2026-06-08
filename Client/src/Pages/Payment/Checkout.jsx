import React, { useEffect } from "react";
import HomeLayout from "../../Layout/HomeLayout";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { BiRupee } from "react-icons/bi";
import {
  getRazorPayId,
  purchaseCourseBundle,
  verifyUserPayment,
} from "../../Redux/Slices/RazorpaySlice";
import toast from "react-hot-toast";

const Checkout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const razorpayKey = useSelector((state) => state?.razorpay?.key);
  const subscription_id = useSelector(
    (state) => state?.razorpay?.subscription_id
  );

  const userData = useSelector((state) => state?.auth?.data);

  const handleSubscription = async (e) => {
    e.preventDefault();
    console.log("Razorpay Key:", razorpayKey);
console.log("Subscription ID:", subscription_id);

    if (!razorpayKey || !subscription_id) {
      toast.error("Unable to initialize payment");
      return;
    }

    const options = {
      key: razorpayKey,
      subscription_id: subscription_id,
      name: "NeoLearn PVT. LTD.",
      description: "Annual Subscription",
      theme: {
        color: "#facc15",
      },

      prefill: {
        name: userData?.fullName,
        email: userData?.email,
      },

      handler: async function (response) {
        const paymentDetails = {
          razorpay_payment_id: response.razorpay_payment_id,
          razorpay_subscription_id:
            response.razorpay_subscription_id,
          razorpay_signature: response.razorpay_signature,
        };

        const result = await dispatch(
          verifyUserPayment(paymentDetails)
        );

        if (result?.payload?.success) {
          toast.success("Payment Successful!");
          navigate("/checkout/success");
        } else {
          navigate("/checkout/failure");
        }
      },

      modal: {
        ondismiss: function () {
          toast.error("Payment cancelled");
        },
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

useEffect(() => {
  const loadPaymentData = async () => {
    const keyRes = await dispatch(getRazorPayId());
    console.log("KEY RESPONSE:", keyRes);

    const subRes = await dispatch(purchaseCourseBundle());
    console.log("SUB RESPONSE:", subRes);

    console.log("SUB TYPE:", subRes.type);
    console.log("SUB PAYLOAD:", subRes.payload);
    console.log("SUB ERROR:", subRes.error);
  };

  loadPaymentData();
}, [dispatch]);


useEffect(() => {
  console.log("Current Razorpay State:", {
    razorpayKey,
    subscription_id,
  });
}, [razorpayKey, subscription_id]);

  return (
    <HomeLayout>
      <div className="min-h-[90vh] flex justify-center items-center px-4 py-10">
        <div className="w-full max-w-md bg-gray-900 text-white rounded-2xl overflow-hidden shadow-[0_0_20px_rgba(59,130,246,0.4)]">

          {/* Header */}
          <div className="bg-yellow-400 py-4">
            <h1 className="text-center text-black font-bold text-2xl">
              Subscriber Bundle
            </h1>
          </div>

          {/* Content */}
          <div className="p-6 space-y-6">

            <div className="text-center">
              <p className="text-gray-300 text-lg">
                This purchase gives you access to
                all courses available on our platform.
              </p>

              <h2 className="text-blue-500 text-3xl font-bold mt-4">
                1 Year Access
              </h2>

              <p className="text-gray-300 mt-3">
                Access all existing courses and
                every new course released during
                your subscription period.
              </p>
            </div>

            {/* Price */}
            <div className="flex items-center justify-center gap-1 text-yellow-400 font-bold text-4xl">
              <BiRupee />
              <span>499</span>
            </div>

            {/* Features */}
            <div className="bg-gray-800 rounded-lg p-4 text-center text-gray-300 space-y-2">
              <p>✅ Unlimited Course Access</p>
              <p>✅ New Courses Included</p>
              <p>✅ 100% Refund on Cancellation</p>
              <p>✅ Priority Support</p>
            </div>

            {/* Terms */}
            <div className="text-center text-sm text-gray-400">
              Terms & Conditions Apply*
            </div>

            {/* Buy Button */}
            <button
              onClick={handleSubscription}
              className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold text-xl py-3 rounded-lg transition-all duration-300"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </HomeLayout>
  );
};

export default Checkout;