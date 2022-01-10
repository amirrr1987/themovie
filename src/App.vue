<template>
  <div class="hidden">{{ TheStore }}</div>
  <router-view />
</template>
<script setup lang="ts">
import TheStore from "./services/TheStore";
</script>
<style>
html {
  scroll-behavior: smooth;
}
#app {
  color: #2c3e50;
}
</style>
