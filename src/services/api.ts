import Axios from "axios";
const DATA = Axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  headers: {
    Accept: "application/json",
    "content-type": "application/json",
  },
});

export const GetMovieList = () => {
  return DATA.get("discover/movie?api_key=f62f750b70a8ef11dad44670cfb6aa57");
};

export const GetMovieDetails = (movieId: string) => {
  return DATA.get(
    `discover/movie/${movieId}?api_key=f62f750b70a8ef11dad44670cfb6aa57`
  );
};
