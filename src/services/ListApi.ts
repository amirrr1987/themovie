import useAxios from "./axios";

const axios = useAxios();

export const GetAllCvApi = async (id: string) => {
    console.log("id", id);
    return await axios.get({
        url: `cv/${id}`,
        data: {},
    });
};

export const GetListApi = async (listId: string, query?:any) => {
    return await axios.get({
        url: `list/${listId}`,
        query: query,
        data: {},
    });
};

