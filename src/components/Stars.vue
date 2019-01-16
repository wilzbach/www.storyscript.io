<template>
  <div
    :id="`stars-particles-${_uid}`"
    class="sp" />
</template>

<script>
import '@/plugins/particles.js'

export default {
  name: 'StarsParticles',
  mounted: function () {
    window.particlesJS(`stars-particles-${this._uid}`, {
      'particles': {
        'number': {
          'value': 100,
          'density': {
            'enable': true,
            'value_area': 90
          }
        },
        'color': {
          'value': '#ffffff'
        },
        'shape': {
          'type': 'circle',
          'stroke': {
            'width': 0,
            'color': '#000000'
          },
          'polygon': {
            'nb_sides': 5
          }
        },
        'opacity': {
          'value': 0.7,
          'random': false,
          'anim': {
            'enable': false,
            'speed': 0.1,
            'opacity_min': 0,
            'sync': false
          }
        },
        'size': {
          'value': 1,
          'random': true,
          'anim': {
            'enable': false,
            'speed': 2,
            'size_min': 0,
            'sync': false
          }
        },
        'line_linked': {
          'enable': false
        },
        'move': {
          'enable': false,
          'speed': 0.2,
          'direction': 'none',
          'random': true,
          'straight': false,
          'out_mode': 'out',
          'bounce': false,
          'attract': {
            'enable': false,
            'rotateX': 600,
            'rotateY': 1200
          }
        }
      },
      'retina_detect': true
    })
  }
}
</script>

<style lang="scss">
canvas {
  display: block;
  vertical-align: bottom;
}

.sp {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  z-index: -1;
}

</style>
