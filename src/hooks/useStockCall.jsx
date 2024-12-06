import { useDispatch } from "react-redux";
import {
  fetchFail,
  fetchStart,
  stockSuccess,
  getProCatBrandSuccess,
  getPurchasesPageSuccess,
  getSalesPageDataSuccess,
  getDashboardPageSuccess,
} from "../features/stockSlice";
import useAxios from "./useAxios";
import { useTranslation } from "react-i18next";
import { handleError } from "../helpers/handleError";

const useStockCall = () => {
  const dispatch = useDispatch();
  const axiosWithToken = useAxios();
  const { t } = useTranslation();

  // Stock Data Fetch
  const getStockData = async (endpoint) => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosWithToken.get(endpoint);
      dispatch(stockSuccess({ stock: data.data, endpoint }));
    } catch (error) {
      handleError(error, dispatch, fetchFail, t("errorMessage"));
    }
  };

  // Delete Data
  const deleteStockData = async (endpoint, id) => {
    dispatch(fetchStart());
    try {
      await axiosWithToken.delete(`${endpoint}/${id}`);
      toastSuccessNotify(t("successMessage"));
    } catch (error) {
      handleError(error, dispatch, fetchFail, t("errorMessage"));
    } finally {
      getStockData(endpoint);
    }
  };

  // Post Data
  const postStockData = async (endpoint, info) => {
    dispatch(fetchStart());
    try {
      await axiosWithToken.post(endpoint, info);
      toastSuccessNotify(t("successMessage"));
    } catch (error) {
      handleError(error, dispatch, fetchFail, t("errorMessage"));
    } finally {
      getStockData(endpoint);
    }
  };

  // Put Data
  const putStockData = async (endpoint, info) => {
    dispatch(fetchStart());
    try {
      await axiosWithToken.put(`${endpoint}/${info._id}`, info);
      toastSuccessNotify(t("successMessage"));
    } catch (error) {
      handleError(error, dispatch, fetchFail, t("errorMessage"));
    } finally {
      getStockData(endpoint);
    }
  };

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
      handleError(error, dispatch, fetchFail, t("errorMessage"));
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
      handleError(error, dispatch, fetchFail, t("errorMessage"));
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
      handleError(error, dispatch, fetchFail, t("errorMessage"));
    }
  };

  // Dashboard Page Data
  const getDashboardPageData = async () => {
    dispatch(fetchStart());
    try {
      const [purchases, sales] = await Promise.all([
        axiosWithToken("purchases"),
        axiosWithToken("sales"),
      ]);
      dispatch(getDashboardPageSuccess([purchases.data.data, sales.data.data]));
    } catch (error) {
      handleError(error, dispatch, fetchFail, t("errorMessage"));
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
    getDashboardPageData,
  };
};

export default useStockCall;
