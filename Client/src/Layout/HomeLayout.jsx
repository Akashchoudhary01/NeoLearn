import React from "react";
import { FiMenu } from "react-icons/fi";
import {  AiFillCloseCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer";

const HomeLayout = ({children}) => {
  // FunctionChange Width
  function changeWidth() {
    const drawerside = document.getElementsByClassName("drawer-side");
    drawerside[0].style.width = 'auto';
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
            <li>
              <Link to="/Contact">Contact us</Link>
            </li>
            <li>
              <Link to="/about">About us</Link>
            </li>
          </ul>
        </div>
      </div>

      {children}

      <Footer/>
    </div>
  );
};

export default HomeLayout;
