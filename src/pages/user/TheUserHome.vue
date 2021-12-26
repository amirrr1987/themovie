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
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
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
</script>
