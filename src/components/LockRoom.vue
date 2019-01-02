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
      default: 400,
      required: false
    },
    steps: {
      type: [String, Number],
      default: '3',
      required: false
    }
  },
  data: () => ({ locked: false, percentage: 0, activeStep: 0 }),
  inject: ['addEvent', 'removeEvent'],
  computed: {
    height: function () {
      return this.scrollBy * this.steps
    }
  },
  watch: {
    scrollBy: 'refreshLayoutItem',
    steps: 'refreshLayoutItem',
    percentage: function () {
      this.$emit('status', this.percentage)
    }
  },
  beforeDestroy: function () {
    this.removeEvent('scroll', this.handleScroll)
  },
  mounted: function () {
    this.addEvent('scroll', this.handleScroll)
    this.refreshLayoutItem()
    this.$nextTick(this.handleScroll)
  },
  methods: {
    refreshLayoutItem: function () {
      this.$refs.layoutItem.style.minHeight = `${this.height}px`
    },
    handleScroll: function (event) {
      this.locked = window.scrollY > this.$el.offsetParent.offsetTop && window.scrollY < (this.$el.offsetParent.offsetTop + this.height)
      this.activeStep = Math.min(Math.max(Math.floor((window.scrollY - this.$el.offsetParent.offsetTop) / this.scrollBy) + 1, 1), this.steps)
      if (this.locked) {
        this.percentage = Math.round((window.scrollY - this.$el.offsetParent.offsetTop) / (this.scrollBy * this.steps) * 100)
      } else {
        this.percentage = window.scrollY > this.$el.offsetParent.offsetTop ? 100 : 0
      }
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
    visibility: visible;
    .layout-height {
      position: sticky;
      top: 0;
      height: 100vh;
      min-height: 100vh;
    }
    .layout-item {
      visibility: hidden;
    }
  }
}
</style>
