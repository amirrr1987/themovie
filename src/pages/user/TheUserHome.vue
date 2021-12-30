<template>
  <div class="the-home">
    <section class="py-10">
      <div class="container mx-auto px-5">
        <SearchBar />
        <div class="shadow drop-shadow my-1 py-3 flex">
          <button
            class="
              mx-5
              bg-blue-500
              px-5
              py-1
              text-white
              rounded
              capitalize
              flex
              items-center
            "
            @click="popularityOrder"
          >
            popularity
            <i
              class="text-xs"
              :class="
                popularity == 'desc' ? 'icon--sort-down' : 'icon--sort-up'
              "
            ></i>
          </button>
          <form class="flex" @submit.prevent="searchByDate">
            <div class="mx-3 capitalize">
              <label for="start" class="mr-2">start date:</label>
              <input
                name="start"
                type="date"
                class="border px-3 py-1"
                v-model="startDate"
              />
            </div>
            <div class="mr-5">
              <label for="end" class="mr-2">end date:</label>
              <input
                name="edn"
                type="date"
                class="border px-3 py-1"
                v-model="endDate"
              />
            </div>
            <button
              type="submit"
              class="bg-blue-500 text-blue-50 px-5 py-1 rounded-full"
            >
              Search Date
            </button>
          </form>
        </div>
      </div>
    </section>
    <section>
      <div class="container mx-auto px-5">
        <div
          class="grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-10 lg:gap-12"
        >
          <template v-for="(item, index) in movieList" :key="index">
            <MovieCard
              :title="item.title"
              :date="item.release_date"
              :imgSrc="item.poster_path"
              :genres="item.genres"
              @click="getMovieItem(item.id)"
            />
          </template>
        </div>
      </div>
    </section>
    <section class="py-5 lg:py-10">
      <div class="flex justify-center">
        <button class="text-blue-400 capitalize" @click="previousPageHandel">
          previous page
        </button>
        <div class="h-[50px] bg-gray-400 w-[2px] mx-3"></div>
        <button class="text-blue-500 capitalize" @click="nextPageHandel">
          next page
        </button>
      </div>
      <div class="text-center">
        Showing results {{ startItem }}-{{ endItem }}
      </div>
    </section>
  </div>
</template>
<script lang="ts" setup>
import MovieCard from "./../../components/MovieCard.vue";
import SearchBar from "../../components/SearchBar.vue";
import { computed, onBeforeMount, onMounted, ref } from "vue";
import { GetGenres, GetMovieList } from "../../services/api";
import { useRoute, useRouter } from "vue-router";
import NProgress from "nprogress";
const movieList = ref();
const route = useRoute();
const router = useRouter();
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
    let { data } = await GetGenres();
    genresList.value = data.genres;
  } catch (error) {
    throw error;
  }
});

const startItem = ref(1);
const endItem = ref(20);

onMounted(async () => {
  NProgress.start();
  try {
    let { data } = await GetMovieList(
      `${currentPage.value}`,
      "popularity.desc"
    );
    movieList.value = data.results;
    movieList.value.forEach((item: any) => {
      item.genres = genresList.value
        .filter((genre: any) => item.genre_ids.includes(genre.id))
        .map((item: any) => item.name);
    });
    console.log(movieList.value);
    startItem.value = data.page * data.results.length + 1 - data.results.length;
    endItem.value = startItem.value + (data.results.length - 1);
    router.push({ name: "TheUserHome", query: { page: data.page } });
    window.scrollTo(0, 0);
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
    let { data } = await GetMovieList(`${Number(currentPage.value) + 1}`);
    console.log(data);
    movieList.value = data.results;
    movieList.value.forEach((item: any) => {
      item.genres = genresList.value
        .filter((genre: any) => item.genre_ids.includes(genre.id))
        .map((item: any) => item.name);
    });
    console.log(movieList.value);
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

const previousPageHandel = async () => {
  NProgress.start();
  try {
    let { data } = await GetMovieList(`${Number(currentPage.value) - 1}`);
    console.log(data);
    movieList.value = data.results;
    movieList.value.forEach((item: any) => {
      item.genres = genresList.value
        .filter((genre: any) => item.genre_ids.includes(genre.id))
        .map((item: any) => item.name);
    });
    console.log(movieList.value);
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

///////////////////////////////////////////////
// Start: popularity Order
/**
 * This is function.
 * @param {string} popularity - A string param
 * @return {array} A good string
 *
 * ```
 */
const popularity = ref("desc");
const popularityOrder = async () => {
  popularity.value = popularity.value == "desc" ? "asc" : "desc";
  try {
    let { data } = await GetMovieList(`1`, popularity.value);
    console.log(data);
    movieList.value = data.results;
    movieList.value.forEach((item: any) => {
      item.genres = genresList.value
        .filter((genre: any) => item.genre_ids.includes(genre.id))
        .map((item: any) => item.name);
    });
    console.log(movieList.value);
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

// End: popularity Order
///////////////////////////////////////////////

// ///////////////////////////////////////////////
// // Start: popularity Order
// /**
//  * This is function.
//  * @param {string} popularity - A string param
//  * @return {array} A good string
//  *
//  * ```
//  */
// const releaseYear = ref("primary_release_year");
// const popularityOrder = async () => {
//   popularity.value = popularity.value == "desc" ? "asc" : "desc";
//   try {
//     let { data } = await GetMovieList(`1`, popularity.value);
//     console.log(data);
//     movieList.value = data.results;
//     startItem.value = data.page * data.results.length + 1 - data.results.length;
//     endItem.value = startItem.value + (data.results.length - 1);
//     router.push({ name: "TheUserHome", query: { page: data.page } });
//     window.scrollTo(0, 0);
//   } catch (error) {
//     throw error;
//   } finally {
//     NProgress.done();
//   }
// };

// // End: popularity Order
///////////////////////////////////////////////

const startDate = ref("");
const endDate = ref("");

const searchByDate = async () => {
  try {
    let { data } = await GetMovieList(
      "1",
      `release_date.gte=${startDate.value}&release_date.lte=${endDate.value}`
    );
    console.log(data);
  } catch (error) {
    throw error;
  }
};
</script>
