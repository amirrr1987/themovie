<template>
  <section class="py-12">
    <UContainer>
      <div>
        <div class="flex gap-x-4">
          <URadioGroup
            v-model="type"
            legend="Choose something"
            :options="typeOptions"
          />
          <USelect v-model="sort_by" :options="sortByOption" />
        </div>
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-4 my-4">
          <DiscoverCard
            v-if="discoverStatus === 'success'"
            v-for="item in discoverData?.results"
            :item="item"
            :genres="getGenres(item.genre_ids)"
            :key="item.id"
          />
          <div
            class="flex items-center space-x-4"
            v-if="discoverStatus === 'pending'"
          >
            <USkeleton class="h-12 w-12" :ui="{ rounded: 'rounded-full' }" />
            <div class="space-y-2">
              <USkeleton class="h-4 w-[250px]" />
              <USkeleton class="h-4 w-[200px]" />
            </div>
          </div>
        </div>
      </div>
    </UContainer>
  </section>
</template>
<script setup lang="ts">
import { useRouteQuery } from "@vueuse/router";
import type { Discover } from "~/types/discoverModel";
import type { Genre } from "~/types/genreModel";

const type = useRouteQuery<string>("type", "movie", {
  transform: String,
});

const typeOptions = [
  {
    value: "movie",
    label: "Movie",
  },
  {
    value: "tv",
    label: "TV",
  },
];
const sort_by = useRouteQuery("sort_by", "popularity.desc", {
  transform: String,
});
const sortByOption = [
  {
    label: "original_title.asc",
    value: "original_title.asc",
  },
  {
    label: "original_title.desc",
    value: "original_title.desc",
  },
  {
    label: "popularity.asc",
    value: "popularity.asc",
  },
  {
    label: "popularity.desc",
    value: "popularity.desc",
  },
  {
    label: "revenue.asc",
    value: "revenue.asc",
  },
  {
    label: "revenue.desc",
    value: "revenue.desc",
  },
];

const page = useRouteQuery("page", "1", {
  transform: Number,
});

const setQuery = () => {
  return {
    page,
    sort_by,
  };
};

const computedApi = computed(() => {
  return `/api/v3/discover/${type.value}`;
});
const { data: discoverData, status: discoverStatus } = await useFetch<Discover>(
  computedApi,

  {
    query: setQuery(),
    deep: true,
    watch: [page, type, sort_by, computedApi],
  }
);

const { data: genres } = await useFetch<Genre>(`/api/v3/genre/${type.value}`);

const getGenres = (ids: number[]) => {
  const list: any[] = [];
  ids.forEach((id: number) => {
    const foundGenre = genres.value?.genres.find((genre) => genre.id === id);
    if (foundGenre) {
      list.push(foundGenre);
    }
  });
  return list;
};
</script>
