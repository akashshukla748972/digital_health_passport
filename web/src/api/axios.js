import axios from "axios";
const Axios = axios.create({
  baseURL: import.meta.env.VITE_API_BASE,
  withCredentials: true,
});

Axios.interceptors.request.use(
  function (config) {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default Axios;
