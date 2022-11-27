import useAxios from "./axios";
const axios = useAxios();

export const GetDiscoverMovieApi = async (type: string, query: any) => {
  return await axios.get({
    url: `discover/${type}`,
    query: query,
    data: {},
  });
};
