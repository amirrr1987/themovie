<template>
  <main class="py-12">
    <TheContainer>
      <div class="grid grid-cols-12 gap-4">
        <TheAside class="col-span-12 md:col-span-3 lg:col-span-2" />
        <div
          class="col-span-12 md:col-span-9  lg:col-span-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 overflow-y-scroll">
            <Card :loading="loading" hoverable v-for="(item, index) in discoverStore.state.discover.results" :key="index">
              <template #cover>
                <img :preview="false" class="h-full w-full object-cover" :src="getImageUrl(item.poster_path)"
                  alt="" />
              </template>
              <template #actions>
                <span v-if="item.adult"
                  class=" text-white p-1 rounded-full flex justify-center items-center text-[8px] w-6 h-6">+18</span>
                <div class="flex items-center justify-center">
                  <svg class="w-5 h-5 !fill-red-400 text-yellow" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="m12 18.275l-4.15 2.5q-.275.175-.575.15t-.525-.2q-.225-.175-.35-.438t-.05-.587l1.1-4.725L3.775 11.8q-.25-.225-.312-.513t.037-.562q.1-.275.3-.45t.55-.225l4.85-.425l1.875-4.45q.125-.3.388-.45t.537-.15q.275 0 .537.15t.388.45l1.875 4.45l4.85.425q.35.05.55.225t.3.45q.1.275.038.563t-.313.512l-3.675 3.175l1.1 4.725q.075.325-.05.588t-.35.437q-.225.175-.525.2t-.575-.15l-4.15-2.5Z"></path></svg>
                  <span>{{ item.vote_average }}</span>
                </div>
                <RouterLink :to="{ name: 'SinglePage', params: { id: item.id } }">
                  <Button type="link" size="small">
                    more..
                  </Button>
                </RouterLink>
              </template>
              <CardMeta :title="item.title">
                <template #description>
                  <div>{{ splitText(item.overview) }}</div>
                </template>
              </CardMeta>
            </Card>
        </div>
      </div>
    </TheContainer>
  </main>
</template>
<script setup lang="ts">

import {
  Button,
  Card,
  CardMeta,
} from "ant-design-vue/es";
import TheContainer from "@/components/TheContainer.vue";
import { useDiscoverStore } from "@/stores/discover";
import { useGenreStore } from "@/stores/genre";
import { onMounted, ref } from "vue";
import { useConfigurationStore } from "@/stores/Configuration";
import TheAside from "@/components/TheAside.vue";

const discoverStore = useDiscoverStore();
const genreStore = useGenreStore();
const configurationStore = useConfigurationStore();

const loading = ref(false);
onMounted(async () => {
  loading.value = true;
  await configurationStore.getConfigurationHandler();
  await genreStore.getGenreHandler({ type: "movie" });
  await discoverStore.getDiscoverHandler({ type: "movie", query: [""] });
  loading.value = false;
});


const splitText = (text: string) => {
  const textArray = text.split(" ");
  const filterArray = textArray.slice(0, 10);
  return filterArray.join(" ") + "..";
};

const getImageUrl = (path: string) => {
  return (
    configurationStore.state.configuration.images.base_url +
    configurationStore.state.configuration.images.poster_sizes[3] +
    path
  );
};

</script>
<style>
.ant-skeleton-image {
  width: 100% !important;
  height: 460px !important;
}

.grid-cols-custom {
  /* grid-template-columns: repeat(v-bind("gridColSize"), minmax(0, 1fr)); */
}
</style>
