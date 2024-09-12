import React from "react";
import useAuthCall from "../hooks/useAuthCall";
import { FaUser } from "react-icons/fa6";
import { MdLightMode } from "react-icons/md";
import { FiLogOut } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { toggleTheme } from "../features/themeSlice";

const IconBar = () => {
  const { logout } = useAuthCall();
  const dispatch = useDispatch();

  const icons = [
    {
      icon: <FaUser />,
    },
    {
      icon: <MdLightMode />,
      onClick: () => dispatch(toggleTheme()),
    },
    {
      icon: <FiLogOut />,
      onClick: () => logout(),
    },
  ];

  return (
    <div className="flex gap-2 ml-auto cursor-pointer ">
      {icons.map((item, index) => (
        <div key={index} className="icons" onClick={item.onClick}>
          {item.icon}
        </div>
      ))}
    </div>
  );
};

export default IconBar;
