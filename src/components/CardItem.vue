<template>
  <Card :loading="props.loading" hoverable>
    <template #cover>
      <img :preview="false" class="h-full w-full object-cover" :src="getImageUrl(props.item.poster_path)" alt="" />
      <SkeletonImage v-if="!props" class="w-full h-96" />
    </template>
    <template #actions>
      <span v-if="props.item.adult"
        class="bg-red-500 text-white p-1 rounded-full flex justify-center items-center text-[8px] w-6 h-6">+18</span>
      <span>{{ props.item.vote_average }}</span>
      <Icon icon="" />
      <RouterLink :to="{ name: 'SinglePage', params: { id: props.item.id } }">
        <Button type="link" size="small">
          more..
        </Button>
      </RouterLink>
    </template>
    <CardMeta :title="props.item.title">
      <template #description>
        <div>{{ splitText(props.item.overview) }}</div>
        <!-- <div class="flex gap-1 flex-wrap">
          <Tag class="!mr-0" size="small" color="blue" v-for="(single,index) in getName(item.genre_ids)" :key="index">
            {{ single }}
          </Tag>
        </div> -->
      </template>
    </CardMeta>
  </Card>
</template>
<script setup lang="ts">

import {
  Button,
  Card,
  CardMeta,
  SkeletonImage,
  Tag
} from "ant-design-vue/es";
import { useConfigurationStore } from "@/stores/Configuration";
import { useGenreStore } from "@/stores/genre";
export interface item {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

interface Props {
  item: item
  loading: boolean
}
const props = withDefaults(defineProps<Props>(), {
  item: () => {
    return {
      adult: false,
      backdrop_path: "",
      genre_ids: [],
      id: 0,
      original_language: "",
      original_title: "",
      overview: "",
      popularity: 0,
      poster_path: "",
      title: "",
      video: false,
      vote_average: 0,
      vote_count: 0,
      loading: false
      ,
    }
  }
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

const genreStore = useGenreStore()

const getName = (ids) => {
  return ids.map((item: { item: number; }) => {
    return genreStore.findGenreNameById({ id: item }).name
  })
}



</script>

<style></style>
