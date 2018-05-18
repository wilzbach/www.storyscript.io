<template>
  <span class="link" :style="{
    position: 'relative',
  }">
    <url-link :to="to">
      <slot></slot>
    </url-link>
  </span>
</template>

<script>
export default {
  props: ['to'],
}
</script>

<style scoped lang="styl">
.link
  a
    color white
    font-weight 400
    font-size 0.9em
  &:before
    content: ""
    position: absolute
    width: 100%
    height: 2px
    bottom: -9px
    background-color: #888
    visibility: hidden
    transform: scaleX(0)
    transition: all 0.15s ease-out 0s
  &:hover:before
    visibility: visible
    transform: scaleX(1)
  &:hover a
    color: #D1D1D1
    transition: all 0.15s ease-in-out 0s

</style>
