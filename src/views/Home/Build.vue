<template>
  <s-layout margin="large">
    <s-container
      centered-v
      class="is-reversed"
    >
      <s-div size="4 is-offset-1">
        <s-text
          :padding="['none', '1x']"
          head="3"
        >Build anything</s-text>
        <s-text
          :padding="['none', 'normal']"
          p="1"
        >Transform your containerized software into highly-reusable, fully-documented pluggable software components.</s-text>
        <s-button
          link
          arrow
          url="//microservice.guide"
        >The OMG Standard</s-button>
      </s-div>
      <s-div size="7">
        <img
          src="~@/assets/img/bg/omg-diagram.png"
          srcset="~@/assets/img/bg/omg-diagram@2x.png 2x, ~@/assets/img/bg/omg-diagram@3x.png 3x"
          alt=""
        >
      </s-div>
    </s-container>
  </s-layout>
</template>

<script>
export default {
  name: 'Build'
}
</script>
