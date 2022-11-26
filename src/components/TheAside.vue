<template>
    <div class="border border-gray-200 rounded p-1">
        <div class="flex justify-between">
            Type
            <div class="flex items-center gap-x-1">
                Tv
                <Switch v-model:checked="asideStore.state.category" size="small" @change="callApi" />
                Movie
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { Switch } from "ant-design-vue/es";
import { useAsideStore } from "@/stores/AsideStore";
import { useDiscoverStore } from "@/stores/DiscoverStore";

const asideStore = useAsideStore()
const discoverStore = useDiscoverStore()
const callApi = async () => {
    await discoverStore.GetDiscoverMovieHandler(asideStore.state.category, 2)
}
</script>

<style lang="less">

</style>