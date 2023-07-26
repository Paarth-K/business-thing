<script setup>
window.addEventListener(
  "scroll",
  () => {
    if (window.scrollY > 400) {
      document.querySelector(".card").classList.add("show");
      document.querySelector(".card-2").classList.add("show");
      document.querySelector(".wrapper").classList.add("show");
    } else {
      document.querySelector(".card").classList.remove("show");
      document.querySelector(".card-2").classList.remove("show");
      document.querySelector(".wrapper").classList.remove("show");
    }
  },
  false
);
</script>

<template>
  <div class="wrapper">
    <div class="card">
      <div class="title-container">
        <p class="title">Affordable</p>
        <span class="icon pi pi-money-bill"></span>
      </div>
      <div class="content-container">
        <p class="content">We make amazing websites for affordable pricing</p>
        <base-Button
          title="OUR PRICING"
          color="primary"
          disabled="false"
        ></base-Button>
      </div>
    </div>
    <div class="card card-2">
      <div class="title-container">
        <p class="title">Easy</p>
        <span class="icon pi pi-bolt"></span>
      </div>
      <div class="content-container">
        <p class="content">Just tell us what to do. We'll handle the rest.</p>
        <base-Button
          title="OUR PRICING"
          color="primary"
          disabled="false"
        ></base-Button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  height: 100%;
  width: 120vw;
  margin-left: -10vw;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  transition: all 1s;
}

.wrapper.show {
  width: calc(100vw - 14px);
  margin-left: 0vw;
}

.card {
  width: 50vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  border: 3px solid;
  border-image-slice: 1;
  border-image-source: linear-gradient(rgb(135, 173, 239), rgb(154, 135, 239));
  opacity: 0;
  background-color: #161824;
  transition: all 1s;
}

.card.show {
  opacity: 1;
}

.card .title-container {
  display: flex;
  width: 100%;
  justify-content: space-between;
  height: 10%;
}

.card .title {
  color: white;
  font-weight: bold;
  padding-left: 16px;
  transition: all 0.5s;
  transition-delay: 0.25s;
  font-size: 1.2rem;
}

.card .icon {
  color: white;
  padding: 16px;
  font-weight: bold;
}

.card .content-container {
  margin-top: 20vh;
}

.card .content {
  color: rgb(135, 173, 239);
  padding-left: 16px;
  transition: all 0.5s;
  transition-delay: 0.25s;
  text-align: left;
  font-size: 3em;
  display: flex;
  align-items: center;
  width: 100%;
}

.card .button {
  width: 30%;
  text-align: center;
  margin-left: 16px;
}

.card-2 {
  width: 50vw;
  height: 100vh;
  background: linear-gradient(rgb(135, 173, 239), rgb(154, 135, 239));
}

.card-2 .content {
  color: #fff;
}
</style>
