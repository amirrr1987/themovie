<template>
  <div class="q-pa-md">
    <div class="row">
      <template v-for="(movie) in moviesStore.results" :key="movie">
        <div class="col-12 col-md-6 col-lg-4">
          <q-card class="q-ma-lg">
            <q-card-section horizontal>
              <q-img class="col-4" :src="`https://image.tmdb.org/t/p/w500/${movie.poster_path}`" />
              <q-card-section>
                <q-card-section>
                  <div class="text-h6">{{ movie.title }}</div>
                  <div class="text-caption text-grey">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua.
                  </div>
                </q-card-section>
                <q-separator class="q-mb-xs" />
                <q-card-actions>
                  <div>
                    <q-icon name="event" size="1.68em" />
                    <span class="q-pa-sm"> {{ movie.release_date }}</span>
                  </div>
                </q-card-actions>
                <q-card-actions>
                  <div class="genre-list">
                    <template v-for="genre in movie.genre_ids">
                      <span>{{ getGenre(genre).name ?? '' }}</span>
                      <q-icon name="radio_button_checked" size="0.6em" class="q-mx-xs" />
                    </template>
                  </div>
                </q-card-actions>
                <q-card-actions>
                  <q-btn :to="`/${movie.id}`" label="more" flat color="primary" />
                </q-card-actions>
              </q-card-section>
            </q-card-section>
          </q-card>
        </div>
      </template>
    </div>


    <div class="row">
      <div class="col">
        <q-pagination v-model="current" :max="moviesStore.total_pages" input input-class="text-orange-10"
          @update:model-value="getCurrent" />
      </div>
    </div>
  </div>
</template>


<script setup lang="ts">
import {  ref } from 'vue'
import { useMoviesStore } from '../stores'


const moviesStore = useMoviesStore()

const current = ref(1)
const getCurrent = () => {
  moviesStore.setCurrentPage(current.value)
}

const getGenre = (id: number) => {
  return moviesStore.genres.find((genre:any) => genre.id == id) ?? ''
}

</script>
<style lang="scss">
.genre-list{
  .q-icon:last-child{
    display: none !important;
  }
}
</style>