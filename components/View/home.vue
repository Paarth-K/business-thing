<template>
  <div class="home-container">
    <div class="page page-1">
      <div class="text">
        <home-FillUpText
          normalText="We bring your ideas "
          text="to the world"
        ></home-FillUpText>
        <base-Button
          id="mt"
          title="check it out"
          color="primary"
          disabled="false"
        ></base-Button>
      </div>
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
  width: 100vw;
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
</style>
