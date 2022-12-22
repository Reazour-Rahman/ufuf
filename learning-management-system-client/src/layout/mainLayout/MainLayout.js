import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../pages/shared/Footer/Footer";
// import Footer from "../../pages/shared/footer/index";

const MainLayout = () => {
  return (
    <div>
      {/* :::::::::::::--Call Header::::::::::::::::: */}

      <Outlet></Outlet>
      {/* ::::Here every component will be rendered as children:::::: */}
      <Footer />
    </div>
  );
};

export default MainLayout;
