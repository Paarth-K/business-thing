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
  <button
    @click="onClick"
    :class="'button ' + (type ? type : '')"
    :disabled="disabled"
  >
    {{ title }}
  </button>
</template>

<style scoped>
.button {
  display: inline-block;
  padding: 14px;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  transition: all 0.25s;
}

.button {
  display: inline-block;
  padding: 14px;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  transition: all 0.25s;
}

.button.primary:hover {
  background-color: var(--primary-color-hover);
}

.button.primary {
  background-color: var(--primary-color);
  color: white;
}
</style>
