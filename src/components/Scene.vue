<template>
  <div
    ref="self"
    :class="['scene', {fixed: fixed}, variant]">
    <template v-if="variant === 'intro'">
      <a-comet
        variant="purple"
        animated
        size="lg"
        delay="22"
        absolute
        style="left: 10%; top: -30%" />
      <a-comet
        variant="green"
        animated
        size="lg"
        delay="15"
        absolute
        style="right: -5%; top: -30%" />
      <a-comet
        variant="red"
        animated
        size="lg"
        absolute
        style="left: 30%; top: -20%" />
      <a-comet
        variant="blue"
        animated
        size="lg"
        absolute
        delay="3"
        style="right: -60%; top: -30%" />
      <a-planet
        ref="planetRed"
        class="red"
        variant="red"
        absolute
        style="right: 5%; top: 20%" />
      <a-planet
        ref="planetMoon"
        variant="moon"
        size="lg"
        absolute
        class="moon" />
      <a-astronaut
        ref="astronaut"
        class= "astronaut" />
      <a-planet
        ref="planetYellow"
        variant="yellow"
        class="yellow"
        size="xl"
        position="right"
        absolute
        style="bottom: -10%" />
    </template>
    <template v-else-if="variant === 'outro'">
      <a-comet
        size="xl"
        absolute
        variant="asteroid"
        style="left: 5%; top: 20%" />
      <a-planet
        variant="blue-purple"
        size="lg"
        absolute
        style="bottom: 5%; right: 0" />
    </template>
    <template v-else>
      <a-planet
        variant="moon-dark"
        absolute
        style="bottom: 30%; left: 10%" />
      <a-planet
        variant="earth"
        absolute
        style="bottom: 20%; right: 15%" />
      <div class="moon-bottom" />
      <a-astronaut
        size="lg"
        absolute
        style="bottom: 6%; left: 47%" />
    </template>
  </div>
</template>

<script>
export default {
  name: 'Scene',
  props: {
    variant: {
      type: String,
      default: 'intro',
      validator: v => ['intro', 'outro', 'about'].includes(v),
      description: 'The variant of the scene (intro|outro|about)'
    },
    fixed: {
      type: Boolean,
      default: false,
      description: 'Whether the scene should be fixed'
    },
    animated: {
      type: Boolean,
      default: false,
      description: 'Whether the scene should move based on the cursor position or not'
    }
  },
  data: () => ({
    mouse: {
      x: 0,
      y: 0
    }
  }),
  mounted: function () {
    if (this.variant === 'intro') {
      this.addEvent('mousemove|scroll|resize', this.spaceMove)
    }
  },
  beforeDestroy: function () {
    if (this.variant === 'intro') {
      this.removeEvent('mousemove|scroll|resize', this.spaceMove)
    }
  },
  inject: ['client', 'addEvent', 'removeEvent'],
  methods: {
    spaceMove: function (event) {
      let tx = (this.client.screen.width / 2 - this.client.mouse.x) / 90
      let ty = (this.client.screen.height / 2 - this.client.mouse.y) / 90 - this.client.screen.scrollTop * 1.125

      this.$nextTick(() => {
        this.$refs.planetRed.$el.style.transform = `translate3d(${tx * 1.5}px, ${ty * 1.5}px, 0)`
        this.$refs.planetMoon.$el.style.transform = `translate3d(${tx * 2}px, ${ty * 2}px, 0)`
        this.$refs.astronaut.$el.style.transform = `translate3d(${tx * 2}px, ${ty * 2}px, 0)`
        this.$refs.planetYellow.$el.style.transform = `translate3d(${tx * 3}px, ${ty * 3}px, 0)`
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.scene {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  height: 100%;
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  z-index: 2;
  &.fixed {
    position: fixed;
    overflow: visible;
    z-index: 0;
  }

  .astronaut {
    position: absolute;
    left: 0%;
    top: 20%;
    @include breakpoint(max m) { top: 20% }
    @include breakpoint(max s) { left: unset; right: 0%; top: unset; bottom: calc(10% + 8.5rem) }
  }

  .moon {
    top: calc(20% + 5rem);
    left: -9.375rem;
    @include breakpoint(max m) { left: -6.25rem }
    @include breakpoint(max s) { left: unset; top: unset; bottom: 10%; right: 0%; }
  }

  .yellow {
    @include breakpoint(max m) { display: none }
  }

  .red {
    @include breakpoint(max m) { display: none }
  }

  .bottom-big-planet {
    background-position: 50% 0;
    background-size: 250% auto;
    width: 100%;
    max-width: 1440px;
  }

  .moon-bottom {
    background-image: url('~@/assets/img/bg/moon_magenta.svg');
    background-position: center top;
    background-size: auto 100%;
    background-repeat: no-repeat;
    position: absolute;
    left: 0;
    right: 0;
    bottom: -130px;
    height: 277px;
    width: 100%;
  }
}
</style>
