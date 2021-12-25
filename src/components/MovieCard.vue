<template>
  <figure class="movie-card">
    <img class="h-full" src="@/assets/img/cover.png" title="" alt="" />
    <figcaption class="px-1 py-5 flex flex-col justify-between">
      <h4 class="font-bold">Inception</h4>
      <div class="text-sm">
        <div class="flex items-center mb-3">
          <IconCalendar class="mr-3" />
          <span>2014-12-01</span>
        </div>
        <ul class="list-disc flex justify-around">
          <li class="">Action</li>
          <li class="">Adventure</li>
          <li class="">Sci-Fi</li>
        </ul>
      </div>
    </figcaption>
  </figure>
</template>
<script lang="ts" setup>
import IconCalendar from "./IconCalendar.vue";
</script>
<style>
.movie-card {
  @apply bg-[#F1F1F1] grid grid-cols-[43%,57%] aspect-video w-full rounded shadow drop-shadow overflow-hidden p-1 max-w-[500px] mx-auto;
}
</style>
