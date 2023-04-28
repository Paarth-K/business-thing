<script>
export default {
  props: {
    title: "",
    disabled: false,
    onClick: () => {},
    color: "primary",
    id: "",
  },
};
</script>

<!-- The four button colors are: -->
<!-- Primary -->
<!-- ! Danger -->
<!-- ? Info -->
<!-- * Success -->

<template>
  <button
    @click="onClick"
    class="button"
    :class="color ? color : ''"
    :disabled="disabled"
    :id="id"
  >
    {{ title }}
  </button>
</template>

<style scoped>
.button {
  display: inline-block;
  padding: 14px;
  border-radius: 24px;
  border: none;
  text-transform: uppercase;
  transition: all 0.25s;
}

.button.primary {
  border: 1px solid white;
  color: white;
}

.button.primary:hover {
  background-color: #fff;
  color: #000;
}

.button.danger {
  background-color: var(--danger-color);
  color: white;
}

.button.danger:hover {
  background-color: var(--danger-color-hover);
}

.button.info {
  background-color: var(--info-color);
  color: white;
}

.button.info:hover {
  background-color: var(--info-color-hover);
}

.button.success {
  background-color: var(--success-color);
  color: white;
}

.button.success:hover {
  background-color: var(--success-color-hover);
}
</style>
