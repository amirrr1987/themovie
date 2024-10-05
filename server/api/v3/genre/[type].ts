export default defineEventHandler(async (event) => {
  const params = getRouterParams(event);
  const url = `https://api.themoviedb.org/3/genre/${params.type}/list?api_key=55ee9c566996339d9859d1ec68533e20`;
  return await $fetch(url);
});
