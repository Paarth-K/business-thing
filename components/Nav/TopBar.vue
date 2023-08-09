<template>
  <div class="container">
    <div id="site-logo">Website</div>
    <div class="links">
      <nav-link class="nav-link" to="/about" text="About"></nav-link>
      <nav-link class="nav-link" to="/pricing" text="Pricing"></nav-link>
      <nav-link class="nav-link" to="/pricing" text="Our Team"></nav-link>
      <nav-link class="nav-link" to="/contact" text="Contact"></nav-link>
    </div>
    <span className="icon pi pi-bars" @click="openSidebar"></span>
  </div>
</template>

<script>  

export default {
  name: 'Header',
  methods: {
    openSidebar() {
      this.$emit('open-sidebar');
    }
  }
}
</script>

<style scoped>
.container .icon {
  display: none;
  padding: 12px;
  border-radius: 50%;
  transition: all 0.25s;
  margin-right: 16px;
  cursor: pointer;
}
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

@media (max-width: 800px) {
  .container .icon {
    display: block;
    color: #fff;
  }

  .links {
    display: none;
  }

  .container .icon:hover {
    background-color: gray;
  }
}
</style>
