import React from "react";
import { Link } from "react-router-dom";

const Button = ({ children, to, type, onClick }) => {
  const base =
    "py-2.5 px-6 rounded-lg text-md font-medium text-white bg-teal-600 hover:bg-teal-700 transition-colors duration-300 cursor-pointer dark:bg-slate-900";

  const styles = {
    primary: base,
    small:
      "py-1 px-6 rounded-lg text-md font-medium text-white bg-teal-600 hover:bg-teal-700 transition-colors duration-300 cursor-pointer dark:bg-slate-900 ",
    secondary:
      "py-1 px-3 rounded-md text-md  text-teal-900 bg-white    cursor-pointer ml-auto dark:bg-slate-900 ",
  };

  if (to) {
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={styles[type]}>
      {children}
    </button>
  );
};

export default Button;
