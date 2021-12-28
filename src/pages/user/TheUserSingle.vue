<template>
  <div class="the-user-single py-5">
    <transition name="bounce">
      <div class="container mx-auto px-5" v-if="movieTransition">
        <div class="back-bar bg-[#E2E2E2] rounded">
          <button
            class="
              bg-[#549DF2]
              capitalize
              self-center
              px-10
              py-2
              rounded-full
              text-white
              mr-10
            "
            @click="goBackHome"
          >
            back
          </button>
          <div class="flex flex-col">
            <strong class="">{{ movieItem.title }}</strong>
            <span>{{ movieItem.tagline }}</span>
          </div>
        </div>
        <div class="py-5">
          <div class="grid grid-cols-[max-content,1fr] gap-x-10 mb-5">
            <img
              class="max-w-full rounded"
              :src="`https://image.tmdb.org/t/p/w400${movieItem.poster_path}`"
              alt=""
            />
            <div class="">
              <div class="flex justify-between mb-2">
                <span>Budget</span>
                <span>{{ movieItem.budget }}</span>
              </div>
              <div class="flex justify-between mb-2">
                <span>Revenue</span>
                <span>${{ movieItem.revenue }}</span>
              </div>
              <div class="flex justify-between mb-2">
                <span>Release Date</span>
                <span>{{ movieItem.release_date }}</span>
              </div>
              <div class="flex justify-between mb-2">
                <span>Runtime</span>
                <span>{{ runtime }}</span>
              </div>
              <div class="flex justify-between mb-2">
                <span>Score</span>
                <span
                  >{{ movieItem.vote_average }} ({{
                    movieItem.vote_count
                  }}
                  votes)</span
                >
              </div>
              <div class="flex justify-between mb-2">
                <span>Genres</span>
                <div>
                  <template v-for="item in movieItem.genres" :key="item">
                    <span class="mr-1">{{ item.name }},</span>
                  </template>
                </div>
              </div>
              <div class="flex justify-between mb-2">
                <span>IMDB Link</span>
                <a href="#">Link</a>
              </div>
              <div class="flex justify-between mb-2">
                <span>Homepage Link</span>
                <a :href="movieItem.homepage" target="_blank">Link</a>
              </div>
            </div>
          </div>
          <p class="mb-5">
            {{ movieItem.overview }}
          </p>
          <strong class="mb-2 block">Credit:</strong>
          <p>
            Zoe Saldanna , Vin Diesel , Chris Pratt , Bradley Cooper , Lee Pace
            , Zoe Saldanna , Vin Diesel , Chris Pratt , Bradley Cooper , Lee
            Pace and 19 more.
          </p>
        </div>
      </div>
    </transition>
  </div>
</template>
<script lang="ts" setup>
import { computed, onMounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { GetMovieDetails } from "../../services/api";

const route = useRoute();
const router = useRouter();
const movieId = ref("");

movieId.value = `${route.params.id}`;
const movieItem = ref();
const movieTransition = ref(false)
onMounted(async () => {
  try {
    let { data } = await GetMovieDetails(movieId.value);
    console.log(data);
    movieItem.value = data;
    console.log(typeof movieItem.value);
    movieTransition.value = !movieTransition.value
  } catch (error) {
    console.log(error);
  }
});
const runtime = computed(() => {
  let h = Math.floor(movieItem.value.runtime / 60);
  let m = movieItem.value.runtime % 60;

  return `${h}h ${m}m`;
});

const goBackHome = ()=>{
  router.go(-1)
}
</script>
<style>
.back-bar {
  @apply bg-[#E2E2E2] px-16 py-8 rounded shadow drop-shadow md:flex;
}

.bounce-enter-active {
  animation: bounce-in .9s;
}
.bounce-leave-active {
  animation: bounce-in .9s reverse;
}
@keyframes bounce-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

</style>
