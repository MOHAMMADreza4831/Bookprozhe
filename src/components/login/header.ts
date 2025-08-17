import axios from "axios";

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

export default axioshandel;
