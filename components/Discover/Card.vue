<script setup lang="ts">
import type { DiscoverItem } from "~/types/discoverModel";
import type { GenreElement } from "~/types/genreModel";

interface Props {
  item: DiscoverItem;
  genres: GenreElement[];
}

const props = withDefaults(defineProps<Props>(), {
  item: () => ({}) as DiscoverItem,
  genres: () => [] as GenreElement[],
});

const cardUi = {
  base: "overflow-hidden",
  background: "bg-white dark:bg-gray-900",
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
      name: 'title',
      params: {
        title:
          props.item.title.replace(/ /g, '-') ||
          props.item.name.replace(/ /g, '-'),
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
          v-if="props.item.backdrop_path"
          class="w-full"
          :src="`http://image.tmdb.org/t/p/original/${props.item.backdrop_path}`"
        />
        <USkeleton v-else class="w-full" />
      </template>
      <h3 class="font-bold" v-if="props.item.title || props.item.name">
        {{ props.item.title || props.item.name }}
      </h3>
      <USkeleton />

      <template #footer>
        <div class="flex gap-2" v-if="props.item.genre_ids">
          <UBadge v-for="item in props.genres" color="rose" variant="subtle">
            {{ item.name }}
          </UBadge>
        </div>
        <USkeleton v-else class="h-4" />
      </template>
    </UCard>
  </NuxtLink>
</template>

<style scoped></style>
