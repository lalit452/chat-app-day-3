import axios from "axios";

export const axiosInstance = axios.create({
    // baseURL : "http://localhost:5001/api",
    baseURL : "https://chat-app-day3.vercel.app/api",
    withCredentials: true, 
})   