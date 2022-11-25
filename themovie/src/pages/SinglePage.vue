<template>
    <div class="py-12">
        <div class="grid grid-cols-4 gap-x-4">
            <img class="w-full h-full object-cover rounded shadow"
                :src="`https://image.tmdb.org/t/p/w500/${moviesStore.state.poster_path}`" alt="">
            <div class="col-span-3">

                <div class="flex items-center gap-x-2">
                    <span class="text-lg font-medium text-black">Title:</span>
                    <span>{{ moviesStore.state.title }}</span>
                </div>
                <div class="flex items-center gap-x-2">
                    <span class="text-base font-normal text-black">Overview:</span>
                    <span class="">{{ moviesStore.state.overview }}</span>
                </div>

                <div>{{ moviesStore.state.id }}</div>
                <div>{{ moviesStore.state.adult }}</div>
                <div>{{ moviesStore.state.budget }}</div>
                <div>{{ moviesStore.state.popularity }}</div>
                <div>{{ moviesStore.state.production_countries }}</div>
                <div>{{ moviesStore.state.production_companies }}</div>
                <div>{{ moviesStore.state.genres }}</div>
                <div>{{ moviesStore.state.status }}</div>
                <div>{{ moviesStore.state.spoken_languages }}</div>
                <!-- <div>{{ moviesStore.state }}</div> -->
                <!-- <div>{{ moviesStore.state }}</div> -->
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue';
import { useMoviesStore } from "@/stores/MoviesStore";
import { useRoute } from 'vue-router';
const moviesStore = useMoviesStore()


const route = useRoute()
const movieId = String(route.params.id)
onMounted(async () => {
    await moviesStore.GetMovieDetailHandler(movieId)
})
onUnmounted(() => {
    moviesStore.ResetState()
})
</script>

<style lang="less">

</style>