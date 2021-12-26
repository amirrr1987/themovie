<template>
  <figure class="movie-card">
    <img class="h-full" src="@/assets/img/cover.png" title="" alt="" />
    <figcaption class="px-1 py-3 flex flex-col justify-between">
      <h4 class="font-bold">Inception</h4>
      <div class="text-sm">
        <div class="flex items-center mb-3">
          <IconCalendar class="mr-3" />
          <span>2014-12-01</span>
        </div>
        <div class="inline-flex justify-around items-center">
          <span class="">Action</span>
          <i class="bg-gray-500 w-[6px] h-[6px] rounded-full mx-1"></i>
          <span class="">Adventure</span>
          <i class="bg-gray-500 w-[6px] h-[6px] rounded-full mx-1"></i>
          <span class="">Sci-Fi</span>
        </div>
      </div>
    </figcaption>
  </figure>
</template>
<script lang="ts" setup>
import IconCalendar from "./IconCalendar.vue";
</script>
<style>
.movie-card {
  @apply bg-[#F1F1F1] grid grid-cols-[max-content,1fr] gap-x-3 w-full rounded shadow drop-shadow overflow-hidden p-1 mx-auto;
}
</style>
