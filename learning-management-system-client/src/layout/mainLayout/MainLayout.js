import React from "react";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div>
      {/* :::::::::::::--Call Header::::::::::::::::: */}

      <Outlet></Outlet>{/* ::::Here every component will be rendered as children:::::: */}
      
      {/* :::::::::::::--Call footer::::::::::::::::: */}
    </div>
  );
};

export default MainLayout;
