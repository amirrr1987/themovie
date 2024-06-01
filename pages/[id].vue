<template>
  <img
    :src="`http://image.tmdb.org/t/p/original/${movie?.poster_path}`"
    alt=""
    srcset=""
  />
</template>
<script setup lang="ts">
import type { Movie } from "~/types/Movie";

const { id } = useRoute().params;
const { data: movie } = await useFetch<Movie>(`/api/v3/movie/${id}`);
</script>
