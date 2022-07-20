<template>
  <router-view />
</template>

<script setup lang="ts">

import { onMounted } from 'vue';
import { useMoviesStore } from './stores'

const moviesStore = useMoviesStore()


onMounted(() => {
  moviesStore.getMovies()
  moviesStore.getGenres()
})
</script>
