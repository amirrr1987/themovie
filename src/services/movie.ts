import useAxios from "./axios";
const axios = useAxios();

export const getMovieApi = async ({ movieId }: { movieId: string }) => {
  return await axios.get({
    url: `/movie/${movieId}`,
    query: [],
    data: {},
  });
};
