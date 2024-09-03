import axios from "axios";
import { useDispatch } from "react-redux";
import { fetchFail, fetchStart, registerSuccess } from "../features/authSlice";
import { useNavigate } from "react-router-dom";
import { toastErrorNotify, toastSuccessNotify } from "../helpers/ToastNotify";

const BASE_URL = "https://19104.fullstack.clarusway.com/";

const useAuthCall = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

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

  return { register };
};

export default useAuthCall;
