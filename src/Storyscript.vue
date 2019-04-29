<template>
  <div id="storyscript">
    <story-jumbo />
    <transition name="fade">
      <router-view />
    </transition>
    <story-footer />
  </div>
</template>

<script>
import StoryJumbo from '@/components/StoryJumbo'
import StoryFooter from '@/components/Footer'

export default {
  name: 'Storyscript',
  components: { StoryJumbo, StoryFooter }
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
  opacity: 0;
}
.vue-typer.dark {
  .vue-typer-caret-blink {
    background-color: $white;
  }
  &,
  & span.typed {
    color: $white;
  }
}

#storyscript .SandboxRoot .CallToAction {
  display: none !important;
}
</style>
