import { useDispatch } from "react-redux";
import {
  fetchFail,
  fetchStart,
  stockSuccess,
  getProCatBrandSuccess,
  getPurchasesPageSuccess,
  getSalesPageDataSuccess,
} from "../features/stockSlice";
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

  // https://www.javascripttutorial.net/javascript-promise-all/

  // Product Page Data

  const getProCatBrand = async () => {
    dispatch(fetchStart());
    try {
      const [products, categories, brands] = await Promise.all([
        axiosWithToken("products"),
        axiosWithToken("categories"),
        axiosWithToken("brands"),
      ]);
      dispatch(
        getProCatBrandSuccess([
          products.data.data,
          categories.data.data,
          brands.data.data,
        ])
      );
    } catch (error) {
      console.log(error);
      dispatch(fetchFail());
    }
  };

  // Sales Page Data

  const getSalesPageData = async () => {
    dispatch(fetchStart());
    try {
      const [sales, products, brands] = await Promise.all([
        axiosWithToken("sales"),
        axiosWithToken("products"),
        axiosWithToken("brands"),
      ]);
      dispatch(
        getSalesPageDataSuccess([
          sales.data.data,
          products.data.data,
          brands.data.data,
        ])
      );
    } catch (error) {
      console.log(error);
      dispatch(fetchFail());
    }
  };

  // Purchases Page Data

  const getPurchasesPageData = async () => {
    dispatch(fetchStart());
    try {
      const [purchases, firms, products, brands] = await Promise.all([
        axiosWithToken("purchases"),
        axiosWithToken("firms"),
        axiosWithToken("products"),
        axiosWithToken("brands"),
      ]);
      dispatch(
        getPurchasesPageSuccess([
          purchases.data.data,
          firms.data.data,
          products.data.data,
          brands.data.data,
        ])
      );
    } catch (error) {
      console.log(error);
      dispatch(fetchFail());
    }
  };

  return {
    getStockData,
    deleteStockData,
    postStockData,
    putStockData,
    getProCatBrand,
    getSalesPageData,
    getPurchasesPageData,
  };
};

export default useStockCall;
