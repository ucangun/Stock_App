import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import logoDark from "../assets/images/logoDark.png";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const Logo = ({ type }) => {
  const { mode } = useSelector((state) => state.theme);
  const styles = {
    primary: "h-[8rem]  w-auto object-cover",
    secondary: "h-[12rem] sm:h-[16rem]  w-auto mx-auto object-cover",
  };

  useEffect(() => {
    const preloadImage = (src) => {
      const img = new Image();
      img.src = src;
    };
    preloadImage(logo);
    preloadImage(logoDark);
  }, []);

  const logoSrc = mode === "dark" ? logoDark : logo;

  return (
    <Link>
      <img
        src={logoSrc}
        alt="logo"
        className={`${styles[type]} logo-transition`}
      />
    </Link>
  );
};

export default Logo;
