<template>

    <Form layout="vertical" class="border border-gray-200 rounded p-4">
      <FormItem label="Language" class="">
        <Switch
          v-model:checked="queryStore.state.queries.category"
          size="small"
        />
      </FormItem>

      <FormItem label="Language">
        <Select v-model:value="queryStore.state.queries.language">
          <SelectOption value="en-US">en-US</SelectOption>
        </Select>
      </FormItem>

      <FormItem label="Language">
        <Select v-model:value="queryStore.state.queries.region">
          <SelectOption value="US">region</SelectOption>
        </Select>
      </FormItem>

      <FormItem label="Language">
        <Select v-model:value="queryStore.state.queries.certification_country">
          <SelectOption value="US">ccertification_country</SelectOption>
        </Select>
      </FormItem>

      <Button type="primary" @click="submitQueryStrings"> Search </Button>
    </Form>

</template>
<script setup lang="ts">
import {
  Form,
  FormItem,
  Switch,
  Select,
  SelectOption,
} from "ant-design-vue/es";
import { useQueryStore } from "@/stores/QueryStore";
import { useDiscoverStore } from "@/stores/DiscoverStore";

const queryStore = useQueryStore();
const discoverStore = useDiscoverStore();
// const callApi = async () => {
// await discoverStore.GetDiscoverMovieHandler(asideStore.state.category, 2)
// }

const submitQueryStrings = () => {
  queryStore.createQueryString();
  discoverStore.GetDiscoverMovieHandler(true, queryStore.state.queryString);
};
</script>

<style lang="less"></style>
