import axios from "axios";
export const axiosInstance = axios.create({
    baseURL: "http://localhost:5003/api",
    withCredentials: true,

});