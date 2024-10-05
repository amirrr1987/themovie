<script setup lang="ts">
import { useWindowSize } from "@vueuse/core";
import type { Move, Tv } from "~/types/discoverModel";
import type { GenreElement } from "~/types/genreModel";
const { width, height } = useWindowSize();

interface Props {
  item: Move | Tv;
  genres: GenreElement[];
}

const props = withDefaults(defineProps<Props>(), {
  item: () => ({}) as Move | Tv,
  genres: () => [] as GenreElement[],
});

const cardUi = {
  base: "overflow-hidden",
  background: "bg-white dark:bg-gray-900",
  divide: "divide-y divide-gray-200 dark:divide-gray-800",
  ring: "ring-1 ring-gray-200 dark:ring-gray-800",
  rounded: "rounded-lg",
  shadow: "shadow",
  body: {
    base: "",
    background: "",
    padding: "px-4 py-5 sm:p-6",
  },
  header: {
    base: "",
    background: "",
    padding: "px-0 py-0 sm:px-0",
  },
  footer: {
    base: "",
    background: "",
    padding: "px-4 py-4 sm:px-6",
  },
};
</script>

<template>
  <NuxtLink
    :to="{
      name: 'single-title',
      params: {
        title: props.item.title || props.item.name,
      },
      query: {
        id: props.item.id,
        type: props.item.name ? 'tv' : 'movie',
      },
    }"
  >
    <UCard :ui="cardUi">
      <template #header>
        <NuxtImg
          class="w-full"
          :src="`http://image.tmdb.org/t/p/original/${props.item.backdrop_path}`"
        />
      </template>
      <h3 class="font-bold">{{ props.item.title || props.item.name }}</h3>
      <template #footer>
        <div class="flex gap-2">
          <UBadge v-for="item in props.genres" color="rose" variant="subtle">
            {{ item.name }}
          </UBadge>
        </div>
      </template>
    </UCard>
  </NuxtLink>
</template>

<style scoped></style>
