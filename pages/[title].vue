<template>
  <section class="py-12 bg-cover min-h-screen w-full bg-black text-white">
    <UContainer class="grid md:grid-cols-2 gap-4">
      <NuxtImg
        class="w-full"
        :src="`http://image.tmdb.org/t/p/original/${data?.backdrop_path}`"
      />
      <div>
        <div>
          <h3>name: {{ data?.name ?? data?.title }}</h3>
          <p class="leading-7 mb-4">
            {{ data?.overview }}
          </p>
        </div>
        {{ data?.genre_ids }}
      </div>
    </UContainer>
  </section>
</template>
<script setup lang="ts">
import type { DiscoverItem } from "~/types/discoverModel";

const route = useRoute();

const { data } = await useFetch<DiscoverItem>(
  `/api/v3/find/${route.query.type}/${route.query.id}`
);
</script>
