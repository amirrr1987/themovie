<template>
  <div class="q-pa-md">
    <div class="row">
      
    </div>


    <div class="row">
      <div class="col">

      </div>
    </div>
  </div>
</template>


<script setup lang="ts">
import {  ref } from 'vue'
// import { useMoviesStore } from '../stores'


// const moviesStore = useMoviesStore()

const current = ref(1)
const getCurrent = () => {
  // moviesStore.setCurrentPage(current.value)
}

const getGenre = (id: number) => {
  // return moviesStore.genres.find((genre:any) => genre.id == id) ?? ''
}

</script>
<style lang="scss">
.genre-list{
  .q-icon:last-child{
    display: none !important;
  }
}
</style>