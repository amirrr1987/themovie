import useAxios from "./axios";
const axios = useAxios();

export const getDiscoverApi = async ({
  type,
  query,
}: {
  type: string;
  query: string[];
}) => {
  return await axios.get({
    url: `discover/${type}`,
    query: query,
    data: {},
  });
};
