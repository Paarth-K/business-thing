<script setup>
</script>

<template>
    <div :class="[open ? '' : 'hidden', 'sidebar']">
        <div class="sidebar-header">
          <p class="logo">Our Website</p>
          <span
            class="icon pi pi-times"
            @click="closeSidebar(false)"
          ></span>
        </div>
        <div class="links">
          <nuxt-link href="/about" text="About" class="nav-link"><p>About</p></nuxt-link>
          <nuxt-link href="/pricing" text="Pricing" class="nav-link"><p>Pricing</p></nuxt-link>
          <nuxt-link href="/pricing" text="Our Team" class="nav-link"><p>Our Team</p></nuxt-link>
          <nuxt-link href="/contact" text="Contact" class="nav-link"><p>Contact</p></nuxt-link>
        </div>
      </div>
</template>

<script>
    export default {
        props: [
            'open'
        ],
        methods: {
            closeSidebar(val) {
                this.$emit('close-sidebar');
            }
        }
    }
</script>

<style scoped>
.hidden {
  left: -75vw !important;
  transition: all 0.3s;
}

.sidebar.hidden > * {
  display: none;
}

.sidebar {
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    height: 100vh;
    width: 70vw;
    background-color: #fffefe;
    z-index: 10;
    border-right: 1px solid #000;
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5);
    transition: all 0.3s;
}

.sidebar .sidebar-header {
    margin: 0;
    height: 7%;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 12px;
}

.sidebar .sidebar-header .logo {
    font-weight: bold;
    font-size: 1.4rem;
}

.sidebar .sidebar-header .icon {
    padding: 12px;
    border-radius: 50%;
    transition: all 0.25s;
}

.sidebar .sidebar-header .icon:hover {
    background-color: #f3f3f3;
}

.sidebar .links {
    display: flex;
    flex-direction: column;
    list-style-type: none;
    align-items:flex-start;
    padding-left: 30px;
}

.sidebar .links .nav-link {
    padding: 12px;
    width: 100%;
    transition: all 0.25s;
    margin-right: 1vw;
    color: black;
    text-decoration: none;
    position: relative;
}

.sidebar .links .nav-link:hover {
    background-color: gray;
}

.overlay {
  transition: all 0.25s;
  width: 100vw;
  height: 100vh;
}
</style>