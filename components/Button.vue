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

<!-- The four button types are: -->
<!-- Primary -->
<!-- ! Danger -->
<!-- ? Info -->
<!-- * Success -->

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
  margin: 8px;
  border: none;
  cursor: pointer;
  transition: all 0.25s;
}

.button.primary {
  background-color: var(--primary-color);
  color: white;
}

.button.primary:hover {
  background-color: var(--primary-color-hover);
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

.button.primary:hover {
  background-color: var(--primary-color-hover);
}
</style>
