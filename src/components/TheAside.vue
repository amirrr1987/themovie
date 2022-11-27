<template>
    <div class="border border-gray-200 rounded p-1">
        <div class="flex justify-between">
            Type
            <div class="flex items-center gap-x-1">
                Tv
                <!-- <Switch v-model:checked="asideStore.state.category" size="small" @change="callApi" /> -->
                Movie
            </div>
        </div>
        <div class=""><Select v-model:value="queryStore.state.queries.language">
                <SelectOption value="en-US">en-US</SelectOption>
            </Select>
            <Select v-model:value="queryStore.state.queries.region">
                <SelectOption value="US">region</SelectOption>
            </Select>

            <Select v-model:value="queryStore.state.queries.certification_country">
                <SelectOption value="US">ccertification_country</SelectOption>
            </Select>

            <Button type="primary" @click="submitQueryStrings">
                Search
            </Button>
        </div>
    </div>
</template>
<script setup lang="ts">
import { Switch, Select, SelectOption } from "ant-design-vue/es";
import { useQueryStore } from "@/stores/QueryStore";
import { useDiscoverStore } from "@/stores/DiscoverStore";

const queryStore = useQueryStore()
const discoverStore = useDiscoverStore()
// const callApi = async () => {
// await discoverStore.GetDiscoverMovieHandler(asideStore.state.category, 2)
// }



const submitQueryStrings = () => {
    queryStore.createQueryString()
    discoverStore.GetDiscoverMovieHandler(true, queryStore.state.queryString)
}
</script>

<style lang="less">

</style>