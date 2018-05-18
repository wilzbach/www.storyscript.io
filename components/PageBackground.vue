<template>
  <div>
    <div class="left-image" :style="{
      position: 'absolute',
      zIndex: '-1',
      left: '0px',
      top: '0px',
    }">
      <div v-html="leftImage" :style="{
        position: 'relative',
        left: leftX ? `${leftX}px` : '-730px',
        top: leftY ? `${leftY}px` : '-45px',
        width: `calc(1200px * ${scale || 1})`,
        height: `calc(700px * ${scale || 1})`,
      }">
      </div>
    </div>
    <div class="right-image" :style="{
      position: 'absolute',
      zIndex: '-1',
      width: '450px',
      height: '700px',
      overflow: 'hidden',
      top: '0px',
      right: '0px',
    }">
      <div v-html="rightImage" :style="{
        position: 'relative',
        width: `calc(1200px * ${scale || 1})`,
        height: `calc(700px * ${scale || 1})`,
        top: rightY ? `${rightY}px` : '-170px',
        right: rightX ? `${rightX}px` : '0px',
      }"/>
    </div>
  </div>
</template>

<script>
export default {
  props: ['leftImage', 'rightImage', 'leftX', 'leftY', 'rightX', 'rightY', 'scale'],
}
</script>

<style scoped lang="styl">
/*.left-image
  @media (max-width: 768px)
    left -950px !important

.right-image
  @media (max-width: 768px)
    width 250px !important*/
</style>
