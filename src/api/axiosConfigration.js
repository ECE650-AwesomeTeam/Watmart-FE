import axios from "axios";

const axiosConfig = axios.create({
    withCredentials: false,
    baseURL: "http://159.203.44.151:9999",
});

axiosConfig.interceptors.response.use(
    (response) => response,
    (error) =>
        Promise.reject(
            (error.response && error.response.data) || "Something went wrong!"
        )
);

export default axiosConfig;
