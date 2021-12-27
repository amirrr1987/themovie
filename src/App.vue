<template>
  <div class="hidden">{{ store }}</div>
  <router-view />
</template>
<script setup lang="ts">
import store from "./services/store";
</script>
<style>
html {
  scroll-behavior: smooth;
}
#app {
  color: #2c3e50;
}
</style>
