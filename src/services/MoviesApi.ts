
import useAxios from "./axios";

const axios = useAxios();

export const GetMovieDetailApi = async (movieId:string , query?: string) => {
    return await axios.get({
        url: `movie/${movieId}`,
        query: query,
        data: {},
    });
};
