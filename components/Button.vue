<script>
export default {
  props: {
    title: "",
    disabled: false,
    onClick: () => {},
    type: "primary",
  },
};
</script>

<template>
  <p @click="onClick" class="button" :disabled="disabled">{{ title }}</p>
</template>

<style scoped>
.button {
  padding: 8px;
  background-color: rgb(64, 0, 255);
  color: white;
}
</style>
