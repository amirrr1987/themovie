<template>
  <div class="container mx-auto flex gap-4">
    <UPagination
      v-model="page"
      :page-count="discover?.total_pages ?? 0"
      :total="discover?.total_results ?? 0"
    />
    <UFormGroup label="Language" name="language">
      <UInput v-model="language" />
    </UFormGroup>

    <UFormGroup label="Size" name="size">
      <USelect v-model="size" :options="[5, 10, 15]" />
    </UFormGroup>

    <UFormGroup label="Include video" name="video">
      <UToggle v-model="includeVideo" />
    </UFormGroup>

    <UFormGroup label="Include adult" name="adult">
      <UToggle v-model="includeAdult" />
    </UFormGroup>
  </div>

  <div class="grid grid-cols-6 gap-4 p-4">
    <template v-for="m in discover?.results">
      <MovieCard :movie="m" />
    </template>
  </div>
</template>
<script setup lang="ts">
import type { Discover } from "~/types/Discover";
import { useRouteQuery } from "@vueuse/router";

const type = ref<"movie" | "tv">("movie");
const size = useRouteQuery("size", "1", { transform: Number });
const withoutGenres = useRouteQuery("without_genres", "3", {
  transform: String,
});
const certification = useRouteQuery("certification", "", { transform: String });
const certificationGte = useRouteQuery("certification.gte", "sdf", {
  transform: String,
});
const certificationLte = useRouteQuery("certification.lte", "sdf", {
  transform: String,
});
const certificationCountry = useRouteQuery("certification_country", "sdf", {
  transform: String,
});
const includeAdult = useRouteQuery("include_adult", "false", {
  transform: Boolean,
});
const includeVideo = useRouteQuery("include_video", "false", {
  transform: Boolean,
});
const language = useRouteQuery("language", "", { transform: String });
const page = useRouteQuery("page", "1", { transform: Number });
const primaryReleaseYear = useRouteQuery("primary_release_year", "0", {
  transform: Number,
});

const { data: discover } = await useFetch<Discover>(
  `/api/v3/discover/${type.value}`
);
</script>
