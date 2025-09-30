import axios, { AxiosError, AxiosResponse } from 'axios';



import { showErrorMessage } from './alerts';



export const API_BASEURL: string = import.meta.env.VITE_SOME_KEY || '';

const api = axios.create({ baseURL: API_BASEURL });

interface ErrorResponse {
  message: string;
}

const handleErrorResponse = async (error: AxiosError<ErrorResponse>) => {
  showErrorMessage({ message: String(error?.response?.data?.message) });
  // toast.error(error?.response?.data?.message);
  return Promise.reject(error);
};

api.interceptors.response.use((response: AxiosResponse<Response>) => {
  // You can add any processing of the response here
  return response;
}, handleErrorResponse);

// Add a request interceptor
api.interceptors.request.use(
  (config) => {
    // Get the access token from local storage
    const accessToken = localStorage.getItem('accessToken');
    
    // If an access token exists, add it to the request headers
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
