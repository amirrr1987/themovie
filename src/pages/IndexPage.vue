<template>
  <div class="py-12">
    <div class="grid grid-cols-12 gap-4">
      <TheAside class="col-span-2 overflow-y-scroll h-full" />
      <div class="col-span-10 grid grid-cols-4 gap-4 overflow-y-scroll h-full">
        <template v-for="item in discoverStore.state.discover.results">
          <CardItem :item="item" :loading="loading" />
        </template>
      </div>
    </div>
    <Pagination
      v-model:current="queryStore.state.queries.page"
      simple
      :total="discoverStore.state.discover.total_pages"
      @change="submitQueryStrings"
    />
  </div>
</template>
<script setup lang="ts">
import TheAside from "@/components/TheAside.vue";
import { useDiscoverStore } from "@/stores/DiscoverStore";
import { useGenreStore } from "@/stores/GenreStore";
import { onMounted, ref } from "vue";
import { Pagination } from "ant-design-vue/es";
import { useQueryStore } from "@/stores/QueryStore";
import { useConfigurationStore } from "@/stores/ConfigurationStore";
import CardItem from "@/components/CardItem.vue";

const discoverStore = useDiscoverStore();
const genreStore = useGenreStore();
const queryStore = useQueryStore();
const configurationStore = useConfigurationStore();

const loading = ref(false);
onMounted(async () => {
  loading.value = true;
  await configurationStore.getConfigurationHandler();
  await genreStore.getGenreHandler("movie");
  await queryStore.createQueryString();
  await discoverStore.getDiscoverHandler("movie", queryStore.state.queryString);
  loading.value = false;
});

const submitQueryStrings = async () => {
  loading.value = true;
  await queryStore.createQueryString();
  await discoverStore.getDiscoverHandler(
    "movie",
    "&" + queryStore.state.queryString
  );
  loading.value = false;
};
</script>
<style>
.ant-skeleton-image {
  width: 100% !important;
  height: 460px !important;
}
</style>
