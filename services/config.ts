import useAxios from "./axios";
const axios = useAxios();

export const getConfigurationApi = async () => {
    return await axios.get({
      url: `/configuration`,
      query: [],
      data: {},
    });
};
export const getCountriesApi = async () => {
  return await axios.get({
    url: `configuration/countries`,
    query: [],
    data: {},
  });
};

export const getLanguagesApi = async () => {
  return await axios.get({
    url: `configuration/languages`,
    query: [],
    data: {},
  });
};

export const getPrimaryTranslationsApi = async () => {
  return await axios.get({
    url: `configuration/primary_translations`,
    query: [],
    data: {},
  });
};
export const getTimezonesApi = async () => {
  return await axios.get({
    url: `configuration/timezones`,
    query: [],
    data: {},
  });
};
