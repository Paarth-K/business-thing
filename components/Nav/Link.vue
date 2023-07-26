<template>
  <nuxt-link :href="to"
    ><p class="link">{{ text }}</p>
  </nuxt-link>
</template>

<script>
export default {
  props: ["to", "text"],
};
</script>

<style scoped>
button {
  /* filter: invert(); */
  display: inline-block;
  padding: 14px;
  border-radius: 12px;

  border: none;
  text-transform: uppercase;
  transition: all 0.25s;
}
</style>
