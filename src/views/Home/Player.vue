<template>
  <transition name="fade">
    <div
      v-show="visible"
      class="player-container">
      <span
        class="close"
        @click.stop="hide">
        <font-awesome-icon icon="times" />
      </span>
      <a-player
        v-click-outside="hide"
        ref="player"
        class="video-container">
        <div
          id="player"
          class="plyr__video-embed">
          <iframe
            src="//www.youtube.com/embed/es-tMFYH9pc?https://plyr.io&amp;iv_load_policy=3&amp;modestbranding=1&amp;playsinline=1&amp;showinfo=0&amp;rel=0&amp;enablejsapi=1"
            allowfullscreen
            allowtransparency
            allow="autoplay" />
        </div>
      </a-player>
    </div>
  </transition>
</template>

<script>
import Vue from 'vue'

export default {
  name: 'Player',
  data: () => ({
    visible: false,
    transitionning: false
  }),
  watch: {
    visible: function () {
      if (this.visible) {
        document.documentElement.scrollTop = 0
        document.documentElement.classList.add('no-overflow')
      } else {
        document.documentElement.classList.remove('no-overflow')
      }
    }
  },
  created: function () {
    Vue.prototype.$player = this
  },
  beforeDestroy: function () {
    delete Vue.prototype.$player
  },
  methods: {
    show: function () {
      if (!this.transitionning) {
        this.transitionning = true
        setTimeout(() => {
          this.visible = true
          this.$refs.player.player.play()
          this.transitionning = false
        }, 20)
      }
    },
    hide: function () {
      if (!this.transitionning) {
        this.transitionning = true
        setTimeout(() => {
          this.visible = false
          this.$refs.player.player.pause()
          this.transitionning = false
        }, 20)
      }
    }
  }
}
</script>

<style lang="scss">
.player-container {
  position: absolute;
  opacity: 1;
  background-color: rgba(0, 0, 0, 0.75);
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 99999999;
  overflow: hidden;
  transition: all 0.2s $easing;
  .video-container {
    top: 10vh;
    width: 80%;
    height: 80vh;
    border-radius: .5rem;
    overflow: hidden;
    position: relative;
    margin: auto;
    .plyr--video {
      height: 100%;
      width: auto;
      .plyr__video-wrapper {
        height: 100%;
        max-width: 100%;
        video {
          // height: 100%;
        }
      }
    }
  }
  .close {
    top: 10vh;
    position: absolute;
    right: 8%;
    font-size: 2.5rem;
    z-index: 99999;
    cursor: pointer;
  }
}

img,
video,
audio {
    max-width: 100%;
    vertical-align: middle;
}

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
