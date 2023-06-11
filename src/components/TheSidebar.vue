<template>
  <aside class="shadow p-4">
    <Form layout="vertical">
      <FormItem>
        <Pagination
          v-model:current="discover.page"
          @change="queryStore.setQueryHandler(`page`, discover.page), searchHandler()"
          simple
          :total="discoverStore.state.discover.total_pages"
        />
      </FormItem>
      <FormItem label="Type">
        <Switch
          v-model:checked="discoverType"
          checkedValue="movie"
          unCheckedValue="tv"
          checked-children="movie"
          un-checked-children="tv"
          @change="onTypeChange"
        />
      </FormItem>
      <FormItem label="Include adult">
        <Switch
          unchecked-children=""
          checked-children="+18"
          v-model:checked="discover.include_adult"
          @change="
            queryStore.setQueryHandler(`include_adult`, discover.include_adult), searchHandler()
          "
        />
      </FormItem>
      <FormItem label="Include video">
        <Switch
          unchecked-children=""
          checked-children="+18"
          v-model:checked="discover.include_video"
          @change="
            queryStore.setQueryHandler(`include_video`, discover.include_video), searchHandler()
          "
        />
      </FormItem>
      <FormItem label="Sort">
        <Select
          v-model:value="discover.sort"
          @change="queryStore.setQueryHandler(`sort`, discover.sort), searchHandler()"
        >
          <SelectOption value=""></SelectOption>
          <SelectOption value="popularity.asc">Popularity ascending</SelectOption>
          <SelectOption value="popularity.desc">Popularity descending</SelectOption>
          <SelectOption value="revenue.asc">Revenue ascending</SelectOption>
          <SelectOption value="revenue.desc">Revenue descending</SelectOption>
          <SelectOption value="primary_release_date.asc"
            >Primary release date ascending</SelectOption
          >
          <SelectOption value="primary_release_date.desc"
            >Primary release date descending</SelectOption
          >
          <SelectOption value="vote_average.asc">Vote average ascending</SelectOption>
          <SelectOption value="vote_average.desc">Vote average descending</SelectOption>
          <SelectOption value="vote_count.asc">Vote count ascending</SelectOption>
          <SelectOption value="vote_count.desc">Vote_count descending</SelectOption>
        </Select>
      </FormItem>
      <FormItem label="year">
        <InputNumber
          v-model:value="discover.year"
          @change="queryStore.setQueryHandler(`year`, discover.year), searchHandler()"
        />
      </FormItem>
      <FormItem>
        <Button type="primary" :loading="loading" @click="searchHandler">Search</Button>
      </FormItem>
    </Form>
  </aside>
</template>
<script setup lang="ts">
import { useConfigurationStore } from '@/stores/config'
import { useDiscoverStore } from '@/stores/discover'
import { useQueryStore } from '@/stores/query'
import {
  Form,
  FormItem,
  Pagination,
  Switch,
  Select,
  SelectOption,
  Button,
  InputNumber
} from 'ant-design-vue'
import { reactive, ref, onMounted } from 'vue'
import moment from 'moment'
const queryStore = useQueryStore()
const discoverStore = useDiscoverStore()

const configurationStore = useConfigurationStore()

onMounted(async () => {
  await configurationStore.getConfigurationHandler()
  await discoverStore.getDiscoverHandler({ type: 'movie', query: [] })
})

const loading = ref<boolean>(false)
const discoverType = ref('movie')

const onTypeChange = async () => {
  await discoverStore.getDiscoverHandler({ type: discoverType.value, query: [] })
}
const discover = reactive({
  include_adult: false,
  sort: '',
  include_video: false,
  page: 1,
  year: (val: moment.MomentInput) => moment(val, 'YYYY/MM/DD').unix()
})
const searchHandler = async () => {
  const query: any = []
  queryStore.state.query.map((item) => {
    query.push(`&${item.label}=${item.value}`)
  })
  await discoverStore.getDiscoverHandler({ type: discoverType.value, query: query })
}
// const x = "certification=sdff&certification.gte=sdf&certification.lte=dfsdf&certification_country=sdfsdf&include_adult=true&include_video=true&language=en-US&page=133&primary_release_year=34&primary_release_date.gte=2000-02-02&primary_release_date.lte=34&region=dsfs&release_date.gte=sdf&release_date.lte=sdfsf&sort_by=popularity.desc&vote_average.gte=3434&vote_average.lte=234234&vote_count.gte=234234&vote_count.lte=234234&watch_region=sfd&with_cast=sfd%2Csdf&with_companies=sdf%2Csdf&with_crew=sdf%7Csdf&with_genres=sdfs%7Csdfsdf&with_keywords=sdf%7Csdf&with_origin_country=fgdfg&with_original_language=dfgdfg&with_people=df%7Csdfsdf&with_release_type=2342&with_runtime.gte=324234&with_runtime.lte=234234&with_watch_monetization_types=sdf%7Csfddf&with_watch_providers=sf%2Csdfsdf&without_companies=sdfsdf&without_genres=sdfsdf&without_keywords=sdfsf&without_watch_providers=ssdf&year=23423423"
</script>
