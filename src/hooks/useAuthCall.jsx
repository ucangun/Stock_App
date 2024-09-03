import axios from "axios";
import { useDispatch } from "react-redux";
import {
  fetchFail,
  fetchStart,
  registerSuccess,
  loginSuccess,
  logoutSuccess,
} from "../features/authSlice";
import { useNavigate } from "react-router-dom";
import { toastErrorNotify, toastSuccessNotify } from "../helpers/ToastNotify";

const BASE_URL = "https://19104.fullstack.clarusway.com/";

const useAuthCall = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // register

  const register = async (userInfo) => {
    dispatch(fetchStart());
    try {
      const { data } = await axios.post(`${BASE_URL}users`, userInfo);
      dispatch(registerSuccess(data));
      toastSuccessNotify(
        "You have successfully registered! Thank you for joining us."
      );
      navigate("/login");
    } catch (error) {
      toastErrorNotify(error.message);
      dispatch(fetchFail());
    }
  };

  // login

  const login = async (userInfo) => {
    dispatch(fetchStart());
    try {
      const { data } = await axios.post(`${BASE_URL}auth/login`, userInfo);
      console.log(data);

      dispatch(loginSuccess(data));
      toastSuccessNotify("You have successfully logged in!");
      navigate("/dashboard");
    } catch (error) {
      toastErrorNotify(error.message);
      dispatch(fetchFail());
    }
  };

  // logout

  const logout = async () => {
    dispatch(fetchStart());
    try {
      await axios.get(`${BASE_URL}auth/logout`);
      dispatch(logoutSuccess());
      toastSuccessNotify(
        "You have successfully logged out! Hope to see you again soon."
      );
    } catch (error) {
      toastErrorNotify(error.message);
      dispatch(fetchFail());
    }
  };

  return { register, login, logout };
};

export default useAuthCall;
