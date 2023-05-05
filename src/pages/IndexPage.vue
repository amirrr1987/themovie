<template>
  <main class="py-12 bg-dark">
    <TheContainer>
      <div class="grid grid-cols-12 gap-4">
        <div class="col-span-12">
          <RadioGroup v-model:value="gridColSize">
            <RadioButton value="3">3</RadioButton>
            <RadioButton value="4">4</RadioButton>
            <RadioButton value="5">5</RadioButton>
          </RadioGroup>
        </div>
        <TheAside class="col-span-2" />
        <div class="col-span-10 grid grid-cols-custom gap-4">
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
    </TheContainer>
  </main>
</template>
<script setup lang="ts">
import TheAside from "@/components/TheAside.vue";
import { useDiscoverStore } from "@/stores/DiscoverStore";
import { useGenreStore } from "@/stores/GenreStore";
import { onMounted, ref } from "vue";
import { Pagination } from "ant-design-vue/es";
import { useConfigurationStore } from "@/stores/Configuration";
import CardItem from "@/components/CardItem.vue";
import { RadioGroup, RadioButton } from "ant-design-vue/es";
import TheContainer from "@/components/TheContainer.vue";

const discoverStore = useDiscoverStore();
const genreStore = useGenreStore();
const configurationStore = useConfigurationStore();

const loading = ref(false);
onMounted(async () => {
  loading.value = true;
  await configurationStore.getConfigurationHandler();
  await genreStore.getGenreHandler();
  loading.value = false;
});

const submitQueryStrings = async () => {
  loading.value = true;
  await discoverStore.getDiscoverHandler();
  loading.value = false;
};
const gridColSize = ref(4);
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
