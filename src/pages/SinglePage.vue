<template>
  <div class="single">
    <TheContainer>
      <Skeleton active avatar title :loading="loading">
        <div class="grid grid-cols-4 gap-x-4">
          <Image
            class="w-full h-full object-cover rounded shadow"
            :src="`https://image.tmdb.org/t/p/w500/${movieStore.state.movie.poster_path}`"
            alt=""
          />
          <div class="col-span-3">
            <div class="grid grid-cols-max-1fr gap-x-4 gap-y-1">
              <span class="text-lg font-medium text-white">Title:</span>
              <span>{{
                movieStore.state.movie.title.length === 0
                  ? "-"
                  : movieStore.state.movie.title
              }}</span>

              <span class="text-lg font-medium text-white">Tagline:</span>
              <span>{{
                movieStore.state.movie.tagline.length === 0
                  ? "-"
                  : movieStore.state.movie.tagline
              }}</span>

              <span class="text-lg font-medium text-white">Vote average:</span>
              <span>{{ movieStore.state.movie.vote_average }}</span>

              <span class="text-lg font-medium text-white">Vote count:</span>
              <span>{{ movieStore.state.movie.vote_count }}</span>

              <span class="text-base font-medium text-white capitalize"
                >Overview:</span
              >
              <span class="">{{
                movieStore.state.movie.overview.length === 0
                  ? "-"
                  : movieStore.state.movie.overview
              }}</span>

              <span class="text-base font-medium text-white capitalize"
                >Budget:</span
              >
              <span class="">{{ movieStore.state.movie.budget }}</span>

              <span class="text-base font-medium text-white capitalize"
                >Adult:</span
              >
              <span class="">{{ movieStore.state.movie.adult }}</span>

              <span class="text-base font-medium text-white capitalize"
                >Popularity:</span
              >
              <span class="">{{ movieStore.state.movie.popularity }}</span>

              <span class="text-base font-medium text-white capitalize"
                >Genres:</span
              >
              <div class="flex gap-x-1">
                <template v-for="item in movieStore.state.movie.genres">
                  <span class="">{{ item.name }}, </span>
                </template>
              </div>

              <span class="text-base font-medium text-white capitalize"
                >Status:</span
              >
              <span class="">{{
                movieStore.state.movie.status.length === 0
                  ? "-"
                  : movieStore.state.movie.status
              }}</span>

              <span class="text-base font-medium text-white capitalize"
                >Release date:</span
              >
              <span class="">{{ movieStore.state.movie.release_date }}</span>

              <span class="text-base font-medium text-white capitalize"
                >Revenue:</span
              >
              <span class="">{{ movieStore.state.movie.revenue }}</span>

              <span class="text-base font-medium text-white capitalize"
                >Homepage:</span
              >
              <a :href="movieStore.state.movie.homepage" target="_blank">{{
                movieStore.state.movie.homepage
              }}</a>

              <span class="text-base font-medium text-white capitalize"
                >Runtime:</span
              >
              <span class="">{{ movieStore.state.movie.runtime }}</span>

              <span class="text-base font-medium text-white capitalize"
                >Production countries:</span
              >
              <div>
                <template
                  v-for="item in movieStore.state.movie.production_countries"
                >
                  <span>{{ item.name }}, </span>
                </template>
              </div>

              <span class="text-base font-medium text-white capitalize"
                >Production companies:</span
              >
              <div class="flex gap-x-4">
                <template
                  v-for="item in movieStore.state.movie.production_companies"
                >
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
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import { useMovieStore } from "@/stores/movie";
import TheMain from "@/layouts/TheMain.vue";
import { Skeleton, Image } from "ant-design-vue/es";
import TheContainer from "@/components/TheContainer.vue";
const route = useRoute();
const movieIdComputed = computed(() => String(route.params.id));
const movieStore = useMovieStore();
const loading = ref(false);
onMounted(async () => {
  loading.value = true;
  await movieStore.getMovieHandler({ movieId: movieIdComputed.value });
  loading.value = false;
});
</script>

<style>
.single {
  background-image: v-bind(
    "`url(https://image.tmdb.org/t/p/original/${movieStore.state.movie.backdrop_path})`"
  );
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-color: #212121;
  position: relative;
  z-index: -2;
  color: #fff;
  display: flex;
  align-items: center;
}
.single::after {
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
