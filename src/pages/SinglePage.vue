<template>
  <main class="py-12 single">
    <TheContainer>
      <Skeleton
      active
      avatar
      title
      size="large"
      class="border border-gray-200 p-4px rounded w-full"
      :loading="loading"
    >
      <div class="grid grid-cols-4 gap-x-4">
        <Image
          class="w-full h-full object-cover rounded shadow"
          :src="`https://image.tmdb.org/t/p/w500/${moviesStore.state.poster_path}`"
          alt=""
        />
        <div class="col-span-3">
          <div class="grid grid-cols-max-1fr gap-x-4 gap-y-1">
            <span class="text-lg font-medium text-white">Title:</span>
            <span>{{
              moviesStore.state.title.length === 0
                ? "-"
                : moviesStore.state.title
            }}</span>

            <span class="text-lg font-medium text-white">Tagline:</span>
            <span>{{
              moviesStore.state.tagline.length === 0
                ? "-"
                : moviesStore.state.tagline
            }}</span>

            <span class="text-lg font-medium text-white">Vote average:</span>
            <span>{{ moviesStore.state.vote_average }}</span>

            <span class="text-lg font-medium text-white">Vote count:</span>
            <span>{{ moviesStore.state.vote_count }}</span>

            <span class="text-base font-medium text-white capitalize"
              >Overview:</span
            >
            <span class="">{{
              moviesStore.state.overview.length === 0
                ? "-"
                : moviesStore.state.overview
            }}</span>

            <span class="text-base font-medium text-white capitalize"
              >Budget:</span
            >
            <span class="">{{ moviesStore.state.budget }}</span>

            <span class="text-base font-medium text-white capitalize"
              >Adult:</span
            >
            <span class="">{{ moviesStore.state.adult }}</span>

            <span class="text-base font-medium text-white capitalize"
              >Popularity:</span
            >
            <span class="">{{ moviesStore.state.popularity }}</span>

            <span class="text-base font-medium text-white capitalize"
              >Genres:</span
            >
            <div class="flex gap-x-1">
              <template v-for="item in moviesStore.state.genres">
                <span class="">{{ item.name }}, </span>
              </template>
            </div>

            <span class="text-base font-medium text-white capitalize"
              >Status:</span
            >
            <span class="">{{
              moviesStore.state.status.length === 0
                ? "-"
                : moviesStore.state.status
            }}</span>

            <span class="text-base font-medium text-white capitalize"
              >Release date:</span
            >
            <span class="">{{ moviesStore.state.release_date }}</span>

            <span class="text-base font-medium text-white capitalize"
              >Revenue:</span
            >
            <span class="">{{ moviesStore.state.revenue }}</span>

            <span class="text-base font-medium text-white capitalize"
              >Homepage:</span
            >
            <a :href="moviesStore.state.homepage" target="_blank">{{
              moviesStore.state.homepage
            }}</a>

            <span class="text-base font-medium text-white capitalize"
              >Runtime:</span
            >
            <span class="">{{ moviesStore.state.runtime }}</span>

            <span class="text-base font-medium text-white capitalize"
              >Production countries:</span
            >
            <div>
              <template v-for="item in moviesStore.state.production_countries">
                <span>{{ item.name }}, </span>
              </template>
            </div>

            <span class="text-base font-medium text-white capitalize"
              >Production companies:</span
            >
            <div class="flex gap-x-4">
              <template v-for="item in moviesStore.state.production_companies">
                <img
                  v-if="item.logo_path"
                  class="max-w-40 max-h-40 object-contain"
                  :src="`https://image.tmdb.org/t/p/w500/${item.logo_path}`"
                  alt=""
                />
              </template>
            </div>
          </div>
        </div>
      </div>
    </Skeleton>
    </TheContainer>
  </main>
</template>
<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";
import { useMoviesStore } from "@/stores/MoviesStore";
import { useRoute } from "vue-router";
import { Skeleton, Image } from "ant-design-vue/es";
import { useGenreStore } from "@/stores/GenreStore";
import TheContainer from "@/components/TheContainer.vue";
const moviesStore = useMoviesStore();
const route = useRoute();
const movieId = String(route.params.id);
const loading = ref(false);
const genreStore = useGenreStore();

onMounted(async () => {
  loading.value = true;
  await moviesStore.GetMovieDetailHandler(movieId);
  loading.value = false;
});
onUnmounted(() => {
  moviesStore.ResetState();
});
</script>
<style>
.single {
  background-image: v-bind('`url(https://image.tmdb.org/t/p/original/${moviesStore.state.backdrop_path})`');
  position: relative;
  z-index: -2;
  color: #FFF;
  }
  .single::after{
    content: " ";
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    background-color: #212121;
    opacity: 0.85;
    z-index: -1;
  }
</style>
