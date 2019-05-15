<template>
  <s-layout margin="large">
    <s-container centered-vh>
      <s-div size="7">
        <img
          src="~@/assets/img/bg/omg-diagram.png"
          srcset="~@/assets/img/bg/omg-diagram@2x.png 2x, ~@/assets/img/bg/omg-diagram@3x.png 3x"
          alt=""
        >
      </s-div>
      <s-div
        size="4"
        padding="large"
      >
        <s-text
          :padding="['none', '1x']"
          head="3"
        >Build anything.</s-text>
        <s-text
          :padding="['none', 'normal']"
          p="1"
        >Using industry proven technologies under the hood for a robust and scalable architecture.</s-text>
        <s-button
          link
          arrow
          url="//microservice.guide"
        >Open Microservice Guide</s-button>
      </s-div>
    </s-container>
  </s-layout>
</template>

<script>
export default {
  name: 'Build'
}
</script>
