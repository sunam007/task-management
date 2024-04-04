import axios from "axios";
// var CryptoJS = require("crypto-js");

// import { API_URL, USER_SECRET_KEY } from "@/config/config";
// import { LOCAL_STORAGE_KEY } from "@/config/constants";

export const API_URL = process.env.NEXT_PUBLIC_API_URL as string;

const apiClient = axios.create({
  baseURL: `${API_URL}/api/v1`,
});

apiClient.interceptors.request.use((config) => {
   config.headers = {
    Authorization: `Bearer eeyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjBjMGRkZDQwZmMwZmI0MGUxYmJhY2EiLCJmaXJzdE5hbWUiOiJBc2FkIiwibGFzdE5hbWUiOiJTdW5hbSIsImVtYWlsIjoic3VuYW1AZ21haWwuY29tIiwiaWF0IjoxNzEyMTc0MzQ1fQ.aj6R5YdDVOSJV7MuiLyyFGRCuqpxCMJ0aKt5O7nlkvo`,
  };
  return config
});

export const get = async (endpoint: string) => {
  const response = await apiClient.get(endpoint);
  return response.data;
};

export const post = async (endpoint: string, data: any) => {
  try {
    const response = await apiClient.post(endpoint, data);
    const code = response.status;
    const resp_data = response.data;
    if (code === 409) {
      return Promise.reject(resp_data);
    }
    return resp_data;
  } catch (e) {
    return Promise.reject(e);
  }
};

export const patch = async (endpoint: string, data: any) => {
  return await apiClient.patch(endpoint, data);
};

export const deleteApi = async (endpoint: string) => {
  return await apiClient.delete(endpoint);
};
