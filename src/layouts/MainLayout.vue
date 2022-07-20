<template>
  <q-layout view="hHh lpR lff">

    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
          </q-avatar>
          Title
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer show-if-above v-model="leftDrawerOpen" side="left" bordered>

      <div class="q-pa-md">
        <div class="q-gutter-md">
          <q-input v-model="text" label="Search" @keyup="searchIt" />
          <q-input v-model="withGenres" label="genre" @keyup="genreIt" />
          <q-select v-model="model" :options="options" label="Standard" @update:model-value="sortIt" />
        </div>
      </div>

    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer elevated class="bg-grey-8 text-white">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
          </q-avatar>
          <div>Title</div>
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>

  </q-layout>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import { useMoviesStore } from '../stores'
const moviesStore = useMoviesStore()


const leftDrawerOpen = ref(false)
const options = reactive([
  { label: 'popularity.asc', value: 'popularity.asc' },
  { label: 'popularity.desc', value: 'popularity.desc' },
  { label: 'release_date.asc', value: 'release_date.asc' },
  { label: 'release_date.desc', value: 'release_date.desc' },
  { label: 'revenue.asc', value: 'revenue.asc' },
  { label: 'revenue.desc', value: 'revenue.desc' },
  { label: 'primary_release_date.asc', value: 'primary_release_date.asc' },
  { label: 'primary_release_date.desc', value: 'primary_release_date.desc' },
  { label: 'original_title.asc', value: 'original_title.asc' },
  { label: 'original_title.desc', value: 'original_title.desc' },
  { label: 'vote_average.asc', value: 'vote_average.asc' },
  { label: 'vote_average.desc', value: 'vote_average.desc' },
  { label: 'vote_count.asc', value: 'vote_count.asc' },
  { label: 'vote_count.desc', value: 'vote_count.desc' },
])



const text = ref('')
const model = ref('')
const searchIt = () => {
  if (text.value.length > 1) {
    moviesStore.getMovies(`&query=${text.value}`)
  }
}
const sortIt = ()=>{
    console.log(2);
  moviesStore.getMovies(`&sort_by=${model.value}`)

}

const toggleLeftDrawer = ()=> {
  leftDrawerOpen.value = !leftDrawerOpen.value
}

const withGenres = ref('')
const genreIt = () => {
    moviesStore.getMovies(`&with_genres=${withGenres.value}`)
}



</script>