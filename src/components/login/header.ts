import axios, { AxiosError, AxiosResponse } from "axios";

const axioshandel = axios.create({
  baseURL: "http://10.10.50.76:8002/api",
  headers: {
    "Content-type": "application/json",
  },
});

axioshandel.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);
axioshandel.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  (error: AxiosError) => {
    if (error.response) {
      const status = error.response.status;

      if (status === 401) {
        localStorage.removeItem("token");
        window.location.href = "/login";
      }

      if (status === 500) {
        console.error("Server Error:", error.response.data);
      }
    } else {
      console.error("Network Error:", error.message);
    }

    return Promise.reject(error);
  }
);

export default axioshandel;
