<template>
  <figure class="movie-card">
    <div class="w-[125px] h-[195px]">
      <img
        width="125"
        height="195px"
        class="w-full h-full rounded-tl rounded-bl"
        v-lazy="{
          src: `https://image.tmdb.org/t/p/original${imgSrc}`,
          loading: '@/assets/img/img-loading.gif',
          error: '@/assets/img/img-cover.svg',
        }"
        title=""
        alt=""
      />
    </div>
    <figcaption class="px-1 py-3 flex flex-col justify-between">
      <h4 class="font-bold">{{ title }}</h4>
      <div class="text-sm">
        <div class="flex items-center mb-3">
          <IconCalendar class="mr-3" />
          <span>{{ date }}</span>
        </div>
        <div class="inline-flex justify-around items-center">
          <template v-for="item in genres" :key="item">
            <span class="">{{ item }}</span>
            <i class="bg-gray-500 w-[6px] h-[6px] rounded-full mx-1"></i>
          </template>
        </div>
      </div>
    </figcaption>
  </figure>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import IconCalendar from "./IconCalendar.vue";
export default defineComponent({
  name: "TheApp",
  props: {
    title: { type: String },
    date: { type: String },
    genres: { type: Array },
    imgSrc: { type: String },
    genresData: { type: Array },
  },
  components: { IconCalendar },
  setup() {
    return {};
  },
});
</script>
<style>
.movie-card {
  @apply bg-[#F1F1F1] grid grid-cols-[max-content,1fr] gap-x-3 w-full rounded shadow drop-shadow overflow-hidden p-1 mx-auto cursor-pointer;
}
</style>
