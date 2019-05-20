<template>
  <s-layout
    foreground="light has-background-lines"
    rounded
    outside
    padding="large"
  >
    <s-container centered-vh>
      <s-div
        size="half"
        padding="large"
        class="has-text-centered"
      >
        <s-text
          highlight
          alignment="left"
          color="gray-3"
        >This is</s-text>
        <s-text
          head="2"
          alignment="centered"
        >Application Storytelling™</s-text>
        <s-text
          highlight
          color="primary"
          alignment="right"
        >by Storyscript</s-text>
        <s-text
          p="0"
          alignment="centered"
          padding="2x"
        >Our mission is to bring coding to a billion people
        by making development 10-100x easier.</s-text>
        <s-button
          :icon-left="{ icon: 'pen' }"
          url="//docs.storyscript.io"
        >Documentation</s-button>
      </s-div>
    </s-container>

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
