import axios from 'axios';
import { API_BASE_URL } from './config';
import { getApiHeaders } from './apiConstants';
import { toast } from "react-toastify";

export const axiosInstance =  axios.create({
  baseURL: API_BASE_URL,
});

const _get = async (url, isAuthenticated = true) => {
  try {
    return await axiosInstance.get(url, isAuthenticated ? getApiHeaders() : {});
  } catch (error) {
    const err = error
    const errorMessage = err?.response?.data
    toast.error(errorMessage?.message)
    return {err: errorMessage?.message};
  }
};

const _post = async (url, data = {}, isAuthenticated = true) => {
  try {
    return await axiosInstance.post(url, data, isAuthenticated ? getApiHeaders() : {});
  } catch (error) {
    const err = error
    const errorMessage = err?.response?.data
    toast.error(errorMessage?.message)
    return {err: errorMessage?.message};
  }
};

const _put = async (url, data = {}, isAuthenticated = true) => {
  try {
    return await axiosInstance.put(url, data, isAuthenticated ? getApiHeaders() : {});
  } catch (error) {
    const err = error
    const errorMessage = err?.response?.data
    toast.error(errorMessage?.message)
    return {err: errorMessage?.message};
  }
};

const _delete = async (url, isAuthenticated = true) => {
  try {
    return await axiosInstance.delete(url, isAuthenticated ? getApiHeaders() : {});
  } catch (error) {
    const err = error
    const errorMessage = err?.response?.data
    toast.error(errorMessage?.message)
    return {err: errorMessage?.message};
  }
};

const _patch = async (url, data = {}, isAuthenticated = true) => {
  try {
    return await axiosInstance.patch(url, data, isAuthenticated ? getApiHeaders() : {});
  } catch (error) {
    const err = error
    const errorMessage = err?.response?.data
    toast.error(errorMessage?.message)
    return {err: errorMessage?.message};
  }
};

export { _get, _post, _put, _delete, _patch };
