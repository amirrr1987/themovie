import { reactive, readonly } from "vue";

const state = reactive({
  movies: [] ?? null,
});
export const setMovies = (list: any): void => {
  state.movies = state.movies.concat(list);
};
export const getMovies = (): Object => {
  return state.movies;
};

export const getMovieItem = (id: any) => {
  let data = state.movies.filter((item: object) => {
    return item.id == id;
  });
    return data
};

export default { state: readonly(state) };
