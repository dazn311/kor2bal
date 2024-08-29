import axios,{AxiosInstance} from 'axios';

export const axiosInstance:AxiosInstance = axios.create({
    baseURL: process.env.BASE_URL as string,
    headers: {
        'Content-Type': 'application/json',
    },
    timeout: 5000,
});

export default axiosInstance;