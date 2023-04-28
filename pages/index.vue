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
}

#mt {
  margin-top: 2vh;
}
</style>
