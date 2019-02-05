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
      @include touch {
        width: 100%;
      }
      z-index: 3;
    }
  }

  .code { @include desktop { background-image: url('~@/assets/img/solution/code.svg') } }
  .storyscript {
    @include desktop { background-image: url('~@/assets/img/solution/storyscript.svg') }
    @include touch { background-image: url('~@/assets/img/solution/storyscript-mobile.svg') }
  }
  .hub {
    @include desktop { background-image: url('~@/assets/img/solution/hub.svg') }
    @include touch { background-image: url('~@/assets/img/solution/hub-mobile.svg') }
  }
  .runtime {
    @include desktop { background-image: url('~@/assets/img/solution/runtime.svg') }
    @include touch { background-image: url('~@/assets/img/solution/runtime-mobile.svg') }
  }
  .dash {
    @include desktop { background-image: url('~@/assets/img/solution/dash.svg') }
    @include touch { background-image: url('~@/assets/img/solution/dash-mobile.svg') }
  }
}
</style>
