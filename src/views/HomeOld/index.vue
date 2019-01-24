<template>
  <div class="home">
    <router-view name="player" />
    <router-view name="head" />
    <router-view name="tagline" />
    <!-- <router-view name="platform" /> -->
    <router-view name="demo" />
    <router-view name="join" />
    <!-- <router-view name="benefits" /> -->
    <router-view name="opensource" />
    <router-view name="foot" />
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style lang="scss" scoped>
.home {
  overflow-x: hidden;
}
</style>
