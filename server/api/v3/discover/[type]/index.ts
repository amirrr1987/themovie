import { useQueryString } from "~/composables/QueryString";
import { Discover } from "~/types/discoverModel";
export default defineEventHandler(async (event) => {
  const query = getQuery(event);
  const params = getRouterParams(event);
  const url = `https://api.themoviedb.org/3/discover/${params.type}?api_key=55ee9c566996339d9859d1ec68533e20&${useQueryString(query)}`;
  return await $fetch<Discover>(url);
});
