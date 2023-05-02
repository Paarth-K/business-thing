<template>
  <div class="container">
    <div id="site-logo">Logo</div>
    <nav-link
      class="nav-links interactable"
      v-for="data in navLinkData"
      :to="data.to"
      :key="data"
      >{{ data.display }}</nav-link
    >
  </div>
</template>
<script>
export default {
  data() {
    return {
      navLinkData: [
        {
          to: "#about",
          display: "About",
        },
        {
          to: "#",
          display: "Pricing",
        },
      ],
    };
  },
};
</script>
<style scoped>
.container {
  position: fixed;
  background-color: rgba(0, 0, 0, 0);
  width: 100vw;
  height: auto;
  text-align: right;
  padding: 7px;
}
#site-logo {
  padding: 10px;
  float: left;
  color: white;
  text-align: center;
  font-size: 25px;
}
</style>
