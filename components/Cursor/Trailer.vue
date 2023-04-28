<template>
  <div id="trailer"></div>
</template>
<style lang="css">
#trailer {
  height: 20px;
  width: 20px;
  background-color: white;
  border-radius: 20px;

  position: fixed;
  left: 0px;
  top: 0px;
  z-index: 10000;

  pointer-events: none;
  opacity: 1;
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
      transform: `translate(${x}px, ${y}px) scale(${interacting ? 2 : 1})`,
      opacity: `${interacting ? 0.3 : 1}`,
    };

    trailer.animate(keyframes, {
      duration: 800,
      fill: "forwards",
    });
  };

  const getTrailerClass = (type) => {
    switch (type) {
      case "video":
        return "fa-solid fa-play";
      default:
        return "fa-solid fa-arrow-up-right";
    }
  };

  window.onmousemove = (e) => {
    const interactable = e.target.closest(".interactable"),
      interacting = interactable !== null;

    animateTrailer(e, interacting);
  };
});
</script>
