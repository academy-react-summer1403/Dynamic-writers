import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { getItem, removeItem } from "../common/storage";

const baseURL = import.meta.env.VITE_BASE_URL; 

const instance = axios.create({
  baseURL: baseURL,
});

const onSuccess = (response) => {
  toast.dismiss("loading");
  return response.data;
};

const onError = (err) => {
  toast.dismiss("loading");
  if (err.response) {
    const status = err.response.status;

    if (status === 401) {
      removeItem("token");
      window.location.pathname = "/Error401";
    }

    if (status === 403) {
      window.location.pathname = "/Error403";
    }

    if (status === 408) {
      window.location.pathname = "/Error408";
    }

    if (status === 500) {
      window.location.pathname = "/Error500";
    }

    if (status === 422) {
      toast.error(err.response.data.ErrorMessage || "Validation Error");
      return err.response.data.ErrorMessage;
    }
  } else {
    toast.error("An unexpected error occurred!");
  }

  return Promise.reject(err);
};

instance.interceptors.response.use(onSuccess, onError);

instance.interceptors.request.use((opt) => {
  const token = getItem("token");
  if (token === "undefined") {
    removeItem("token");
  }
  if (token === null) {
    removeItem("token");
  }

  if (token) opt.headers.Authorization = "Bearer " + JSON.parse(token);

  toast.dismiss('loading')
  // toast.loading('در حال باگزاری...', { toastId: "loading", autoClose: false });
  return opt;
});

export default instance;
