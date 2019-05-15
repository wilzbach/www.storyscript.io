<template>
  <s-footer :dark="$route.name === 'home' ? undefined : false" />
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style lang="scss">
.footer-top-bordered {
  border-top: 1px solid lighten($dark, 13.5%);
}
</style>
