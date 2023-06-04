<template>
  <main class="grid lg:grid-cols-12 gap-4 h-screen lg:grid-rows-[max-content_1fr]">
    <nav class="col-span-12 h-10 bg-red">sdf</nav>
    <TheSidebar class="col-span-2" />
    <section class="col-span-10 p-4 grid grid-cols-5 gap-4">
      <Card hoverable v-for="(item, index) in discoverStore.state.discover.results" :key="index">
        <template #cover>
          <img
            alt="example"
            :src="configurationStore.getImageUrl(item.poster_path)"
          />
        </template>
        <template #actions>
          <IconStar class="w-5 h-5" />
          <IconStar class="w-5 h-5" />
          <RouterLink :to="{name: 'single', params: {id: item.id}}">
            <Button type="link" >More</Button>
          </RouterLink>
        </template>
        <CardMeta :title="item.title" :description="truncate(item.overview, { length: 90 })">
          <template #avatar> </template>
        </CardMeta>
      </Card>
    </section>
  </main>
</template>
<script setup lang="ts">
  import TheSidebar from '@/components/TheSidebar.vue'
  import IconStar from '@/components/IconStar.vue'
  import { Card, CardMeta,Button } from 'ant-design-vue'
  import { useDiscoverStore } from '@/stores/discover'
  import { useConfigurationStore } from '@/stores/configuration'
  import { onMounted } from 'vue'
  import { truncate } from 'lodash-es'
  const discoverStore = useDiscoverStore()
  const configurationStore = useConfigurationStore()
onMounted(async () => {
    await configurationStore.getConfigurationHandler()
    await discoverStore.getDiscoverHandler({ type: 'movie', query: [] })
  })
</script>
