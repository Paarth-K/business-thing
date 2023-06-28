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
      {{ normalText }}
      <span class="interactable" :data-text="text">{{ text }}</span>
    </h1>
  </div>
</template>

<style scoped>
h1 {
  color: white;
  font-size: 3rem;
  position: relative;
  margin: 0;
  padding: 0;
  width: 40vw;
  white-space: wrap;
}

span:hover {
  color: rgb(70, 138, 255);
}

span {
  color: rgb(135, 173, 239);
  font-size: 3rem;
  position: relative;
  margin: 0;
  padding: 0;
  width: 40vw;
  white-space: wrap;
  transition: 0.5s;
}
</style>
