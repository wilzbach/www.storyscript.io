<template>
  <s-layout
    padding="max"
    class="has-background-lines"
  >
    <s-container
      centered-vh
      class="is-reversed"
    >
      <s-div size="4 is-offset-1">
        <s-text
          :padding="['none', '1x']"
          head="3"
        >Focus on the flow</s-text>
        <s-text p="1">Readable-first, strongly-typed with automatic service discovery makes development a breeze.</s-text>
      </s-div>
      <s-div size="7">
        <s-div size="10">
          <div class="code-block code-block-light has-before-after-dots-small">
            <div class="body">
              <prism language="story">{{ code }}</prism>
            </div>
          </div>
        </s-div>
      </s-div>
    </s-container>
  </s-layout>
</template>

<script>
export default {
  name: 'Flow',
  data: () => ({
    code: 'when slack bot respons as msg\n  msg reply text:(wolfram answer query:msg.text).answer\n\nwhen cron schedule daily hour:9 as date\n  df = date format pattern:\'DD/MM/YYYY\'\n  dropbox move target:\'/new/*\' dest:\'/archive/{date}/*\'\n\nwhen twitter stream tweets filter:\'#storyscript\' as tweet\n  res = machinebox/textbox analyze input:tweet.text\n  if res.positive\n    tweet like'
  })
}
</script>
