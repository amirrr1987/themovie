<template>
  <div class="p-4 grid grid-cols-4 gap-4">
    <Card v-for="(item, index) in 4">{{ item }}{{ index }}</Card>
  </div>
</template>
<script setup lang="ts">
import { Card } from "ant-design-vue";
</script>
<style></style>
