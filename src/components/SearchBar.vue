<template>
  <form class="search-bar">
    <div class="">
      <label class="mr-5">Search by release date:</label>
      <input type="text" class="px-3 py-1 outline-none" />
    </div>
    <button
      class="
        bg-blue-500
        focus:bg-blue-700
        hover:bg-blue-300
        px-5
        py-2
        rounded-full
        text-white
      "
    >
      Search
    </button>
  </form>
</template>
<script lang="ts" setup></script>
<style>
.search-bar {
  @apply bg-[#E2E2E2] px-16 py-10 rounded shadow drop-shadow flex justify-between;
}
</style>
