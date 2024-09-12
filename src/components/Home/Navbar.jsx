import React from "react";
import Button from "../Button";
import Logo from "../Logo";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-lime-50 dark:bg-slate-700 ">
      <Logo type="primary" />
      <Button to="/login" type="small">
        Login
      </Button>
    </nav>
  );
};

export default Navbar;
