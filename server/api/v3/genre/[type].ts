export default defineEventHandler(async (event) => {
  const { type }: any = event.context.params;

  const url = `https://api.themoviedb.org/3/genre/${type}/list?api_key=55ee9c566996339d9859d1ec68533e20`;

  const data = await $fetch(url);
  return data;
});
