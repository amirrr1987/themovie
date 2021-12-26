<template>
  <form class="search-bar">
    <div class="">
      <label class="hidden md:inline mr-5">Search by release date:</label>
      <input
        type="text"
        class="
          w-full
          md:w-max
          mb-5
          md:mb-0
          px-3
          py-2
          md:py-1
          rounded
          outline-none
        "
      />
    </div>
    <button
      class="
        bg-blue-500
        focus:bg-blue-700
        hover:bg-blue-300
        md:px-10
        py-2
        w-full
        md:w-max
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
  @apply bg-[#E2E2E2] px-16 py-10 rounded shadow drop-shadow md:flex md:justify-between;
}
</style>
