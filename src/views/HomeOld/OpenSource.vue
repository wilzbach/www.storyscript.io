<template>
  <div class="section">
    <div class="container open-source">
      <div class="form-os z-2">
        <h2 class="text--light">Ready to join the revolution?</h2>
        <form-beta variant="dark" />
      </div>
      <a-planet
        absolute
        class="open-source-planet"
        variant="red-purple" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'OpenSource'
}
</script>

<style lang="scss" scoped>
.open-source {
  background-color: #fff;
  position: relative;
  min-height: 450px;
  justify-content: flex-end !important;
  .form-os {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
  }
  .open-source-planet {
    background-position: 50% 0%;
    background-size: auto 250%;
    max-width: 100%;
    width: 100%;
    height: 450px;
    bottom: 0;
    left: 0;
    right: 0;
  }
}
</style>
