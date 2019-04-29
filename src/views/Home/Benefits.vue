<template>
  <s-layout
    foreground="light"
    rounded
    outside
    padding="large"
  >
    <template slot="absolute">
      <img
        class="image rocket"
        src="~@/assets/img/bg/rocket.png"
        srcset="~@/assets/img/bg/rocket@2x.png 2x, ~@/assets/img/bg/rocket@3x.png 3x"
        alt="rocket"
      >
    </template>
    <!--
    <s-container centered-v-h>
      <s-div size="half">
        <h4 class="is-size-4 has-text-weight-semibold has-text-gray-2 has-text-uppercase">UNITING</h4>
        <h5 class="is-size-5 has-text-gray-2 has-padding-top-2x">Developers. Languages. Architectures.<br>Uniting people from different tribes of development. Leverage the power of<br> any language.</h5>
      </s-div>
      <s-div
        size="half"
        background="gray-4"
        class="logo-benefits"
      >
        <s-logo />
      </s-div>
    </s-container>
    -->
  </s-layout>
</template>

<script>
export default {
  name: 'Benefits'
}
</script>

<style lang="scss">
.image.rocket {
  margin: 0 auto;
  z-index: 10;
}
.logo-benefits div {
  border-radius: 0.625rem;
  padding: 10rem 0;
  text-align: center;
}
</style>
