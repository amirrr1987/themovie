<template>
  <div class="py-12">
    <img
      class="w-full h-190 object-cover object-top rounded shadow mb-4"
      :src="`https://image.tmdb.org/t/p/original/${moviesStore.state.backdrop_path}`"
      alt=""
    />
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
            <span class="text-lg font-medium text-black">Title:</span>
            <span>{{ moviesStore.state.title.length === 0 ? '-' : moviesStore.state.title }}</span>

            <span class="text-lg font-medium text-black">Tagline:</span>
            <span>{{ moviesStore.state.tagline.length === 0 ? '-' : moviesStore.state.tagline }}</span>

            <span class="text-lg font-medium text-black">Vote average:</span>
            <span>{{  moviesStore.state.vote_average }}</span>

            <span class="text-lg font-medium text-black">Vote count:</span>
            <span>{{  moviesStore.state.vote_count }}</span>

            <span class="text-base font-medium text-black capitalize"
              >Overview:</span
            >
            <span class="">{{ moviesStore.state.overview.length === 0 ? '-' : moviesStore.state.overview }}</span>

            <span class="text-base font-medium text-black capitalize"
              >Budget:</span
            >
            <span class="">{{ moviesStore.state.budget }}</span>

            <span class="text-base font-medium text-black capitalize"
              >Adult:</span
            >
            <span class="">{{ moviesStore.state.adult }}</span>

            <span class="text-base font-medium text-black capitalize"
              >Popularity:</span
            >
            <span class="">{{ moviesStore.state.popularity }}</span>

            <span class="text-base font-medium text-black capitalize"
              >Genres:</span
            >
            <div class="flex gap-x-1">
              <template v-for="item in moviesStore.state.genres">
                <span class="">{{ item.name }}, </span>
              </template>
            </div>

            <span class="text-base font-medium text-black capitalize"
              >Status:</span
            >
            <span class="">{{ moviesStore.state.status.length === 0 ? '-' : moviesStore.state.status }}</span>

            <span class="text-base font-medium text-black capitalize"
              >Release date:</span
            >
            <span class="">{{ moviesStore.state.release_date }}</span>

            <span class="text-base font-medium text-black capitalize"
              >Revenue:</span
            >
            <span class="">{{ moviesStore.state.revenue }}</span>

            <span class="text-base font-medium text-black capitalize"
              >Homepage:</span
            >
            <a :href="moviesStore.state.homepage" target="_blank">{{
              moviesStore.state.homepage
            }}</a>

            <span class="text-base font-medium text-black capitalize"
              >Runtime:</span
            >
            <span class="">{{ moviesStore.state.runtime }}</span>

            <span class="text-base font-medium text-black capitalize"
              >Production countries:</span
            >
            <div>
              <template v-for="item in moviesStore.state.production_countries">
                <span>{{ item.name }}, </span>
              </template>
            </div>

            <span class="text-base font-medium text-black capitalize"
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
  </div>
</template>
<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";
import { useMoviesStore } from "@/stores/MoviesStore";
import { useRoute } from "vue-router";
import { Skeleton, Image } from "ant-design-vue/es";
import { useGenreStore } from "@/stores/GenreStore";
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
<style lang="less"></style>
