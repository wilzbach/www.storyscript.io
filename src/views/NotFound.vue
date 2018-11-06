<template>
  <div class="container not-found">
    <h1 class="lost">Lost in space ?</h1>
  </div>
</template>

<script>
export default {
  name: 'NotFound'
}
</script>

<style lang="scss" scoped>
.not-found {
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100% - 72px); /* minus the nav bar */
  position: relative;
  background-color: color(light);
  // color: transparent;

  .lost {
    font-size: 15rem !important;
    color: color(dark);
    // background-image: url('~@/assets/img/bg/stars.svg');
    background-color: color(dark);
    background-repeat: repeat;
    background-size: 20% auto;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }
}
</style>
