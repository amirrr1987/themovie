export const useDiscover = async () => {
  const data = await useFetch("/api/v3/discover/movie");
  return ref(data);
};
