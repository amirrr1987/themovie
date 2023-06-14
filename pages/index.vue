<template>
  <main class="grid lg:grid-cols-12 gap-4 h-screen lg:grid-rows-[max-content_1fr] overflow-hidden">
    <nav class="col-span-12 h-10 bg-red">sdf</nav>
    <TheSidebar class="col-span-2 overflow-y-auto h-custom" />
    <section class="col-span-10 p-4 grid grid-cols-5 gap-4 overflow-y-auto h-custom">
      {{  }}
      <Card hoverable v-for="item in discoverStore.discoverComputed.results">
        <template #cover>
          <img alt="example" :src="configurationStore.getImageUrl(item.poster_path)" />
          <Icon18
            v-if="item.adult"
            class="absolute bottom-4 left-4 bg-white rounded-full w-6 h-6"
          />
        </template>
        <template #actions>
          <IconStar class="w-5 h-5" />
          <IconStar class="w-5 h-5" />
          <!-- <RouterLink :to="{ name: 'single', params: { id: item.id } }">
            <Button type="link">More</Button>
          </RouterLink> -->
        </template>
      <CardMeta :title="item.title" :description="truncate(item.overview, { length: 90 })">
          <template #avatar> </template>
        </CardMeta>
      </Card>
      <!-- <Card hoverable v-for="(item, index) in discoverStore.discoverComputed.results" :key="index">
        <template #cover>
          <img alt="example" :src="configurationStore.getImageUrl(item.poster_path)" />
          <Icon18
            v-if="item.adult"
            class="absolute bottom-4 left-4 bg-white rounded-full w-6 h-6"
          />
        </template>
        <template #actions>
          <IconStar class="w-5 h-5" />
          <IconStar class="w-5 h-5" />
          <RouterLink :to="{ name: 'single', params: { id: item.id } }">
            <Button type="link">More</Button>
          </RouterLink>
        </template>
        <CardMeta :title="item.title" :description="truncate(item.overview, { length: 90 })">
          <template #avatar> </template>
        </CardMeta>
      </Card> -->
    </section>
  </main>
</template>
<script setup lang="ts">
import { truncate } from 'lodash'
import { Card, CardMeta, Button } from 'ant-design-vue'
import { useConfigurationStore } from "~/stores/config";
import { useDiscoverStore } from "~/stores/discover";
// import { useMovieStore } from "~/stores/movie";
// import { useQueryStore } from "~/stores/query";
const configurationStore = useConfigurationStore();
const discoverStore = useDiscoverStore();
// const movieStore = useMovieStore();
// const queryStore = useQueryStore()

onMounted(async () => {
  await configurationStore.getConfiguration();
  await discoverStore.getDiscover({ type: "movie", query: [] });
  // await movieStore.getMovie()
});
// const { data } = await useAsyncData("user", () => store.getConfiguration);
</script>
<style></style>
