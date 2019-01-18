<template>
  <section class="section lock-room">
    <div
      class="container layout">
      <div
        ref="height"
        class="layout-height">
        <div class="columns">
          <div class="column is-full centered">
            <div class="max">
              <div class="max-container">
                <slot :step="activeStep" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        ref="layoutItem"
        class="layout-item" />
    </div>
  </section>
</template>

<script>
export default {
  name: 'LockRoom',
  props: {
    scrollBy: {
      type: [String, Number],
      default: 600,
      required: false
    },
    steps: {
      type: Number,
      default: 3,
      required: false
    }
  },
  data: () => ({ loaded: false, locked: false, activeStep: -1, processing: false, scrolling: false }),
  inject: ['addEvent', 'removeEvent', 'disableScroll', 'enableScroll', 'isScrollEnable'],
  computed: {
    height: function () {
      return this.scrollBy * this.steps
    }
  },
  watch: {
    scrollBy: 'refreshLayoutItem',
    steps: 'refreshLayoutItem',
    activeStep: function (newval, oldval) {
      // if (oldval !== -1 && oldval !== newval) {
      //   this.disableScroll()
      //   this.processing = true
      //   // this.enableWhenOffsetIsGood(this.activeStep)
      //   setTimeout(() => {
      //     this.enableScroll()
      //     this.processing = false
      //   }, 500)
      // }
    }
  },
  beforeDestroy: function () {
    this.removeEvent('scroll', this.handleScroll)
    // this.removeEvent('prevent', this.handleScroll)
  },
  mounted: function () {
    this.addEvent('scroll', this.handleScroll)
    // this.addEvent('prevent', this.handleScroll)
    this.$nextTick(this.refreshLayoutItem)
    this.activeStep = Math.min(Math.max(Math.floor((window.scrollY - this.$el.offsetParent.offsetTop) / this.scrollBy) + 1, 1), this.steps)
  },
  methods: {
    refreshLayoutItem: function () {
      this.$refs.layoutItem.style.minHeight = `${this.height}px`
    },
    enableWhenOffsetIsGood: function (activeStep) {
      this.processing = true
      this.processingStep = activeStep
      const interval = setInterval(() => {
        if (!this.$el || !this.$el.offsetParent) {
          clearInterval(interval)
          return
        }
        window.scrollTo({ top: this.$el.offsetParent.offsetTop + this.scrollBy * activeStep, behavior: 'instant' })
        if (Math.round(window.scrollY) === this.$el.offsetParent.offsetTop + this.scrollBy * activeStep && !this.scrolling) {
          this.enableScroll()
          this.processing = false
          clearInterval(interval)
        }
      }, 60)
    },
    handleScroll: function (event) {
      // this.scrolling = true
      // if (this.scrollingTimeout) {
      //   clearTimeout(this.scrollingTimeout)
      // }
      // if (!event) return
      // this.locked = window.scrollY > this.$el.offsetParent.offsetTop && window.scrollY < (this.$el.offsetParent.offsetTop + this.height)
      // if (locked && !this.locked) {
      //   this.disableScroll()
      //   this.enableWhenOffsetIsGood(this.activeStep)
      // }
      // this.scrollingTimeout = setTimeout(() => {
      //   this.scrolling = false
      //   this.scrollingTimeout = undefined
      // }, 60)
      // this.locked = locked
      // if (!this.isScrollEnable() && this.processing) {
      //   window.scrollTo({ top: this.$el.offsetParent.offsetTop + this.scrollBy * this.activeStep, behavior: 'instant' })
      //   return true
      // }
      // const active = Math.min(Math.max(Math.floor((window.scrollY - this.$el.offsetParent.offsetTop) / this.scrollBy) + 1, 1), this.steps)
      this.activeStep = Math.min(Math.max(Math.floor((window.scrollY - this.$el.offsetParent.offsetTop) / this.scrollBy) + 1, 1), this.steps)
      // if (active > this.activeStep) this.activeStep = this.activeStep + 1
      // if (active < this.activeStep) this.activeStep = this.activeStep - 1
      return false
    },
    nextStep: function (smooth = false) {
      this.goToStep(this.activeStep + 1, smooth)
    },
    skip: function (smooth = false) {
      const top = this.$el.offsetHeight + this.$el.offsetParent.offsetTop
      window.scrollTo({ top, behavior: (smooth ? 'smooth' : 'instant') })
    },
    /**
     * Scroll to the step specific position
     *
     * @param {Integer} idx the step position (min: 1 - max: steps)
     */
    goToStep: function (idx, smooth = false) {
      idx--
      if (idx >= 0 && idx < this.steps) {
        const top = this.$el.offsetParent.offsetTop + this.scrollBy * idx
        window.scrollTo({ top, behavior: (smooth ? 'smooth' : 'instant') })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.lock-room {
  min-height: 100vh;
  height: 100vh;
  background-color: transparent !important;

  .overlay {
    background-color: rgba(0,0,0,0.2);
    display: none;
    position: sticky !important;
    top: 0; left: 0; right: 0; bottom: 0;
    &.visible {
      display: block;
    }
  }

  .max {
    display: flex;
    height: 100vh;
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .max-container {
      display: block;
      width: 100%;
    }
  }

  .centered {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .layout {
    padding: 0 !important;
    visibility: visible;
    .layout-height {
      position: sticky;
      top: 0;
      height: 100vh;
      min-height: 100vh;
      .columns {
        width: 100%;
      }
    }
    .layout-item {
      visibility: hidden;
    }
  }
}
</style>
