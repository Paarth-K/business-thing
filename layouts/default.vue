<template>
  <div>
    <nav-bar></nav-bar>
    <div class="page-wrapper">
      <slot />
      <base-ScrollUp></base-ScrollUp>
    </div>
    <client-only> <cursor-trailer></cursor-trailer></client-only>
  </div>
</template>
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
</style>
