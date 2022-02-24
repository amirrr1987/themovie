<template>
  <carousel :items-to-show="1.5">
    <slide v-for="slide in filmList" :key="slide">
      <picture>
        <source media="(min-width:950px)" :srcset="slide.lg" />
        <source media="(min-width:650px)" :srcset="slide.md" />
        <source media="(min-width:450px)" :srcset="slide.xs" />

        <img :src="slide.xs" alt="" />
      </picture>
    </slide>

    <template #addons>
      <navigation />
      <pagination />
    </template>
  </carousel>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
export default defineComponent({
  name: "TheApp",
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  setup() {
    const filmList = ref<any>([]);
    filmList.value = [
      {
        xs: "https://picsum.photos/id/237/200/300",
        md: "https://picsum.photos/id/137/1600/300",
        lg: "https://picsum.photos/id/337/2600/400",
      },
    ];
    return {
      filmList,
    };
  },
});
</script>
