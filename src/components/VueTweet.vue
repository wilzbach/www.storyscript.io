<template>
  <Tweet
    ref="self"
    :id="id"
    :options="{ cards: 'hidden' }" />
</template>

<script>
import { Tweet } from 'vue-tweet-embed'
export default {
  name: 'VueTweet',
  components: { Tweet },
  props: { id: { type: String, required: true } },
  mounted: function () {
    this.$watch(() => this.$refs.self.isLoaded, () => {
      const cta = this.$el.firstChild.shadowRoot.querySelectorAll('.CallToAction')
      if (cta.length) {
        cta[0].style.display = 'none'
      }
      const embeded = this.$el.firstChild.shadowRoot.querySelectorAll('.EmbeddedTweet')
      if (embeded.length) {
        embeded[0].style.border = 'none'
        embeded[0].style.borderRadius = '.5rem'
      }
    })
  }
}
</script>
