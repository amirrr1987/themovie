
import axios, { type AxiosError, type AxiosRequestConfig } from "axios";
const baseURL = "https://api.themoviedb.org/3/";
const apiKey = "?api_key=f62f750b70a8ef11dad44670cfb6aa57"
class Axios {
    private _baseUrl = baseURL;

    private _instance = axios.create({
        baseURL: this._baseUrl,
        withCredentials: false,
        headers: {
            Accept: "application/json",
            "content-type": "application/json",
        },
    });

    constructor() {
        this._instance.interceptors.request.use(
            (config: AxiosRequestConfig) => {
                if (config.headers) {
                    // config.headers["x-auth-token"] = getToken();
                }
                return config;
            },
            (e) => {
                return Promise.reject(e);
            }
        );
        this._instance.interceptors.response.use(
            (response) => response,
            (error) => {
                const data: any = (error as AxiosError).response?.data;
          
                return Promise.reject(data);
            }
        );
    }
    // https://api.themoviedb.org/3/list/dddddddddddddddd&language=en-US
    async post(config: any) {
        return await this._instance.post(config.url + apiKey + config?.query, config.data);
    }
    async get(config: any) {
        return await this._instance.get(config.url, config.data);
    }
    async put(config: any) {
        return await this._instance.put(config.url, config.data);
    }
    async delete(config: any) {
        return await this._instance.delete(config.url, config.data);
    }
}
const service = new Axios();
export default function useAxios() {
    return service;
}