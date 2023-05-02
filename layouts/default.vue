<template>
  <div>
    <nav-bar></nav-bar>
    <div class="page-wrapper">
      <slot />
    </div>
    <client-only> <cursor-trailer></cursor-trailer></client-only>
    <client-only><nav-path-display></nav-path-display></client-only>
  </div>
</template>
<style scoped>
.page-wrapper {
  padding: 0;
  margin: 0;
  width: 100vw;
  height: 100vh;
  background-color: #0e031d;
  display: flex;
  align-items: center;
}
</style>
