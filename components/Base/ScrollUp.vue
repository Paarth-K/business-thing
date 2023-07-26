<script>
const btn = document.querySelector(".scroll-up.button");

const click = () => {
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
};

window.addEventListener("scroll", () => {
  if (window.scrollY > 800) {
    btn.classList.add("show");
  } else {
    btn.classList.remove("show");
  }
});
</script>

<template>
  <div @click="click" class="button scroll-up">
    <span class="pi pi-arrow-up"></span>
  </div>
</template>

<style scoped>
.button {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #fff;
  transition: all 0.5s;
  z-index: 3;
  position: fixed;
  bottom: 0;
  right: -7vw;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 16px;
}

.button.show {
  right: 0vw;
}

.button:hover {
  background-color: #cccccc;
}
</style>
