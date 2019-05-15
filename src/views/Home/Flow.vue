<template>
  <s-layout
    margin="7x5"
    class="has-background-lines"
  >
    <s-container centered-vh>
      <s-div size="7">
        <s-div size="10">
          <div class="code-block code-block-light has-before-after-dots-small">
            <div class="body">
              <prism language="coffee">{{ smallCode }}</prism>
              <prism language="coffee">{{ smallCode }}</prism>
              <prism language="coffee">{{ smallCode }}</prism>
            </div>
          </div>
        </s-div>
      </s-div>
      <s-div
        size="4"
        padding="large"
      >
        <s-text
          :padding="['none', '1x']"
          head="3"
        >Focus on the flow.</s-text>
        <s-text p="1">Readable-first, strongly-typed with
        automatic service discovery makes
        development a breeze.</s-text>
      </s-div>
    </s-container>
  </s-layout>
</template>

<script>
export default {
  name: 'Flow',
  data: () => ({
    smallCode: 'when sevice action event key:value as data\n  res = service action key:value'
  })
}
</script>
