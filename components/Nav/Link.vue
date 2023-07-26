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
.nav-link-container {
  display: inline-flex;
  height: 100%;
  list-style-type: none;
  text-align: center;
  margin-left: 17px;
  border-radius: 30px;
  border: 1px dashed;
}
.nav-link-container:hover {
  border: 1px lightcoral dashed;
}

button {
  /* filter: invert(); */
  display: inline-block;
  padding: 14px;
  border-radius: 12px;

  border: none;
  text-transform: uppercase;
  transition: all 0.25s;
}

button:hover {
  filter: invert();
}
</style>
