<script setup>
import "/node_modules/primeflex/primeflex.css";
import "primeicons/primeicons.css";
import "./App.scss";
</script>

<template>
  <!-- div because we need a root level component (above nuxt page) otherwise nuxt messes routing up. -->
  <div>
    <NuxtPage></NuxtPage>
  </div>
</template>
