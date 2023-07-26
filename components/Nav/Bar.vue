<template>
  <div class="container">
    <div id="site-logo">Website</div>
    <div class="links">
      <nav-link class="nav-link" to="#about" text="About"></nav-link>
      <nav-link class="nav-link" to="/pricing" text="Pricing"></nav-link>
    </div>
  </div>
</template>

<script></script>

<style scoped>
.container {
  background-color: #0e031d;
  width: calc(100vw - 14px);
  height: 8vh;
  padding: 7px;
  z-index: 2;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.links {
  list-style-type: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: 2vw;
}

#site-logo {
  padding: 10px;
  float: left;
  color: white;
  text-align: center;
  font-size: 25px;
}

.nav-link {
  padding: 12px;
  margin-right: 1vw;
  color: white;
  text-decoration: none;
  position: relative;
}

.nav-link::after {
  content: "";
  position: absolute;
  width: 100%;
  transform: scaleX(0);
  height: 2px;
  bottom: 2vh;
  left: 0;
  background-color: #ffffff;
  transform-origin: bottom right;
  transition: all 0.25s;
}

.nav-link:hover::after {
  transform: scaleX(1);
}
</style>
