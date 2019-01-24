<template>
  <div
    id="top"
    ref="self"
    class="section intro">
    <scene
      ref="scene"
      fixed
      animated />
    <div
      ref="container"
      class="head">
      <!-- <a-logo class="wordmark" /> -->
      <div class="columns is-centered">
        <div class="column is-three-quarters title">
          <h1 class="text--light main">Dream bigger.</h1>
          <h1 class="text--light main">Go further with Asyncy.</h1>
        </div>
        <div class="column is-half video">
          <a-video />
        </div>
        <!-- <h3 class="subtitle">
          The future of application <span>orchestration</span> choreography.
        </h3> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Head',
  props: {},
  inject: ['client', 'addEvent', 'removeEvent'],
  mounted: function () {
    // this.addEvent('scroll', this.scaleOnScroll, true)
    this.addEvent('resize', this.handleResize, true)
  },
  beforeDestroy: function () {
    // this.removeEvent('scroll', this.scaleOnScroll)
    this.removeEvent('resize', this.handleResize)
  },
  methods: {
    scaleOnScroll: function () {
      // let scale = 1 - this.client.screen.scrollTop * 0.0002
      // let y = -this.client.screen.scrollTop * 0.25
      // this.$refs.container.style.transform = `scale(${scale}) translate3d(0, ${y}px, 0)`
    },
    handleResize: function () {
      let height = this.$refs.container.clientHeight
      this.client.screen.topHeight = height
      // this.$refs.self.style.height = `${height}px`
      // this.$refs.scene.$el.style.height = `${height}px`
    }
  }
}
</script>

<style lang="scss" scoped>
.head {
  max-width: 1440px;
  margin: 0 auto;

  h1.main {
    font-size: 4rem !important;
    line-height: 0.9;
  }
  .columns {
    width: 100%;
    @include breakpoint(max m) { padding: 0 }
  }

  .column {
    &.video {
      @include breakpoint(m) {
        position: absolute;
        top: calc(50% - 200px);
        right: -50px;
      }
    }
    &.title {
      position: relative;
    }
  }
}

.subtitle {
  color: gray(400);

  span {
    text-decoration: line-through;
  }
}

.wordmark {
  height: 4rem;
  width: 15rem;
}
</style>
