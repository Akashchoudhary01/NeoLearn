import React from "react";
import HomeLayout from "../../Layout/HomeLayout";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Checkout = () => {

    const dispatch = useDispatch();
    const nevigater = useNavigate();

  return (
    <HomeLayout>
      <div className="min-h-[90vh] flex flex-col justify-center items-center text-white"></div>
    </HomeLayout>
  );
};

export default Checkout;
