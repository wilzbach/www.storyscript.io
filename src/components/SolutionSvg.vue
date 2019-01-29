<template>
  <div class="solution-picture-container">
    <div
      v-if="step === 0"
      class="solution-picture-content storyscript" />
    <div
      v-if="step === 1"
      class="solution-picture-content hub" />
    <div
      v-if="step === 2"
      class="solution-picture-content runtime" />
    <div
      v-if="step === 3"
      class="solution-picture-content dash" />
    <div class="solution-picture-content code" />
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

<style lang="scss">
.solution-picture-container {
  position: relative;
  width: 100%;
  height: 400px;
  display: block;
  margin: auto;
  .solution-picture-content {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 50%;
    height: 100%;
    display: block;
    object-fit: contain;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center center;
    &.code {
      right: 0;
      z-index: 2;
    }
    &:not(.code) {
      left: 0;
      width: 50%;
      z-index: 3;
    }
  }

  .code { background-image: url('~@/assets/img/solution-code.svg'); }
  .storyscript { background-image: url('~@/assets/img/solution-storyscript.svg'); }
  .hub { background-image: url('~@/assets/img/solution-hub.svg'); }
  .runtime { background-image: url('~@/assets/img/solution-runtime.svg'); }
  .dash { background-image: url('~@/assets/img/solution-dash.svg'); }
}
</style>
