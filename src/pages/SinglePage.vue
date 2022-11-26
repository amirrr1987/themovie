<template>
    <div class="py-12">
        <Skeleton active avatar title size="large" class="border border-gray-200 p-4px rounded w-full"
            :loading="loading">
            <div class="grid grid-cols-4 gap-x-4">
                <Image class="w-full h-full object-cover rounded shadow"
                    :src="`https://image.tmdb.org/t/p/w500/${moviesStore.state.poster_path}`" alt="" />
                <div class="col-span-3">
                    <div class="grid grid-cols-max-1fr gap-x-4 gap-y-1">
                        <span class="text-lg font-medium text-black">Title:</span>
                        <span>{{ moviesStore.state.title }}</span>

                        <span class="text-lg font-medium text-black">tagline:</span>
                        <span>{{ moviesStore.state.tagline }}</span>

                        <span class="text-lg font-medium text-black">vote_average:</span>
                        <span>{{ moviesStore.state.vote_average }}</span>

                        <span class="text-lg font-medium text-black">vote_count:</span>
                        <span>{{ moviesStore.state.vote_count }}</span>


                        <span class="text-base font-medium text-black capitalize">Overview:</span>
                        <span class="">{{ moviesStore.state.overview }}</span>

                        <span class="text-base font-medium text-black capitalize">Budget:</span>
                        <span class="">{{ moviesStore.state.budget }}</span>

                        <span class="text-base font-medium text-black capitalize">adult:</span>
                        <span class="">{{ moviesStore.state.adult }}</span>

                        <span class="text-base font-medium text-black capitalize">popularity:</span>
                        <span class="">{{ moviesStore.state.popularity }}</span>



                        <span class="text-base font-medium text-black capitalize">genres:</span>
                        <span class="">{{ moviesStore.state.genres }}</span>

                        <span class="text-base font-medium text-black capitalize">status:</span>
                        <span class="">{{ moviesStore.state.status }}</span>

                        <span class="text-base font-medium text-black capitalize">spoken_languages:</span>
                        <span class="">{{ moviesStore.state.spoken_languages }}</span>

                        <span class="text-base font-medium text-black capitalize">release_date:</span>
                        <span class="">{{ moviesStore.state.release_date }}</span>


                        <span class="text-base font-medium text-black capitalize">revenue:</span>
                        <span class="">{{ moviesStore.state.revenue }}</span>


                        <span class="text-base font-medium text-black capitalize">homepage:</span>
                        <span class="">{{ moviesStore.state.homepage }}</span>


                        <span class="text-base font-medium text-black capitalize">runtime:</span>
                        <span class="">{{ moviesStore.state.runtime }}</span>


                        <span class="text-base font-medium text-black capitalize">production_companies:</span>
                        <span class="">{{ moviesStore.state.production_companies }}</span>


                        <span class="text-base font-medium text-black capitalize">production_countries:</span>
                        <span class="">{{ moviesStore.state.production_countries }}</span>

                    </div>


                </div>
            </div>
        </Skeleton>
    </div>
</template>
<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';
import { useMoviesStore } from "@/stores/MoviesStore";
import { useRoute } from 'vue-router';
import { Skeleton, Image } from "ant-design-vue/es";
const moviesStore = useMoviesStore()
const route = useRoute()
const movieId = String(route.params.id)
const loading = ref(false)
onMounted(async () => {
    loading.value = true
    await moviesStore.GetMovieDetailHandler(movieId)
    loading.value = false
})
onUnmounted(() => {
    moviesStore.ResetState()
})
</script>
<style lang="less">

</style>