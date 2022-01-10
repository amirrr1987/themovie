import Axios from "axios";
let apiKey = "f62f750b70a8ef11dad44670cfb6aa57";
const DATA = Axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  headers: {
    Accept: "application/json",
    "content-type": "application/json",
  },
});

export const GetMovieList = (
  page: string = '1',
  sortBy: string = "popularity.desc",
  gte: string = "",
  lte: string = ""
) => {
  return DATA.get(
    `discover/movie?api_key=${apiKey}&page=${page}&sort_by=${sortBy}&release_date.gte=${gte}&release_date.lte=${lte}`
  );
};
// https://api.themoviedb.org/3/discover/movie?api_key=f62f750b70a8ef11dad44670cfb6aa57
export const GetMovieDetails = (movieId: string) => {
  return DATA.get(`movie/${movieId}?api_key=${apiKey}`);
};

export const GetGenres = () => {
  return DATA.get(`/genre/movie/list?api_key=${apiKey}&language=en-US`);
};

export const getMovieCredits = (movieId:string) => {
  return DATA.get(`movie/${movieId}/credits?api_key=${apiKey}&language=en-US`);
}