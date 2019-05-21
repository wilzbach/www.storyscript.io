<template>
  <s-layout margin="large">
    <s-container centered-v>
      <s-div size="4 is-offset-1">
        <s-text
          :padding="['none', '1x']"
          head="3"
        >Run anywhere</s-text>
        <s-text p="1">Microservices and functions are easy to build, test, sandbox, and string together keeping development as DRY as possible.</s-text>
      </s-div>
      <s-div size="7">
        <img
          src="~@/assets/img/bg/run-diagram.png"
          srcset="~@/assets/img/bg/run-diagram@2x.png 2x, ~@/assets/img/bg/run-diagram@3x.png 3x"
          alt=""
        >
      </s-div>
    </s-container>
  </s-layout>
</template>

<script>
export default {
  name: 'Run'
}
</script>
