import React from "react";
import useAuthCall from "../../hooks/useAuthCall";
import { FaUser } from "react-icons/fa6";
import { MdLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import { FiLogOut } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../../features/themeSlice";
import LanguageSwitcher from "../LanguageSwitcher";

const IconBar = () => {
  const { mode } = useSelector((state) => state.theme);
  const { logout } = useAuthCall();
  const dispatch = useDispatch();

  const icons = [
    {
      icon: <LanguageSwitcher />,
    },
    {
      icon: <FaUser />,
    },
    {
      icon: mode === "dark" ? <MdLightMode /> : <MdDarkMode />,
      onClick: () => dispatch(toggleTheme()),
    },
    {
      icon: <FiLogOut />,
      onClick: () => logout(),
    },
  ];

  return (
    <div className="flex items-center gap-2 ml-auto cursor-pointer ">
      {icons.map((item, index) => (
        <div
          key={index}
          className={index !== 0 ? "icons" : ""}
          onClick={item.onClick}
        >
          {item.icon}
        </div>
      ))}
    </div>
  );
};

export default IconBar;
