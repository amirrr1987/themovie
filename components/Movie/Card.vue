<template>
  <UCard :ui="ui">
    <template #header>
      <img
        :src="`http://image.tmdb.org/t/p/original/${movie.poster_path}`"
        alt=""
        srcset=""
      />
    </template>
    <NuxtLink :to="`/${movie.id}`">
      <h4>
        {{ movie.title }}
      </h4>
      <p>{{ movie.popularity }}</p>
    </NuxtLink>
    <template #footer>
      {{ movie.adult }}
    </template>
  </UCard>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
import type { Result } from "~/types/Discover";

defineProps<{ movie: Result }>();

const ui = {
  header: {
    padding: "",
  },
};
</script>
