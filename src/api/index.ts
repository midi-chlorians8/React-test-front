import axios, { AxiosError, AxiosRequestConfig } from 'axios';

import { getToken } from 'services/storage';

const baseURL = process.env.REACT_APP_BASE_API_URL;

export const http = axios.create({
  baseURL,
});

const onRequest = (config: AxiosRequestConfig): AxiosRequestConfig => {
  const token = getToken();

  if (token && config?.headers) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
};

const onRequestError = (error: AxiosError): Promise<AxiosError> => Promise.reject(error);

http.interceptors.request.use(onRequest, onRequestError);
