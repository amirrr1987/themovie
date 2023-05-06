<template>
  <Form
    layout="vertical"
    class="border border-gray-200 rounded p-4 overflow-y-scroll h-screen"
  >
    <FormItem label="include adult">
      <Switch
        v-model:checked="queryStore.state.query.include_adult"
        size="small"
      />
    </FormItem>

    <FormItem label="include video">
      <Switch
        v-model:checked="queryStore.state.query.include_video"
        size="small"
      />
    </FormItem>

    <FormItem label="language">
      <Input v-model:value="queryStore.state.query.language" size="small" />
    </FormItem>
    <FormItem label="page">
      <InputNumber
        v-model:value="queryStore.state.query.page"
        :min="1"
        size="small"
      />
    </FormItem>

    <FormItem label="primary release year">
      <Input
        v-model:value="queryStore.state.query.primary_release_year"
        size="small"
      />
    </FormItem>

    <FormItem label="region">
      <Input v-model:value="queryStore.state.query.region" size="small" />
    </FormItem>

    <FormItem label="sort by">
      <Input v-model:value="queryStore.state.query.sort_by" size="small" />
    </FormItem>

    <FormItem label="watch region">
      <Input v-model:value="queryStore.state.query.watch_region" size="small" />
    </FormItem>

    <FormItem label="with cast">
      <Input v-model:value="queryStore.state.query.with_cast" size="small" />
    </FormItem>

    <FormItem label="with_companies">
      <Input
        v-model:value="queryStore.state.query.with_companies"
        size="small"
      />
    </FormItem>

    <FormItem label="with_crew">
      <Input v-model:value="queryStore.state.query.with_crew" size="small" />
    </FormItem>

    <FormItem label="with_genres">
      <Input v-model:value="queryStore.state.query.with_genres" size="small" />
    </FormItem>

    <FormItem label="with_keywords">
      <Input
        v-model:value="queryStore.state.query.with_keywords"
        size="small"
      />
    </FormItem>

    <FormItem label="with_original_language">
      <Input
        v-model:value="queryStore.state.query.with_original_language"
        size="small"
      />
    </FormItem>

    <FormItem label="with_people">
      <Input v-model:value="queryStore.state.query.with_people" size="small" />
    </FormItem>

    <FormItem label="with_release_type">
      <Input
        v-model:value="queryStore.state.query.with_release_type"
        size="small"
      />
    </FormItem>

    <FormItem label="with_watch_monetization_types">
      <Switch
        v-model:checked="queryStore.state.query.with_watch_monetization_types"
        size="small"
      />
    </FormItem>

    <FormItem label="with_watch_providers">
      <Input
        v-model:value="queryStore.state.query.with_watch_providers"
        size="small"
      />
    </FormItem>

    <FormItem label="with_watch_providers">
      <Input
        v-model:value="queryStore.state.query.with_watch_providers"
        size="small"
      />
    </FormItem>

    <FormItem label="without_companies">
      <Input
        v-model:value="queryStore.state.query.without_companies"
        size="small"
      />
    </FormItem>

    <FormItem label="without_genres">
      <Input
        v-model:value="queryStore.state.query.without_genres"
        size="small"
      />
    </FormItem>

    <FormItem label="without_keywords">
      <Input
        v-model:value="queryStore.state.query.without_keywords"
        size="small"
      />
    </FormItem>

    <FormItem label="year">
      <InputNumber
        v-model:value="queryStore.state.query.year"
        :min="1"
        size="small"
      />
    </FormItem>

    <Button type="primary" block @click="submitQueryStrings"> Search </Button>
  </Form>
</template>
<script setup lang="ts">
import { useConfigurationStore } from "@/stores/configuration";
import { useQueryStore } from "@/stores/query";
import {
  Button,
  Form,
  FormItem,
  Switch,
  Select,
  SelectOption,
  InputNumber,
  Input,
} from "ant-design-vue/es";
import { onMounted, reactive } from "vue";
import { useDiscoverStore } from "@/stores/discover";

// import { onMounted, reactive } from "vue";
// import { useConfigurationStore } from "@/stores/configuration";
// import { useRouter } from "vue-router";

// const query = reactive<string[]>([]);

// const router = useRouter();

const discoverStore = useDiscoverStore();
const queries = reactive<string[]>([]);

const addToQueries = (event: any, value: string) => {
  queries.push(`&${value}${event}`);
  console.log(queries);
};
const submitQueryStrings = () => {
  discoverStore.getDiscoverHandler({ type: "movie", query: queries });
};

const configurationStore = useConfigurationStore();
const queryStore = useQueryStore();
onMounted(async () => {
  await configurationStore.getConfigurationHandler();
  await configurationStore.getCountriesHandler();
  await configurationStore.getLanguagesHandler();
});
</script>

<style>
.item--row {
  display: grid !important;
  grid-template-columns: 1fr max-content;
  align-items: center;
}
.item .ant-form-item-label {
  flex-basis: 1;
}
</style>
