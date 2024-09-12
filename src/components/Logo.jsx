import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import logoDark from "../assets/images/logoDark.png";
import { useSelector } from "react-redux";

const Logo = ({ type }) => {
  const { mode } = useSelector((state) => state.theme);
  const styles = {
    primary: "h-[8rem]  w-auto object-cover",
    secondary: "h-[12rem] sm:h-[16rem]  w-auto mx-auto object-cover",
  };

  const logoSrc = mode === "dark" ? logoDark : logo;

  return (
    <Link>
      <img src={logoSrc} alt="logo" className={styles[type]} />
    </Link>
  );
};

export default Logo;
