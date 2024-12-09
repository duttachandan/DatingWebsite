import { Outlet } from "react-router";
import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = () => {
  return (
    <>
      <Navbar />
      {/* <div className="min-h-[100vh]"> */}
      <Outlet />
      {/* </div> */}
      <Footer />
    </>
  );
};

export default Layout;
