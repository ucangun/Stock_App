import { useDispatch } from "react-redux";
import { fetchFail, fetchStart, stockSuccess } from "../features/stockSlice";
import { toastErrorNotify, toastSuccessNotify } from "../helpers/ToastNotify";
import useAxios from "./useAxios";

const useStockCall = () => {
  const dispatch = useDispatch();
  const axiosWithToken = useAxios();

  // Get Stock Data

  const getStockData = async (endpoint) => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosWithToken.get(endpoint);
      dispatch(stockSuccess({ stock: data.data, endpoint }));
    } catch (error) {
      console.log(error);
      dispatch(fetchFail());
    }
  };

  // Delete Data

  const deleteStockData = async (endpoint, id) => {
    dispatch(fetchStart());
    try {
      await axiosWithToken.delete(`${endpoint}/${id}`);
      toastSuccessNotify(`The ${endpoint} has been successfully deleted.`);
    } catch (error) {
      console.log(error);
      toastErrorNotify(`The ${endpoint} could not be deleted.`);
      dispatch(fetchFail());
    } finally {
      getStockData(endpoint);
    }
  };

  // Post Data

  const postStockData = async (endpoint, info) => {
    dispatch(fetchStart());
    try {
      await axiosWithToken.post(endpoint, info);
      toastSuccessNotify(`The ${endpoint} has been successfully created.`);
    } catch (error) {
      toastErrorNotify(`The ${endpoint} could not be created.`);
      console.log(error);
      dispatch(fetchFail());
    } finally {
      getStockData(endpoint);
    }
  };

  // Put Data

  const putStockData = async (endpoint, info) => {
    dispatch(fetchStart());
    try {
      await axiosWithToken.put(`${endpoint}/${info._id}`, info);
      toastSuccessNotify(`The ${endpoint} has been successfully updated.`);
    } catch (error) {
      toastErrorNotify(`The ${endpoint} could not be updated.`);
      console.log(error);
      dispatch(fetchFail());
    } finally {
      getStockData(endpoint);
    }
  };

  return { getStockData, deleteStockData, postStockData, putStockData };
};

export default useStockCall;
