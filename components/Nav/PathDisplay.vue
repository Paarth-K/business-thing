<template>
  <div class="breadcrumb">
    <transition name="breadcrumb">
      <bread-crumb
        v-show="showBread"
        id="about"
        :home="home"
        :model="items"
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
  const currentRoute = route.fullPath.split("/");
  if (currentRoute[0] == "") {
    currentRoute.shift();
  }
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
  setTimeout(() => {
    showBread.value = false;
  }, 2300);
});
</script>
<style>
.breadcrumb {
  position: absolute;
  left: 20%;
  top: 50%;
  transform: scale(0.7);
  opacity: 1;
}
.p-menuitem-text,
.p-menuitem-icon {
  color: white !important;
}
.p-icon {
  color: lightgrey;
}

.p-breadcrumb {
  background-color: rgba(0, 0, 0, 0);
}
.breadcrumb-enter-active,
.breadcrumb-leave-active {
  transition: opacity 0.5s ease;
}

.breadcrumb-enter-from,
.breadcrumb-leave-to {
  opacity: 0;
}
</style>
