<template>
  <div class="page-wrapper">
    <div class="text">
      <FillUpText text="Easy and affordable web design."></FillUpText>
      <Button
        id="mt"
        title="check it out"
        color="primary"
        disabled="false"
      ></Button>
    </div>
    <SideBackground />
  </div>
</template>
<style scoped>
.page-wrapper {
  padding: 0;
  margin: 0;
  width: 100vw;
  height: 100vh;
  background-color: #0e031d;
  display: flex;
  align-items: center;
  cursor: url("/cursor.png"), auto;
}

.text {
  margin-left: 5vw;
  margin-top: 0;
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
