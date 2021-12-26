<template>
<div class="hidden">{{store}}</div>
  <router-view />
</template>
<script setup lang="ts">
import store from './services/store';
</script>
<style>
#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  /* -webkit-font-smoothing: antialiased; */
  /* -moz-osx-font-smoothing: grayscale; */
  color: #2c3e50;
  
}
</style>
