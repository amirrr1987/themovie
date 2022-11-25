import useAxios from "./axios";

const axios = useAxios();

export const GetGenreMovieApi = async (query:string) => {
  return await axios.get({
    url: `genre/movie/list`,
    query: query,
    data: {},
  });
};
