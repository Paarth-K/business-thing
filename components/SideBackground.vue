<script setup>
onMounted(() => {
  const card1 = document.querySelector(".card-1");
  const card2 = document.querySelector(".card-2");
  const card3 = document.querySelector(".card-3");

  document.addEventListener("mousemove", (e) => {
    rotateCard(e);
  });

  const rotateCard = (event) => {
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    const middleY1 =
      (card1.getBoundingClientRect().top +
        card1.getBoundingClientRect().bottom) /
      2;
    const middleX1 =
      (card1.getBoundingClientRect().left +
        card1.getBoundingClientRect().right) /
      2;
    const middleY2 =
      (card2.getBoundingClientRect().top +
        card2.getBoundingClientRect().bottom) /
      2;
    const middleX2 =
      (card2.getBoundingClientRect().left +
        card2.getBoundingClientRect().right) /
      2;
    const middleY3 =
      (card3.getBoundingClientRect().top +
        card3.getBoundingClientRect().bottom) /
      2;
    const middleX3 =
      (card3.getBoundingClientRect().left +
        card3.getBoundingClientRect().right) /
      2;

    const offsetX1 = ((mouseX - middleX1) / middleX1) * 30;
    const offsetY1 = ((mouseY - middleY1) / middleY1) * 10;
    const offsetX2 = ((mouseX - middleX2) / middleX2) * 30;
    const offsetY2 = ((mouseY - middleY2) / middleY2) * 30;
    const offsetX3 = ((mouseX - middleX3) / middleX3) * 30;
    const offsetY3 = ((mouseY - middleY3) / middleY3) * 30;

    card1.style.setProperty("--rotateX", -1 * offsetY1 + "deg");
    card1.style.setProperty("--rotateY", offsetX1 + "deg");
    card2.style.setProperty("--rotateX", -1 * offsetY2 + "deg");
    card2.style.setProperty("--rotateY", offsetX2 + "deg");
    card3.style.setProperty("--rotateX", -1 * offsetY3 + "deg");
    card3.style.setProperty("--rotateY", offsetX3 + "deg");
  };
});
</script>

<template>
  <div class="wrapper">
    <div class="cards">
      <div class="card card-1"></div>
      <div class="card card-2"></div>
      <div class="card card-3"></div>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  height: 100vh;
  width: 30vw;
}

.card {
  background-color: #ece3e3;
  width: 22vw;
  height: 35vh;
  border-radius: 8px;
  position: absolute;
  transform-style: preserve-3d;
  border: 1px dashed #717171;
  transform: perspective(5000px) rotateY(var(--rotateY)) rotateX(var(--rotateX));
  transition: all 0.5s;
  box-shadow: 4px 4px #676767;
}

.card:hover {
  background-color: #cfcfcf;
}

.card-1 {
  top: 5%;
  right: 27%;
}
.card-2 {
  top: 30%;
  right: 2%;
}
.card-3 {
  top: 60%;
  right: 27%;
}
</style>
