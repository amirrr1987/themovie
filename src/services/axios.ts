import { message } from "ant-design-vue";
import axios, { type AxiosError, type AxiosRequestConfig } from "axios";
import { join } from "lodash";
const apiKey = "?api_key=55ee9c566996339d9859d1ec68533e20";

interface ConfigModel {
  url: string;
  query?: string;
  data?: any;
}

class Axios {
  private _baseUrl = "https://api.themoviedb.org/3";

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
        message.error(data.message);
        return Promise.reject(data);
      }
    );
  }

  async post(config: ConfigModel) {
    return await this._instance.post(
      config.url + apiKey + config?.query,
      config.data
    );
  }
  async get({
    url,
    query,
    data,
  }: {
    url: string;
    query: string[];
    data?: object;
  }) {
    return await this._instance.get(url + apiKey + join(query, ""), data);
  }
  async put(config: any) {
    return await this._instance.put(
      config.url + apiKey + config?.query,
      config.data
    );
  }
  async delete(config: any) {
    return await this._instance.delete(
      config.url + apiKey + config?.query,
      config.data
    );
  }
}
const service = new Axios();
export default function useAxios() {
  return service;
}
