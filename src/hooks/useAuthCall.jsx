import axios from "axios";
import { useDispatch } from "react-redux";
import {
  fetchFail,
  fetchStart,
  registerSuccess,
  loginSuccess,
} from "../features/authSlice";
import { useNavigate } from "react-router-dom";
import { toastErrorNotify, toastSuccessNotify } from "../helpers/ToastNotify";

const BASE_URL = "https://19104.fullstack.clarusway.com/";

const useAuthCall = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // register

  const register = async (userInfo) => {
    dispatch(fetchStart);
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
    dispatch(fetchStart);
    try {
      const { data } = await axios.post(`${BASE_URL}auth/login`, userInfo);
      console.log(data);

      toastSuccessNotify("You have successfully logged in!");
      dispatch(loginSuccess(data));
      navigate("/dashboard");
    } catch (error) {
      toastErrorNotify(error.message);
      dispatch(fetchFail());
    }
  };

  return { register, login };
};

export default useAuthCall;
