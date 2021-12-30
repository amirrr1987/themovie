<template>
  <div class="the-home">
    <section class="py-10">
      <div class="container mx-auto px-5">
        <SearchBar />
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
import { computed, onMounted, ref } from "vue";
import { GetMovieList } from "../../services/api";
import { useRoute, useRouter } from "vue-router";
import NProgress from "NProgress";
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

const startItem = ref(1);
const endItem = ref(20);

onMounted(async () => {
  NProgress.start();
  try {
    let { data } = await GetMovieList(`${currentPage.value}`);
    console.log(data);
    movieList.value = data.results;
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
