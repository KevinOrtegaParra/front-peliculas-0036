import axios from "axios";

export const axiosConfig = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL || 'http://localhost:9000/api/v1/'
})