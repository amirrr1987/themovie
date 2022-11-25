<template>

    <div class="py-12">
        <div class="grid grid-cols-12 gap-4">
            <TheAside class="col-span-2" />
            <div class="col-span-10 grid grid-cols-3 gap-4">
                <template v-for="item in discoverStore.state.results">
                    <figure class="border border-gray-200 mb-0 grid grid-cols-3">
                        <img class="w-full h-full object-cover"
                            :src="`https://image.tmdb.org/t/p/w300/${item.poster_path}`" alt="">
                        <figcaption
                            class="p-2 col-span-2 grid grid-rows-[max-content,max-content,max-content,1fr,max-content]">
                            <div class="text-black font-medium text-lg">{{ item.title }}</div>
                            <div class="text-black font-light text-sm">{{ spilteText(item.overview) }}</div>
                            <div class="">
                                Release date: {{ item.release_date }}
                            </div>
                            <div class="">
                                genre:
                                <template v-for="genre in item.genre_ids">
                                    <Tag class="!bg-primary text-white">
                                        {{ findGenreNameById(genre) }}
                                    </Tag>
                                </template>
                            </div>

                            <Button type="link">
                                <RouterLink :to="{ name: 'SinglePage', params: { id: item.id } }">
                                    More ..
                                </RouterLink>
                            </Button>
                        </figcaption>
                    </figure>
                </template>
            </div>
        </div>
        <Pagination v-model:current="currentPage" simple :total="discoverStore.state.total_pages" @change="discoverStore.GetDiscoverMovieHandler(true, currentPage)" />

    </div>
</template>
<script setup lang="ts">
import TheAside from '@/components/TheAside.vue';
import { useDiscoverStore } from '@/stores/DiscoverStore';
import { useGenreStore } from '@/stores/GenreStore';
import { onMounted, ref } from 'vue';
import { Tag, Button, Pagination } from "ant-design-vue/es";
const discoverStore = useDiscoverStore()
const genreStore = useGenreStore()
onMounted(async () => {
    await discoverStore.GetDiscoverMovieHandler(true, currentPage.value)
    await genreStore.GetGenreMovieHandler()
})

const currentPage = ref(0)

const findGenreNameById = (id: number) => {
    const index = genreStore.state.genres.findIndex((single) => {
        return single.id === id
    })
    return genreStore.state.genres[index]?.name ?? ''
}
const spilteText = (text: string) => {
    const textArray = text.split(" ")
    const filterArray = textArray.slice(0, 10)
    return filterArray.join(" ")
}
</script>

<style lang="less">

</style>