<template>
  <div class="the-home">
    <div class="container mx-auto">
      <div class="grid lg:grid-cols-[max-content,1fr] gap-3 p-3 ">
        <aside class="grid auto-rows-max gap-y-3">
          <div class="">
            <input
              class="border py-1 px-3 rounded block w-full"
              type="text"
              placeholder="search"
            />
          </div>
          <div class="">
            <label for="">dd</label>
            <input
              class="border py-1 px-3 rounded block w-full"
              type="number"
            />
          </div>
          <div class="">
            <label for="">includes:</label>
            <select class="border py-1 px-3 rounded block w-full">
              <option v-for="(item, index) in genresList" value="" :key="index">
                {{ item.name }}
              </option>
            </select>
          </div>
          <div class="">
            <label for="">NOT includes:</label>
            <select class="border py-1 px-3 rounded block w-full">
              <option v-for="(item, index) in genresList" value="" :key="index">
                {{ item.name }}
              </option>
            </select>
          </div>
          <div class="">
            <input class="block" type="checkbox" />
          </div>
          <div class="">
            <input class="block" type="checkbox" />
          </div>
          <div class="">
            <label for="">Score :</label>
            <input class="block w-full" type="range" />
          </div>
        </aside>
        <section class="">
          <div class="grid md:grid-cols-2 xl:grid-cols-3 gap-3 px-3">
            <template v-for="(item, index) in movieList" :key="movieList.id">
              <MovieCard
                :title="item.title"
                :date="item.release_date"
                :imgSrc="item.poster_path"
                :genres="item.genres"
                @click="getMovieItem(item.id)"
              />
            </template>
          </div>
          <div class="py-5 lg:py-10">
            <div class="flex justify-center items-center text-3xl">
              <button
                class="capitalize"
                :class="startItem == 1 ? 'text-gray-500' : 'text-green-500'"
                @click="previousPageHandel"
                :disabled="previousPageDisabled"
              >
                <i class="icon--angle-double-left"></i>
              </button>
              <div class="h-[25px] bg-gray-400 w-[2px] mx-3"></div>
              <button
                class="text-green-500 capitalize text-3xl"
                @click="nextPageHandel"
                :disabled="nextPageDisabled"
              >
                <i class="icon--angle-double-right"></i>
              </button>
            </div>
            <div class="text-center">
              Showing results {{ startItem }}-{{ endItem }}
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import MovieCard from "./../../components/MovieCard.vue";
import SearchBar from "../../components/SearchBar.vue";
import { computed, onBeforeMount, onMounted, ref } from "vue";
import { GetGenresApi, GetMovieListApi } from "../../services/TheApi";
import { useRoute, useRouter } from "vue-router";
import NProgress from "nprogress";

const movieList = ref();
const route = useRoute();
const router = useRouter();
const startDate = ref("");
const endDate = ref("");
const currentPage = computed({
  set: (value: any) => {
    route.query.page = value;
  },
  get: () => {
    if (isNaN(Number(route.query.page))) {
      return 1;
    } else {
      return route.query.page;
    }
  },
});

const genresList = ref();
onBeforeMount(async () => {
  try {
    let { data } = await GetGenresApi();
    genresList.value = data.genres;
  } catch (error) {
    throw error;
  }
});

const startItem = ref(1);
const endItem = ref(20);
const previousPageDisabled = ref(false);
const nextPageDisabled = ref(false);

const dataAction = (data: any): void => {
  movieList.value = data.results;
  movieList.value.forEach((item: any) => {
    item.genres = genresList.value
      .filter((genre: any) => item.genre_ids.includes(genre.id))
      .map((item: any) => item.name);
  });
// previousPageDisabled.value = true;
  startItem.value = data.page * data.results.length + 1 - data.results.length;
  endItem.value = startItem.value + (data.results.length - 1);
  router.push({ name: "TheUserHome", query: { page: data.page } });
  window.scrollTo(0, 0);
};

onMounted(async () => {
  NProgress.start();
  try {
    let { data } = await GetMovieListApi(
      `${currentPage.value}`,
      "popularity.desc",
      startDate.value,
      endDate.value
    );
    dataAction(data);
  } catch (error) {
    throw error;
  } finally {
    NProgress.done();
  }
});

const getMovieItem = (index: number) => {
  NProgress.start();
  router.push({ name: "TheUserSingle", params: { id: index } });
  NProgress.done();
};

const nextPageHandel = async () => {
  NProgress.start();
  try {
    let { data } = await GetMovieListApi(
      `${Number(currentPage.value) + 1}`,
      "popularity.desc",
      startDate.value,
      endDate.value
    );
    dataAction(data);
  } catch (error) {
    throw error;
  } finally {
    NProgress.done();
  }
};

const previousPageHandel = async () => {
  NProgress.start();
  try {
    let { data } = await GetMovieListApi(
      `${Number(currentPage.value) - 1}`,
      "popularity.desc",
      startDate.value,
      endDate.value
    );
    dataAction(data);
  } catch (error) {
    throw error;
  } finally {
    NProgress.done();
  }
};

///////////////////////////////////////////////
// Start: popularity Order
/**
 * This is function.
 * @param {string} popularity - A string param
 * @return {array} A good string
 *
 * ```
 */
const popularity = ref("popularity.desc");
const popularityOrder = async () => {
  popularity.value =
    popularity.value == "popularity.desc"
      ? "popularity.asc"
      : "popularity.desc";
  NProgress.start();
  try {
    let { data } = await GetMovieListApi(`1`, popularity.value);
    dataAction(data);
  } catch (error) {
    throw error;
  } finally {
    NProgress.done();
  }
};

// End: popularity Order
///////////////////////////////////////////////

const searchByDate = async () => {
  NProgress.start();
  try {
    let { data } = await GetMovieListApi(
      "1",
      "popularity.desc",
      startDate.value,
      endDate.value
    );
    movieList.value = data.results;
    movieList.value.forEach((item: any) => {
      item.genres = genresList.value
        .filter((genre: any) => item.genre_ids.includes(genre.id))
        .map((item: any) => item.name);
    });
    startItem.value = data.page * data.results.length + 1 - data.results.length;
    endItem.value = startItem.value + (data.results.length - 1);
    router.push({ name: "TheUserHome", query: { page: data.page } });
    window.scrollTo(0, 0);
  } catch (error) {
    throw error;
  } finally {
    NProgress.done();
  }
};
</script>
