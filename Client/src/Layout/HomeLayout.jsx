import React from "react";
import { FiMenu } from "react-icons/fi";
import { AiFillCloseCircle } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../Components/Footer";
import { useDispatch, useSelector } from "react-redux";

const HomeLayout = ({ children }) => {
  const dispatch = useDispatch();
  const nevigate = useNavigate();

  //For Checking if the user is LoggedIn
  const isLoggedIn = useSelector((state) => state?.auth?.isLoggedIn);
  const role = useSelector((state) => state?.auth?.role);

  // FunctionChange Width
  function changeWidth() {
    const drawerside = document.getElementsByClassName("drawer-side");
    drawerside[0].style.width = "auto";
  }

  // functionHide Drawer
  function hideDrawer() {
    const element = document.getElementsByClassName("drawer-toggle");
    element[0].checked = false;

    changeWidth();
  }

  return (
    <div className="min-h-[90vh] mt-2">
      <div className="drawer absolute  w-full">
        <input id="my-drawer-1" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Page content here */}
          <label htmlFor="my-drawer-1" className="btn drawer-button">
            <FiMenu
              size={"32px"}
              onClick={changeWidth}
              className="font-bold text-white mx-4 bg-transparent"
            />
          </label>
        </div>
        <div className="drawer-side w-0">
          <label
            htmlFor="my-drawer-1"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu bg-base-200 min-h-full sm:w-80 w-48 relative text-base-content ">
            {/* Sidebar content here */}
            <li className="w-fit absolute right-2 z-50">
              <button className="bg-transparent">
                <AiFillCloseCircle size={"24px"} onClick={hideDrawer} />
              </button>
            </li>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/courses">All Courses</Link>
            </li>
            {isLoggedIn && role ==="ADMIN" &&(
            <li>
              <Link to="/admin/dashboard">Admin Dashboard</Link>
            </li>

            )}
            <li>
              <Link to="/Contact">Contact us</Link>
            </li>
            <li>
              <Link to="/about">About us</Link>
            </li>
            {!isLoggedIn &&(
              <div className="w-full flex justify-between item-center">
                <button className="btn-primary px-3 py-1.5 rounded-md font-semibold">
                  <Link>Login</Link>
                </button>
                <button className="btn-secondary px-3 py-1.5 rounded-md font-semibold">
                  <Link>SignUp</Link>
                </button>

              </div>
            )}
          </ul>
        </div>
      </div>

      {children}

      <Footer />
    </div>
  );
};

export default HomeLayout;
