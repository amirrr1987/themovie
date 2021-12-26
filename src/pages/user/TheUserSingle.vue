<template>
  <div class="the-user-single py-5">
    <div class="container mx-auto px-5">
      <div class="back-bar bg-[#E2E2E2] rounded">
        <router-link
          class="
            bg-[#549DF2]
            capitalize
            self-center
            px-10
            py-2
            rounded-full
            text-white
            mr-10
          "
          to="/"
        >
          back
        </router-link>
        <div class="flex flex-col">
          <strong class="">{{ moveItem[0].title }}</strong>
          <span>{{ moveItem[0].original_title }}</span>
        </div>
      </div>
      <div class="py-5">
        <div class="grid grid-cols-[max-content,1fr] gap-x-10 mb-5">
          <img
            class="max-w-full rounded"
            :src="`https://image.tmdb.org/t/p/w400${moveItem[0].poster_path}`"
            alt=""
          />
          <div class="">
            <div class="flex justify-between mb-2">
              <span>Budget</span>
              <span>$170’000’000</span>
            </div>
            <div class="flex justify-between mb-2">
              <span>Revenue</span>
              <span>$772’776’600</span>
            </div>
            <div class="flex justify-between mb-2">
              <span>Release Date</span>
              <span>2014-07-30</span>
            </div>
            <div class="flex justify-between mb-2">
              <span>Runtime</span>
              <span>2h 1m</span>
            </div>
            <div class="flex justify-between mb-2">
              <span>Score</span>
              <span>7.9 (23563 votes)</span>
            </div>
            <div class="flex justify-between mb-2">
              <span>Genres</span>
              <span>Action, Science Fiction, Adventure</span>
            </div>
            <div class="flex justify-between mb-2">
              <span>IMDB Link</span>
              <a href="#">Link</a>
            </div>
            <div class="flex justify-between mb-2">
              <span>Homepage Link</span>
              <a href="#">Link</a>
            </div>
          </div>
        </div>
        <p class="mb-5">
          {{ moveItem[0].overview }}
        </p>
        <strong class="mb-2 block">Credit:</strong>
        <p>
          Zoe Saldanna , Vin Diesel , Chris Pratt , Bradley Cooper , Lee Pace ,
          Zoe Saldanna , Vin Diesel , Chris Pratt , Bradley Cooper , Lee Pace
          and 19 more.
        </p>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { computed, ref } from "vue";
import { useRoute } from "vue-router";
import { getMovieItem } from "../../services/store";

const route = useRoute();
const movieId = ref("");

movieId.value = `${route.params.id}`;

const moveItem = computed(() => {
  return getMovieItem(movieId.value);
});
console.log(moveItem.value[0]);
</script>
<style>
.back-bar {
  @apply bg-[#E2E2E2] px-16 py-8 rounded shadow drop-shadow md:flex;
}
</style>
