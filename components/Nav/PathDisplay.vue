<template>
  <div class="breadcrumb">
    <transition name="breadcrumb">
      <bread-crumb
        v-show="showBread"
        id="about"
        :home="home"
        :model="items"
        class="interactable"
      ></bread-crumb
    ></transition>
  </div>
</template>
<script setup>
const home = ref({
  icon: "pi pi-home",
  to: "/",
});
const route = useRoute();

const items = ref([]);
const showBread = ref(false);

onMounted(() => {
  updateRoute();
});
function updateRoute() {
  const currentRoute = route.fullPath.split("/").filter((e) => e !== "");
  items.value = [];
  currentRoute.forEach(function (item, index) {
    items.value.push({ label: item });
  });
}
watch(route, () => {
  updateRoute();
  setTimeout(() => {
    showBread.value = true;
  }, 300);
  if (showBread) {
    setTimeout(() => {
      showBread.value = false;
    }, 2300);
  }
});
</script>
<style>
.breadcrumb {
  position: fixed;
  transform: scale(0.7);
  opacity: 1;
  bottom: 3%;
  right: 0px;
}
.p-menuitem-text,
.p-menuitem-icon {
  color: white !important;
}
.p-menuitem-text:hover,
.p-menuitem-icon:hover {
  transform: scale(1.1);
}

.p-icon {
  color: lightgrey;
}

.p-breadcrumb {
  background-color: var(--primary-color-hover);
}
.breadcrumb-enter-active,
.breadcrumb-leave-active {
  transition: opacity 0.2s ease;
}

.breadcrumb-enter-from,
.breadcrumb-leave-to {
  opacity: 0;
}
</style>
