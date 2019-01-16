<template>
  <div class="code-block">
    <div
      v-show="step === 1"
      class="left storyscript" />
    <div
      v-show="step === 2"
      class="left hub" />
    <div
      v-show="step === 3"
      class="left runtime" />
    <div
      v-show="step === 4"
      class="left dash" />
    <div class="right code" />
  </div>
</template>

<script>
export default {
  name: 'SolutionSvg',
  props: {
    step: {
      type: Number,
      default: 1
    }
  }
}
</script>

<style lang="scss" scoped>
.code-block {
  position: relative;
  width: 90%;
  height: 400px;
  display: block;
  margin: auto;
  .left, .right {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 50%;
    height: 100%;
    display: block;
    background-size: 100% auto;
    background-repeat: no-repeat;
    background-position: center center;
  }

  .right { right: 0; z-index: 2; }
  .left { left: 0; width: 60%; z-index: 3; }

  .code { background-image: url('~@/assets/img/code-solution.svg'); }

  .storyscript { background-image: url('~@/assets/img/storyscript-solution.svg'); }
  .hub { background-image: url('~@/assets/img/hub-solution.svg'); }
  .runtime { background-image: url('~@/assets/img/runtime-solution.svg'); }
  .dash { background-image: url('~@/assets/img/dash-solution.svg'); }
}
</style>
