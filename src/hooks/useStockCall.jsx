import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { fetchFail, fetchStart, stockSuccess } from "../features/stockSlice";
import { toastErrorNotify, toastSuccessNotify } from "../helpers/ToastNotify";

const BASE_URL = import.meta.env.VITE_BASE_URL;

const useStockCall = () => {
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);

  const getStockData = async (endpoint) => {
    dispatch(fetchStart());
    try {
      const { data } = await axios(`${BASE_URL}${endpoint}`, {
        headers: {
          Authorization: `Token ${token}`,
        },
      });
      console.log(data);
      dispatch(stockSuccess({ stock: data.data, endpoint }));
    } catch (error) {
      console.log(error);
      dispatch(fetchFail());
    }
  };

  const deleteStockData = async (endpoint, id) => {
    dispatch(fetchStart());
    try {
      await axios.delete(`${BASE_URL}${endpoint}/${id}`, {
        headers: {
          Authorization: `Token ${token}`,
        },
      });
      toastSuccessNotify("The firm has been successfully deleted.");
    } catch (error) {
      console.log(error);
      toastErrorNotify("The firm could not be deleted.");
      dispatch(fetchFail());
    } finally {
      getStockData(endpoint);
    }
  };

  const postStockData = async (endpoint, info) => {
    dispatch(fetchStart());
    try {
      const { data } = await axios.post(`${BASE_URL}${endpoint}`, info, {
        headers: {
          Authorization: `Token ${token}`,
        },
      });
      console.log(data);
      toastSuccessNotify("The firm has been successfully created.");
    } catch (error) {
      toastErrorNotify("The firm could not be created.");
      console.log(error);
      dispatch(fetchFail());
    } finally {
      getStockData(endpoint);
    }
  };

  return { getStockData, deleteStockData, postStockData };
};

export default useStockCall;
