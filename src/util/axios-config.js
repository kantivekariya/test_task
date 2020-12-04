import axios from "axios";
import config from "../config/Config";

export function setupAxios() {
  axios.defaults.timeout = config.TIMEOUT;
  axios.defaults.baseURL = config.BASE_URL;

  axios.interceptors.request.use(onRequestSuccess, onRequestError);
  axios.interceptors.response.use(onResponseSuccess, onResponseError);
}

const onRequestSuccess = (response) => {
  console.debug("Axios onRequestSuccess", response);
  return response;
};

const onRequestError = (error) => {
  console.debug("Axios onRequestError", error);
  return Promise.reject(error);
};

const onResponseSuccess = (response) => {
  console.debug("Axios onResponseSuccess", response);
  return response;
};

const onResponseError = (error) => {
  console.debug("Axios onResponseError", error.response);
  return Promise.reject(error);
};
