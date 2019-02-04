<template>
  <div id="asyncy">
    <asyncy-jumbo />
    <transition name="fade">
      <router-view />
    </transition>
    <asyncy-footer />
  </div>
</template>

<script>
import AsyncyJumbo from '@/components/AsyncyJumbo'
import AsyncyFooter from '@/components/Footer'

export default {
  name: 'Asyncy',
  components: { AsyncyJumbo, AsyncyFooter }
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
