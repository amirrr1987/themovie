<template>
  <div>{{ route.query.id }}</div>
  {{discoverData}}
</template>
<script setup lang="ts">
const route = useRoute();

const computedApi = computed(() => {
  return;
});

const { data: discoverData, status: discoverStatus } = await useFetch(
  `/api/v3/find/${route.query.type}/${route.query.id}`
);
</script>
