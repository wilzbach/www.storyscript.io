<template>
  <div id="asyncy">
    <transition name="fade">
      <router-view />
    </transition>
  </div>
</template>

<script>
export default {
  name: 'Asyncy'
}
</script>

<style lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease-in;
}
.fade-enter,
.fade-leave-active {
  opacity: 0
}
.vue-typer.dark {
  .vue-typer-caret-blink {
    background-color: $white;
  }
  &, & span.typed {
    color: $white;
  }
}

#asyncy .SandboxRoot .CallToAction {
  display: none !important;
}
</style>
