<template>
  <div id="trailer" :class="waitforloadcursor"></div>
</template>
<style>
#trailer {
  height: 20px;
  width: 20px;
  background-color: white;
  border-radius: 20px;

  position: fixed;
  left: 50vw;
  top: 50vh;
  z-index: 10000;

  pointer-events: none;
  opacity: 0;
  transition: opacity 500ms ease;

  display: grid;
  place-items: center;
}
</style>

<script setup>
onMounted(() => {
  const trailer = document.getElementById("trailer");

  const animateTrailer = (e, interacting) => {
    const x = e.clientX - trailer.offsetWidth / 2,
      y = e.clientY - trailer.offsetHeight / 2;

    const keyframes = {
      transform: `scale(${interacting ? 2 : 1})`,
      left: `${x}px`,
      top: `${y}px`,
      opacity: `${interacting ? 0.3 : 1}`,
    };

    trailer.animate(keyframes, {
      duration: 200,
      fill: "forwards",
    });
  };

  window.onmousemove = (e) => {
    const interactable = e.target.closest(".interactable"),
      interacting = interactable !== null;

    animateTrailer(e, interacting);
  };
});
</script>
