<template>
  <main class="py-12">
    <TheContainer>
      <div class="grid grid-cols-12 gap-4">
        <TheAside class="col-span-2" />
        <div class="col-span-10 grid grid-cols-custom gap-4 overflow-y-scroll">
          <template v-for="(item, index) in discoverStore.state.discover.results" :key="index">
            <CardItem :adult="item.adult" :backdrop_path="item.backdrop_path" :genre_ids="item.genre_ids" :id="item.id"
              :original_language="item.original_language" :original_title="item.original_title" :overview="item.overview"
              :popularity="item.popularity" :poster_path="item.poster_path" :release_date="item.release_date"
              :title="item.title" :video="item.video" :vote_average="item.vote_average" :vote_count="item.vote_count"
              :loading="loading" />
          </template>
        </div>
      </div>
    </TheContainer>
  </main>
</template>
<script setup lang="ts">
import TheContainer from "@/components/TheContainer.vue";
import CardItem from "@/components/CardItem.vue";
import { useDiscoverStore } from "@/stores/discover";
import { useGenreStore } from "@/stores/genre";
import { onMounted, ref } from "vue";
import { Pagination } from "ant-design-vue/es";
import { useConfigurationStore } from "@/stores/configuration";
import TheAside from "@/components/TheAside.vue";
// import { RadioGroup, RadioButton } from "ant-design-vue/es";

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

// const submitQueryStrings = async () => {
//   loading.value = true;
//   await discoverStore.getDiscoverHandler();
//   loading.value = false;
// };
const gridColSize = ref(5);
</script>
<style>
.ant-skeleton-image {
  width: 100% !important;
  height: 460px !important;
}

.grid-cols-custom {
  grid-template-columns: repeat(v-bind("gridColSize"), minmax(0, 1fr));
}
</style>
