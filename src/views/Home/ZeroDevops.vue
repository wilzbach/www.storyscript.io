<template>
  <s-layout margin="large">
    <s-container centered-vh>
      <s-div
        size="4"
        padding="large"
      >
        <s-text
          :padding="['none', '1x']"
          head="3"
        >Zero-DevOps Deployment</s-text>
        <s-text p="1">With a single command easily
        deploy to: Story Cloud or your
        existing infrastructure.</s-text>
      </s-div>
      <s-div size="7">
        <img
          src="~@/assets/img/bg/zerodev-diagram.png"
          srcset="~@/assets/img/bg/zerodev-diagram@2x.png 2x, ~@/assets/img/bg/zerodev-diagram@3x.png 3x"
          alt=""
        >
      </s-div>
    </s-container>
  </s-layout>
</template>

<script>
export default {
  name: 'ZeroDevops'
}
</script>
