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
          alert("خطا در ورود ب سیستم")
          localStorage.removeItem("token");
          window.location.href = "/auth/login";
          
        }
        if (status === 403) {
          alert("error server");
          window.location.href = "/auth/login";
        }

        if (status === 500) {
          console.log("Server Error:", error.response.data);
          alert("مشکل از سمت سرور")
          
        }

      } else {
        console.error("Network Error:", error.message);
        alert("مشکل در اتصال اینترنت  اینترنت خود را چک کنید ")
      }

      return (
        Promise.reject(error)  
        
      ) 

      
    }
  );

  export default axioshandel;
