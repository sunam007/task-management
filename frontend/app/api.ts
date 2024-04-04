import axios from "axios";
import { LOCAL_STORAGE_KEY_TOKEN } from "./config/config";


export const API_URL = process.env.NEXT_PUBLIC_API_URL as string;

const apiClient = axios.create({
  baseURL: `${API_URL}/api/v1`,
});

const token = window?.localStorage?.getItem(LOCAL_STORAGE_KEY_TOKEN);

export const get = async (endpoint: string) => {
  const response = await apiClient.get(endpoint, {
    headers: {
      "x-access-token": token,
    },
  });
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
