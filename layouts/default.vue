lea<template>
  <div>
    <nav-top-bar @open-sidebar="openSidebar"></nav-top-bar>
    <nav-side-bar @close-sidebar="closeSidebar" :open="open"></nav-side-bar>
    <div @click="closeSidebar" :class="[open ? 'blur' : '', 'page-wrapper']">
      <slot />
      <base-ScrollUp></base-ScrollUp>
    </div>
    <client-only> <cursor-trailer></cursor-trailer></client-only>
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      open: false,
    }
  },
  methods: {
    openSidebar() {
      this.open = true;
      console.log(this.open);
    },
    closeSidebar() {
      this.open = false;
      console.log(this.open);
    },
  }
}
</script>

<style scoped>
.page-wrapper {
  padding: 0;
  margin: 0;
  width: calc(100vw - 14px);
  min-height: 100vh;
  background-color: #0e031d;
  display: flex;
  align-items: center;
  overflow-x: hidden;
}
.blur {
  filter: blur(5px);
}
</style>
