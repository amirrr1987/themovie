import useAxios from "./axios";
const axios = useAxios();

export const getConfigurationApi = async () => {
    return await axios.get({
        url: `configuration`,
        query: '',
        data: {},
    });
};
export const getLanguagesApi = async () => {
    return await axios.get({
        url: `configuration/languages`,
        query: '',
        data: {},
    });
};
export const getCountriesApi = async () => {
    return await axios.get({
        url: `configuration/countries`,
        query: '',
        data: {},
    });
};
