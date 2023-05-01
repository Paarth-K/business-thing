<template>
  <div id="trailer"></div>
</template>
<style lang="scss">
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
.interactable {
  transition: all 0.5s;
}

.interactable:hover {
  transition: all 0.5s ease;
  transform: scale(1.1);
}
</style>

<script setup>
onMounted(() => {
  const trailer = document.getElementById("trailer");
  var pastThing = null;
  const animateTrailer = (e, interacting, thing = null) => {
    const x = e.clientX - trailer.offsetWidth / 2,
      y = e.clientY - trailer.offsetHeight / 2;

    const keyframes = {
      transform: `scale(${interacting ? 3 : 1})`,
      left: `${x}px`,
      top: `${y}px`,
      opacity: `${interacting ? 0 : 1}`,
    };
    trailer.animate(keyframes, {
      duration: 170,
      fill: "forwards",
    });
    // if (thing) {
    //   // pastThing = thing;
    //   if (!pastThing || pastThing !== thing) {
    //     console.log(pastThing, thing);
    //     const thingettinghoveredAnim = {
    //       transform: `translate(${
    //         interacting ? ("5px", "5px") : ("0px", "0px")
    //       })`,
    //     };
    //     thing.animate(thingettinghoveredAnim, {
    //       duration: 1000,
    //       fill: "forwards",
    //     });
    //   }
    // }
  };

  window.onmousemove = (e) => {
    const interactable = e.target.closest(".interactable"),
      interacting = interactable !== null;

    animateTrailer(e, interacting, interactable);
  };
});
</script>
