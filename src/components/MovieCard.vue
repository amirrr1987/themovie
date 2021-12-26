<template>
  <figure class="movie-card">
    <div class="w-[125px] h-[195px]">
      <img class="w-full h-full rounded-tl rounded-bl" :src="`https://image.tmdb.org/t/p/original${imgSrc}`" title="" alt="" />
    </div>
    <figcaption class="px-1 py-3 flex flex-col justify-between">
      <h4 class="font-bold">{{title}}</h4>
      <div class="text-sm">
        <div class="flex items-center mb-3">
          <IconCalendar class="mr-3" />
          <span>{{date}}</span>
        </div>
        <div class="inline-flex justify-around items-center">
          <template v-for="item in genres" :key="item">
            <span class="">{{item}}</span>
            <i class="bg-gray-500 w-[6px] h-[6px] rounded-full mx-1"></i>
          </template>
        </div>
      </div>
    </figcaption>
  </figure>
</template>
<script lang="ts" setup>
import IconCalendar from "./IconCalendar.vue";
const props = defineProps({
  title: String,
  date: String,
  genres: Array,
  imgSrc: String
})
</script>
<style>
.movie-card {
  @apply bg-[#F1F1F1] grid grid-cols-[max-content,1fr] gap-x-3 w-full rounded shadow drop-shadow overflow-hidden p-1 mx-auto;
}
</style>
