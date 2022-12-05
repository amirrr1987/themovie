<template>
  <Card :loading="props.loading" hoverable>
    <template #cover>
      <Image :preview="false" class="h-full w-full object-cover" :src="getImageUrl(props.item.poster_path)" alt="" />
      <SkeletonImage v-if="!props.item" class="w-full h-96" />
    </template>
    <template #actions>
      <SettingOutlined key="setting" />
      <!-- <EditOutlined key="edit" /> -->
      <!-- <EllipsisOutlined key="ellipsis" /> -->

      <span v-if="props.item.adult" class="bg-red-500 text-white p-1 rounded-full inline-flex">+18</span>

      <span>{{ props.item.budget }}</span>
      <span>{{ props.item.vote_average }}</span>
      <RouterLink :to="{ name: 'SinglePage', params: { id: props.item.id } }">
        <Button type="link" size="small">
          more..
          <!-- <template #icon>
            <EllipsisOutlined key="ellipsis" />
          </template> -->
        </Button>
      </RouterLink>
    </template>
    <CardMeta
      :title="props.item.title"
      :description="splitText(props.item.overview)"
    >
      <template #avatar>
        <Avatar src="https://joeschmoe.io/api/v1/random" />
        <!-- {{item.id}} -->
      </template>
    </CardMeta>
  </Card>
</template>
<script setup lang="ts">
import { SettingOutlined, EllipsisOutlined } from "@ant-design/icons-vue";

import {
  Button,
  Image,
  Card,
  CardMeta,
  SkeletonImage,
  Avatar,
} from "ant-design-vue/es";
import type { MovieDetail } from "@/models";
import { useConfigurationStore } from "@/stores/ConfigurationStore";
interface Props {
  item: MovieDetail;
  loading: boolean;
}
const props = withDefaults(defineProps<Props>(), {
  item: {
    adult: false,
    backdrop_path: "",
    belongs_to_collection: null,
    budget: 0,
    genres: [],
    homepage: "",
    id: 0,
    imdb_id: "",
    original_language: "",
    original_title: "",
    overview: "",
    popularity: 0,
    poster_path: "0",
    production_companies: [],
    production_countries: [],
    release_date: "2022-10-19",
    revenue: 368000000,
    runtime: 125,
    spoken_languages: [],
    status: "",
    tagline: "",
    title: "",
    video: false,
    vote_average: 0,
    vote_count: 0,
  },
});

const splitText = (text: string) => {
  const textArray = text.split(" ");
  const filterArray = textArray.slice(0, 10);
  return filterArray.join(" ") + "..";
};

const configurationStore = useConfigurationStore();
const getImageUrl = (path: string) => {
  return (
    configurationStore.state.configuration.images.base_url +
    configurationStore.state.configuration.images.poster_sizes[3] +
    path
  );
};
</script>

<style></style>
