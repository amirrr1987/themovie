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
        <button class="text-gray-500 capitalize">previous page</button>
        <div class="h-[50px] bg-gray-400 w-[2px] mx-3"></div>
        <button class="text-blue-500 capitalize">next page</button>
      </div>
      <div class="text-center">Showing results 1-20</div>
    </section>
  </div>
</template>
<script lang="ts" setup>
import MovieCard from "./../../components/MovieCard.vue";
import SearchBar from "../../components/SearchBar.vue";
import { computed, onMounted, ref } from "vue";
import { GetMovieList } from "../../services/api";
import { useRoute, useRouter } from "vue-router";
const movieList = ref();
const route = useRoute();
const router = useRouter();
const currentPage = computed({
  set: (value: any) => {
    route.query.page = value;
  },
  get: () => {
    return route.query.page;
  },
});

onMounted(async () => {
  try {
    let { data } = await GetMovieList(`${currentPage.value ?? 1}`);
    movieList.value = data.results;
    currentPage.value = data.page;
    router.push(`/?page=${currentPage.value}`);
  } catch (error) {
    throw error
  }
});

const getMovieItem = (index: number) => {
  router.push(`${index}`);
};
</script>
