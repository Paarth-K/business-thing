<script setup>
// moved imports to nuxt.config.ts
</script>

<template>
  <NuxtLayout>
    <NuxtPage></NuxtPage>
  </NuxtLayout>
  <client-only> <cursor-trailer></cursor-trailer></client-only>
  <client-only><nav-path-display></nav-path-display></client-only>
</template>

<style>
body {
  overflow-x: hidden;
}
</style>
