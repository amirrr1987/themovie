<template>
  <section class="py-12">
    <UContainer>
      <div>
        <div class="flex flex-col md:flex-row gap-4">
          <UFormGroup label="Type">
            <URadioGroup
              v-model="type"
              legend="Choose something"
              :options="typeOptions"
            />
          </UFormGroup>
          <UFormGroup label="Sort">
            <USelect v-model="sort_by" :options="sortByOption" />
          </UFormGroup>
          <UFormGroup label="Adult">
            <URadioGroup
              v-model="include_adult"
              legend="Choose something"
              :options="[
                {
                  value: 'false',
                  label: 'False',
                },
                {
                  value: 'true',
                  label: 'True',
                },
              ]"
            />
          </UFormGroup>

          <UFormGroup label="Width Genres">
            <USelectMenu
              v-model="with_genres"
              :options="genres?.genres"
              option-attribute="name"
              valueAttribute="id"
              class="block !w-44"
              multiple
            />
          </UFormGroup>

          <UFormGroup abel="Without Genres">
            <USelectMenu
              v-model="without_genres"
              :options="genres?.genres"
              option-attribute="name"
              valueAttribute="id"
              class="block !w-44"
              multiple
            />
          </UFormGroup>
        </div>
        <UPagination
          class="my-6"
          v-model="page"
          :total="500"
          show-first
          show-last
        />
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-4 my-4">
          <DiscoverCard
            v-for="item in discoverData?.results"
            :item="item"
            :genres="getGenres(item.genre_ids)"
            :key="item.id"
          />
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

const with_genres = useRouteQuery<string[]>("with_genres", []);
const without_genres = useRouteQuery<string[]>("without_genres", []);

const include_adult = useRouteQuery<string>("include_adult", "false", {
  transform: String,
});
const sort_by = useRouteQuery<string>("sort_by");

const sortByOption = [
  {
    label: "",
    value: undefined,
  },
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
    with_genres,
    without_genres,
    include_adult,
  };
};

const computedApi = computed(() => {
  return `/api/v3/discover/${type.value}`;
});
const { data: discoverData, status: discoverStatus } = await useFetch<Discover>(
  computedApi,

  {
    query: setQuery(),
    watch: [
      page,
      type,
      sort_by,
      with_genres,
      without_genres,
      include_adult,
      computedApi,
    ],
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
