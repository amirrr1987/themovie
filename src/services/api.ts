import Axios from "axios";
let apiKey = "f62f750b70a8ef11dad44670cfb6aa57";
const DATA = Axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  headers: {
    Accept: "application/json",
    "content-type": "application/json",
  },
});

export const GetMovieList = (page: string) => {
  return DATA.get(
    `discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_watch_monetization_types=flatrate`
  );
};

export const GetMovieDetails = (movieId: string) => {
  return DATA.get(`movie/${movieId}?api_key=${apiKey}`);
};
