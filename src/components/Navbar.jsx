import React from "react";
import logo from "../assets/images/logo.png";
import Button from "./Button";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-lime-50 ">
      <img src={logo} alt="" className="object-cover w-24" />
      <Button to="/login" type="small">
        Login
      </Button>
    </nav>
  );
};

export default Navbar;
