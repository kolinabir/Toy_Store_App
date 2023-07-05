import axios from "axios";
import { useEffect } from "react";
const axiosSecure = axios.create({
  baseURL: "http://localhost:5003",
});

const useAxiosSecure = () => {
  //   useEffect(() => {
  axiosSecure.interceptors.request.use((config) => {
    const token = localStorage.getItem("access-token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  });
  axiosSecure.interceptors.response.use(
    (response) => response,
    (error) => {
      if (
        error?.response &&
        (error?.response.status === 401 || error?.response.status === 403)
      ) {
        alert(error?.response?.data.error);
      }
    }
  );
  //   }, []);
  return axiosSecure;
};
export default useAxiosSecure;
