<script>
export default {
  props: {
    normalText: "",
    text: "Hello world",
    className: "",
  },
};
</script>

<template>
  <div>
    <h1>
      {{ normalText }}<br />
      <span class="interactable" :data-text="text">{{ text }}</span>
    </h1>
  </div>
</template>

<style scoped>
h1 {
  color: white;
  font-size: 5rem;
  position: relative;
  margin: 0;
  padding: 0;
  width: calc(100vw - 14px);
  white-space: wrap;
}

@keyframes change-color {
  0% {
    color: rgb(135, 173, 239);
  }

  50% {
    color: rgb(135, 239, 190);
  }

  100% {
    color: rgb(135, 173, 239);
  }
}

span {
  color: rgb(135, 173, 239);
  font-size: 5rem;
  position: relative;
  margin: 0;
  padding: 0;
  width: 40vw;
  white-space: wrap;
  transition: 1s;
  animation: change-color 10s infinite linear;
}
</style>
