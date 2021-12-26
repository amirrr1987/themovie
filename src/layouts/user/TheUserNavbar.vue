<template>
  <nav class="the-navbar">
    <div class="container mx-auto px-5">
      <nav>
        <ul class="flex">
          <li><router-link class="mr-3" to="/">Home</router-link></li>
          <li><router-link class="mr-3" to="/about">About</router-link></li>
          <li><router-link class="mr-3" to="/contact">Contact</router-link></li>
        </ul>
      </nav>
    </div>
  </nav>
</template>
<script lang="ts" setup></script>

<style>
.the-navbar {
  @apply bg-[#11B980] text-white py-5;
}
</style>
