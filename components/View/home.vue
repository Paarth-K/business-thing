<template>
  <div class="home-container">
    <div class="page page-1">
      <div class="text">
        <home-FillUpText
          normalText="We bring your ideas "
          text="to the world"
        ></home-FillUpText>
      </div>
    </div>
    <div class="page page-2">
      <home-Cards></home-Cards>
    </div>
    <div class="page page-3">
      <home-Contact></home-Contact>
    </div>
  </div>
</template>
<style scoped>
.page-1 {
  display: flex;
  justify-content: center;
  align-items: center;
}

.page {
  width: calc(100vw - 14px);
  height: 100vh;
}

.text {
  text-align: center;
  animation: come-in-top 0.5s ease-in;
}

#mt {
  margin-top: 2vh;
}

@keyframes come-in-top {
  0% {
    margin-top: -5%;
  }

  100% {
    margin-top: 0;
  }
}

.page-3 {
  border: 3px solid;
  border-image-source: linear-gradient(#ff0000, #d44808);
  border-image-slice: 1;
}
</style>
