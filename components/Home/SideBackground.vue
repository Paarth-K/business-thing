<script setup></script>

<template>
  <div class="wrapper">
    <div class="card">
      <div class="title-container">
        <p class="title">What we do</p>
        <span class="icon">?</span>
      </div>
      <p class="content">We make custom websites for our clients.</p>
      <base-Button
        id="mt"
        title="check it out"
        color="primary"
        disabled="false"
      ></base-Button>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  height: 100vh;
  width: 30vw;
}

.card {
  width: 30vw;
  height: 20vh;
  border: 3px solid;
  border-image-slice: 1;
  border-image-source: linear-gradient(rgb(135, 173, 239), rgb(154, 135, 239));
  border-radius: 16px;
  position: absolute;
  right: 10%;
  top: 10%;
  transition: all 0.5s;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.card::after {
  content: "";
  width: 100%;
  height: 0;
  position: absolute;
  left: 0;
  top: 0;
  background: linear-gradient(rgb(135, 173, 239), rgb(154, 135, 239));
  transition: all 0.5s;
}

.card:hover::after {
  height: 100%;
}

.card .title-container {
  display: flex;
  width: 100%;
  justify-content: space-between;
}

.card .title {
  color: rgb(135, 173, 239);
  font-weight: bold;
  padding-left: 16px;
  transition: all 0.5s;
  transition-delay: 0.25s;
}

.card .icon {
  color: rgb(135, 173, 239);
  padding: 16px;
  font-weight: bold;
}

.card .content {
  color: rgb(135, 173, 239);
  padding-left: 16px;
  transition: all 0.5s;
  transition-delay: 0.25s;
}

.card .button {
  z-index: 2;
  position: absolute;
  top: 38%;
  opacity: 0;
  transition: all 0.5s;
  transition-delay: all 0.5s;
}

.card:hover .button {
  opacity: 1;
}
</style>
