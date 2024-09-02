import React from "react";
import SideBar from "./SideBar";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div>
      <SideBar />
      <Navbar />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default AppLayout;
