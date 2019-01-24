<template>
  <div
    id="asyncy"
    ref="self"
    :class="{'not-found': $route.name === 'not-found'}">
    <transition name="fade">
      <router-view />
    </transition>
  </div>
</template>

<script>
// import debounce from 'lodash.debounce'

export default {
  name: 'Asyncy',
  data: () => ({
    isHandlingScroll: false,
    isHandlingResize: false,
    isHandlingMousemove: false,
    settings: {
      suppressScrollY: false
    },
    client: {
      screen: {
        width: 0,
        height: 0,
        innerHeight: 0,
        scrollTop: 0,
        topHeight: 140
      },
      mouse: {
        x: 0,
        y: 0
      }
    },
    events: [],
    scrollable: true
  }),
  provide () {
    return {
      client: this.client,
      addEvent: this.addEvent,
      removeEvent: this.removeEvent,
      disableScroll: this.disableScroll,
      enableScroll: this.enableScroll,
      isScrollEnable: this.isScrollEnable
    }
  },
  mounted: function () {
    window.addEventListener('scroll', this.handleScroll) // debounce(this.handleScroll, 10, { leading: true, maxWait: 10 }))
    window.addEventListener('resize', this.handleResize) // debounce(this.handleResize, 150, { leading: true, maxWait: 10 }))
    window.addEventListener('mousemove', this.handleMousemove) // debounce(this.handleMousemove, 10, { leading: true, maxWait: 10 }))

    // scroll prevent part
    if (window.addEventListener) { // older FF
      window.addEventListener('DOMMouseScroll', this.preventDefault, false)
      // window.addEventListener('touchstart', (e) => {
      //   console.log('touch start')
      // }, false)
      // window.addEventListener('touchmove', (e) => {
      //   e.preventDefault()
      //   console.log('touch move')
      // }, false)
      // window.addEventListener('touchend', (e) => {
      //   // e.preventDefault()
      //   console.log('touch end')
      // }, false)
    }
    window.onwheel = this.preventDefault // modern standard
    window.onmousewheel = this.preventDefault
    document.onmousewheel = this.preventDefault // older browsers, IE
    window.ontouchmove = this.preventDefault // mobile
    document.onkeydown = this.preventDefaultForScrollKeys

    this.handleResize()
    this.handleScroll()
  },
  beforeDestroy: function () {
    window.removeEventListener('scroll', this.handleScroll)
    window.removeEventListener('resize', this.handleResize)
    window.removeEventListener('mousemove', this.handleMousemove)

    if (window.removeEventListener) {
      window.removeEventListener('DOMMouseScroll', this.preventDefault, false)
      // window.removeEventListener('touchmove', this.preventDefault, false)
    }
    window.onmousewheel = null
    document.onmousewheel = null
    window.onwheel = null
    window.ontouchmove = null
    document.onkeydown = null
  },
  methods: {
    preventDefault: function (e) {
      e = e || window.event
      const prevent = this.process('prevent', e)
      if (prevent || !this.scrollable) {
        if (e.preventDefault) {
          e.preventDefault()
        }
        e.returnValue = false
      }
    },
    scrollHandler: function (e) {
      // e.target.scrollTop
      this.process('scroll', e)
    },
    enableScroll: function () {
      this.scrollable = true
    },
    disableScroll: function () {
      this.scrollable = false
    },
    isScrollEnable: function () {
      return this.scrollable
    },
    preventDefaultForScrollKeys: function (e) {
      if ([37, 38, 39, 40].includes(e.keyCode)) {
        this.preventDefault(e)
        return false
      }
    },
    addEvent: function (type, call, preCall = false) {
      this.events.push({ type, call })
      if (preCall) {
        try {
          call()
        } catch (e) { console.error(e) }
      }
    },
    removeEvent: function (type, call) {
      let idx = this.events.findIndex(v => v.type === type && v.call === call)
      if (idx !== -1) {
        this.events.splice(idx, 1)
      }
    },
    process: function (type, e) {
      let ret = false
      for (let event of this.events) {
        if (event.type.includes(type)) {
          ret = ret || event.call(e)
        }
      }
      return ret
    },
    handleScroll: function (event) {
      if (!this.isHandlingScroll) {
        this.isHandlingScroll = true
        if (this.client.screen.scrollTop !== (document.body.scrollTop || document.documentElement.scrollTop)) {
          this.client.screen.scrollTop = document.body.scrollTop || document.documentElement.scrollTop
        }
        const prevent = this.process('scroll', event)
        if (prevent || !this.scrollable) {
          if (event.preventDefault) {
            event.preventDefault()
          }
          event.returnValue = false
        }
        this.isHandlingScroll = false
      }
    },
    handleResize: function (event) {
      if (!this.isHandlingResize) {
        this.isHandlingResize = true
        if (this.client.screen.width !== this.$refs.self.clientWidth ||
          this.client.screen.height !== this.$refs.self.clientHeight) {
          this.client.screen.width = this.$refs.self.clientWidth
          this.client.screen.height = this.$refs.self.clientHeight
        }
        if (this.client.screen.innerHeight !== window.innerHeight) {
          this.client.screen.innerHeight = window.innerHeight
        }
        this.process('resize', event)
        this.isHandlingResize = false
      }
    },
    handleMousemove: function (event) {
      if (!this.isHandlingMousemove) {
        this.isHandlingMousemove = true
        if (this.client.mouse.x !== event.clientX ||
          this.client.mouse.y !== event.clientY) {
          this.client.mouse.x = event.clientX
          this.client.mouse.y = event.clientY
        }
        this.process('mousemove', event)
        this.isHandlingMousemove = false
      }
    }
  }
}
</script>

<style lang="scss">
@import "~vue2-animate/dist/vue2-animate.min.css";

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
</style>
