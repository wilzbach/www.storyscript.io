<template>
  <Tweet
    ref="self"
    :id="id"
    :options="{ cards: 'hidden', infos: 'retweet' }"
  />
</template>

<script>
import { Tweet } from 'vue-tweet-embed'
export default {
  name: 'VueTweet',
  components: { Tweet },
  props: { id: { type: String, required: true } },
  mounted: function () {
    this.$watch(() => this.$refs.self.isLoaded, () => {
      const tweet = this.$el.firstChild.shadowRoot.querySelectorAll('.Tweet')
      if (tweet.length) {
        tweet[0].style.display = 'flex'
        tweet[0].style.flexDirection = 'column-reverse'
      }
      const tweetAuthor = this.$el.firstChild.shadowRoot.querySelectorAll('.TweetAuthor-avatar')
      if (tweetAuthor.length) {
        tweetAuthor[0].style.height = '64px'
      }
      const authorSNameC = this.$el.firstChild.shadowRoot.querySelectorAll('.TweetAuthor-nameScreenNameContainer')
      if (authorSNameC.length) {
        authorSNameC[0].style.fontSize = '1.5rem'
      }
      const authorSName = this.$el.firstChild.shadowRoot.querySelectorAll('.TweetAuthor-screenName')
      if (authorSName.length) {
        authorSName[0].style.fontSize = '1.2rem'
      }
      const body = this.$el.firstChild.shadowRoot.querySelectorAll('.Tweet-body')
      if (body.length) {
        body[0].style.width = 'auto'
        body[0].style.padding = '2rem'
        body[0].style.borderRadius = '1rem'
        body[0].style.backgroundColor = 'rgba(198, 199, 220, .3)'
      }
      const text = this.$el.firstChild.shadowRoot.querySelectorAll('.Tweet-text')
      if (text.length) {
        text[0].style.fontFamily = 'Gilroy'
        text[0].style.fontSize = '1.5rem'
        text[0].style.marginBottom = '2rem'
      }
      const like = this.$el.firstChild.shadowRoot.querySelectorAll('.TweetInfo-like')
      if (like.length) {
        like[0].style.fontSize = '1.25rem'
      }
      const geo = this.$el.firstChild.shadowRoot.querySelectorAll('.TweetInfo-timeGeo')
      if (geo.length) {
        geo[0].style.display = 'none'
      }
      const infocircle = this.$el.firstChild.shadowRoot.querySelectorAll('.tweet-InformationCircle')
      if (infocircle.length) {
        infocircle[0].style.display = 'none'
      }
      const cta = this.$el.firstChild.shadowRoot.querySelectorAll('.CallToAction')
      if (cta.length) {
        cta[0].style.display = 'none'
      }
      const embeded = this.$el.firstChild.shadowRoot.querySelectorAll('.EmbeddedTweet')
      if (embeded.length) {
        embeded[0].style.border = 'none'
        embeded[0].style.borderRadius = '.5rem'
        embeded[0].style.maxWidth = '100%'
      }
      const header = this.$el.firstChild.shadowRoot.querySelectorAll('.Tweet-header')
      if (header.length) {
        header[0].style.margin = '1.5rem 2rem'
      }
    })
  }
}
</script>
