import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchFail,
  fetchStart,
  registerSuccess,
  loginSuccess,
  logoutSuccess,
} from "../features/authSlice";
import { useNavigate } from "react-router-dom";
import { toastErrorNotify, toastSuccessNotify } from "../helpers/ToastNotify";
import { useTranslation } from "react-i18next";
import { handleError } from "../helpers/handleError";

const BASE_URL = import.meta.env.VITE_BASE_URL;

const useAuthCall = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { token } = useSelector((state) => state.auth);
  const { t } = useTranslation();

  // Register
  const register = async (userInfo) => {
    dispatch(fetchStart());
    try {
      const { data } = await axios.post(`${BASE_URL}users`, userInfo);
      dispatch(registerSuccess(data));
      toastSuccessNotify(t("sucRegister"));
      navigate("/login");
    } catch (error) {
      handleError(error, "errRegister");
    }
  };

  // Login
  const login = async (userInfo) => {
    dispatch(fetchStart());
    try {
      const { data } = await axios.post(`${BASE_URL}auth/login`, userInfo);
      dispatch(loginSuccess(data));
      toastSuccessNotify(t("sucLogin"));
      navigate("/dashboard");
    } catch (error) {
      handleError(error, "errLogin");
    }
  };

  // Logout
  const logout = async () => {
    dispatch(fetchStart());
    try {
      await axios.get(`${BASE_URL}auth/logout`, {
        headers: {
          Authorization: `Token ${token}`,
        },
      });
      dispatch(logoutSuccess());
      toastSuccessNotify(t("sucLogout"));
    } catch (error) {
      handleError(error, "errLogout");
    }
  };

  return { register, login, logout };
};

export default useAuthCall;
