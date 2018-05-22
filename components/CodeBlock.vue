<template>
  <pre class="pre language-coffeescript">
    <code class="language-coffeescript" v-html="highlightedCode">
    </code>
  </pre>
</template>

<script>
import Prism from 'prismjs'
import loadLanguages from 'prismjs/components/index.js'

loadLanguages(['coffeescript']);

export default {
  props: ['code'],
  data() {
    return {
      highlightedCode: Prism.highlight(this.code, Prism.languages.coffeescript, 'coffeescript')
    }
  }
}

</script>

<style scoped lang="styl">
.pre
  border-radius 4px
  padding 25px
  font-size 0.8em
</style>
