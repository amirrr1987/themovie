<template>
  <!-- <router-view /> -->
</template>

<script setup lang="ts">

import { onMounted } from 'vue';
import { useListStore } from './stores/ListStore'

const listStore = useListStore()


onMounted(() => {
  listStore.GetListStore()
})
</script>
