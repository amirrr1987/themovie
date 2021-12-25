<template>
  <div class="the-user">
    <TheNavbar />
    <TheMain />
    <TheFooter />
  </div>
</template>
<script lang="ts" setup>
import TheNavbar from "../layouts/user/TheUserNavbar.vue";
import TheMain from "../layouts/user/TheUserMain.vue";
import TheFooter from "../layouts/user/TheUserFooter.vue";
</script>
<style>
.the-user {
  @apply min-h-screen grid;
  grid-template-rows: max-content 1fr max-content;
}
</style>
