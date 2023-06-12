<template>
  <div class="p-4 grid grid-cols-4 gap-4">
    <Card v-for="(item, index) in 4">{{ item }}{{ index }}</Card>
  </div>
</template>
<script setup lang="ts">
import { Card } from "ant-design-vue";
import { useConfigurationStore } from "~/stores/config";
import { useDiscoverStore } from "~/stores/discover";
import { useMovieStore } from "~/stores/movie";
import { useQueryStore } from "~/stores/query";
const configurationStore = useConfigurationStore();
const discoverStore = useDiscoverStore();
const movieStore = useMovieStore();
const queryStore = useQueryStore()

onMounted(async() => {
  await configurationStore.getConfiguration()
  await discoverStore.getDiscover()
  await movieStore.getMovie()
})
// const { data } = await useAsyncData("user", () => store.getConfiguration);
</script>
<style></style>
