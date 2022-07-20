import { store } from 'quasar/wrappers'
import { createPinia } from 'pinia'

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

export default store((/* { ssrContext } */) => {
  const pinia = createPinia()

  // You can add Pinia plugins here
  // pinia.use(SomePiniaPlugin)

  return pinia
})
import { defineStore } from 'pinia';
import { GetGenresApi, GetMovieListApi, GetMovieApi } from '../services'

export const useMoviesStore = defineStore('movies', {
  state: () => ({
    results: <any>[],
    page: 1,
    total_pages: 0,
    total_results: 0,
    genres: [],
    movie: <any>{}
  }),

  actions: {
    async getMovies(...filter: any) {
      const { data } = await GetMovieListApi(this.page, ...filter);
      this.results = data.results;
      this.page = data.page;
      this.total_pages = data.total_pages;
      this.total_results = data.total_results;
    },

    async getGenres() {
      const { data } = await GetGenresApi()
      this.genres = data.genres;

    },

    setCurrentPage(page: number) { 
      this.page = page;
      this.getMovies();
    },
    async getMovie(id: string) { 
      const { data } = await GetMovieApi(id);
      this.movie = data;
    }
  },
});
