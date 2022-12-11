<template>
  <Form layout="vertical" class="border border-gray-200 rounded p-4">
    <FormItem label="Language" class="item--row" >
      <Switch v-model:checked="queryStore.state.queries.category" size="small" />
    </FormItem>
    <FormItem label="+18" class="item--row">
      <Switch v-model:checked="queryStore.state.queries.include_adult" size="small" class="self-end" />
    </FormItem>

    <FormItem label="Language">
      <Select v-model:value="queryStore.state.queries.language" showSearch>
        <template v-for="item in configurationStore.state.configuration.languages">
          <SelectOption :value="item.iso_639_1">{{
              item.english_name
          }}</SelectOption>
        </template>
      </Select>
    </FormItem>

    <FormItem label="Region">
      <Select v-model:value="queryStore.state.queries.region" showSearch>
        <template v-for="item in configurationStore.state.configuration.languages">
          <SelectOption :value="item.name">{{
              item.english_name
          }}</SelectOption>
        </template>
      </Select>
    </FormItem>

    <FormItem label="certification_country">
      <Select v-model:value="queryStore.state.queries.certification_country">
        <SelectOption value="US">ccertification_country</SelectOption>
      </Select>
    </FormItem>

    <FormItem label="sort">
      <Select v-model:value="queryStore.state.queries.sort_by">
        <SelectOption value=""></SelectOption>
        <SelectOption value="popularity.asc">popularity.asc</SelectOption>
        <SelectOption value="popularity.desc">popularity.desc</SelectOption>
        <SelectOption value="release_date.asc">release_date.asc</SelectOption>
        <SelectOption value="release_date.desc">release_date.desc</SelectOption>
        <SelectOption value="revenue.asc">revenue.asc</SelectOption>
        <SelectOption value="revenue.desc">revenue.desc</SelectOption>
        <SelectOption value="primary_release_date.asc">primary_release_date.asc</SelectOption>
        <SelectOption value="primary_release_date.desc">primary_release_date.desc</SelectOption>
        <SelectOption value="original_title.asc">original_title.asc</SelectOption>
        <SelectOption value="original_title.desc">original_title.desc</SelectOption>
        <SelectOption value="vote_average.asc">vote_average.asc</SelectOption>
        <SelectOption value="vote_average.desc">vote_average.desc</SelectOption>
        <SelectOption value="vote_count.asc">vote_count.asc</SelectOption>
        <SelectOption value="vote_count.desc">vote_count.desc</SelectOption>
      </Select>
    </FormItem>

    <Button type="primary" block @click="submitQueryStrings"> Search </Button>
  </Form>
</template>
<script setup lang="ts">
import {
  Button,
  Form,
  FormItem,
  Switch,
  Select,
  SelectOption,
} from "ant-design-vue/es";
import { useQueryStore } from "@/stores/QueryStore";
import { useDiscoverStore } from "@/stores/DiscoverStore";
import { onMounted } from "vue";
import { useConfigurationStore } from "@/stores/ConfigurationStore";
import { useRouter } from "vue-router";

const queryStore = useQueryStore();
const discoverStore = useDiscoverStore();
// const callApi = async () => {
// await discoverStore.GetDiscoverMovieHandler(asideStore.state.category, 2)
// }

const router = useRouter();
const submitQueryStrings = () => {
  // queryStore.createQueryString();
  // discoverStore.GetDiscoverMovieHandler(true, queryStore.state.queryString);
  queryStore.createQueryString();

  // router.push({name: 'IndexPage', query: queryStore.state.queries })

  discoverStore.getDiscoverHandler("movie", "&" + queryStore.state.queryString);
};

const configurationStore = useConfigurationStore();

onMounted(() => {
  configurationStore.getConfigurationHandler();
  configurationStore.getCountriesHandler();
  configurationStore.getLanguagesHandler();
});
</script>

<style>
.item--row {
    display: grid !important;
    grid-template-columns: 1fr max-content;
    align-items: center;
}
.item .ant-form-item-label{
  flex-basis: 1;
}
</style>
