import Axios, { AxiosRequestConfig, AxiosInstance } from "axios";
let apiKey = "f62f750b70a8ef11dad44670cfb6aa57";
const APP_API_URL = "https://api.themoviedb.org/3/";
export function useAxios(headers = {}): AxiosInstance {
  return Axios.create({
    baseURL: APP_API_URL,
    withCredentials: false,
    headers: {
      Accept: "application/json",
      "content-type": "application/json",
      ...headers,
    },
  });
}

useAxios().interceptors.request.use(
  (config: AxiosRequestConfig) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const GetMovieListApi = (
  page: string = "1",
  sortBy: string = "popularity.desc",
  gte: string = "",
  lte: string = ""
) => {
  return useAxios().get(
    `discover/movie?api_key=${apiKey}&page=${page}&sort_by=${sortBy}&release_date.gte=${gte}&release_date.lte=${lte}`
  );
};
// https://api.themoviedb.org/3/discover/movie?api_key=f62f750b70a8ef11dad44670cfb6aa57
export const GetMovieDetailsApi = (movieId: string) => {
  return useAxios().get(`movie/${movieId}?api_key=${apiKey}`);
};

export const GetGenresApi = () => {
  return useAxios().get(`genre/movie/list?api_key=${apiKey}&language=en-US`);
};

export const getMovieCreditsApi = (movieId: string) => {
  return useAxios().get(
    `movie/${movieId}/credits?api_key=${apiKey}&language=en-US`
  );
};

export const getMovieImagesApi = (movieId: string) => {
  return useAxios().get(
    `movie/${movieId}/images?api_key=${apiKey}&language=en-US`
  );
};
