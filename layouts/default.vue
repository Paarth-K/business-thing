<template>
  <div>
    <nav-bar></nav-bar>
    <div class="page-wrapper">
      <slot />
    </div>
    <client-only> <cursor-trailer></cursor-trailer></client-only>
  </div>
</template>
<style scoped>
.page-wrapper {
  padding: 0;
  margin: 0;
  width: 100vw;
  min-height: 100vh;
  background-color: #0e031d;
  display: flex;
  align-items: center;
  overflow-x: hidden;
}
</style>
