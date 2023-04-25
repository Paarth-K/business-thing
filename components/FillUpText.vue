<script>
export default {
  props: {
    text: "Hello world",
  },
};
</script>

<template>
  <h1 :data-text="text">{{ text }}</h1>
</template>

<style scoped>
h1 {
  color: orange;
  font-size: 3rem;
  position: absolute;
  margin: 0;
  padding: 0;
}

h1::before {
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0;
  color: black;
  overflow: hidden;
  height: 100%;
  transition: all 0.5s;
}

h1:hover::before {
  height: 0%;
}
</style>
