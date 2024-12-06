import { toastErrorNotify } from "./ToastNotify";

export const handleError = (error, dispatch, fetchFail, defaultMessage) => {
  const errorMessage = error?.response?.data?.message || defaultMessage;
  toastErrorNotify(errorMessage);
  console.error("Error:", error);
  dispatch(fetchFail());
};
