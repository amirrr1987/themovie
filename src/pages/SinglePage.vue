<template>

    <div class="q-pa-md">
        <div class="row">

            <div class="col-12 col-md-3">

                <div class="q-pa-md">
                    <q-img class="q-rounded"
                        :src="`https://image.tmdb.org/t/p/w500/${moviesStore.movie.poster_path}`" />
                </div>
            </div>
            <div class="col-12 col-md-9">

                <div class="q-pa-md">
                    <div class="full-width row wrap justify-between q-mb-md">
                        <div class="">Title:</div>
                        <div class="">
                            {{ moviesStore.movie.title }}
                        </div>
                    </div>

                    <div class="full-width row wrap justify-between q-mb-md">
                        <div>budget:</div>
                        ${{ moviesStore.movie.budget }}
                    </div>

                    <div class="full-width row wrap justify-between q-mb-md">
                        <div>revenue:</div>
                        <div>
                            ${{ moviesStore.movie.revenue }}
                        </div>
                    </div>

                    <div class="full-width row wrap justify-between q-mb-md">
                        <div>release_date:</div>
                        <div>
                            {{ moviesStore.movie.release_date }}
                        </div>
                    </div>

                    <div class="full-width row wrap justify-between q-mb-md">
                        <div>runtime:</div>
                        <div>
                            {{ moviesStore.movie.runtime }}
                        </div>
                    </div>

                    <div class="full-width row wrap justify-between q-mb-md">
                        <div>score:</div>
                        <div>
                            {{ moviesStore.movie.vote_average }}
                            <span class="q-text-xs">({{ moviesStore.movie.vote_count }} votes)</span>
                        </div>
                    </div>

                    <div class="full-width row wrap justify-between q-mb-md">
                        <div>genres:</div>
                        <div>
                            <template v-for="item in moviesStore.movie.genres" :key="item">
                                <span class="q-ml-sm">{{ item.name }}</span>
                            </template>
                        </div>
                    </div>

                    <div class="full-width row wrap justify-between q-mb-md">
                        <div>homepage:</div>
                        <div>
                            <q-btn :href="moviesStore.movie.homepage" target="_blank">Link</q-btn>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useMoviesStore } from '../stores';

const route = useRoute()
const moviesStore = useMoviesStore()

onMounted(() => {
    console.log(route.params.id);
    moviesStore.getMovie(`${route.params.id}`)
})

const getGenre = (id: number) => {
    return moviesStore.genres.find((genre: any) => genre.id == id) ?? ''
}

</script>