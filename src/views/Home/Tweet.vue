<template>
  <a-layout margin="large">
    <a-container
      slot="absolute"
      vh-centered
    >
      <a-div size="3">
        <figure class="image is-hidden-touch">
          <img
            src="~@/assets/img/bg/bg-tweet-shape-right.png"
            srcset="~@/assets/img/bg/bg-tweet-shape-right@2x.png 2x, ~@/assets/img/bg/bg-tweet-shape-right@3x.png 3x"
            alt="twitter shape"
          >
        </figure>
      </a-div>
      <a-div size="6">
        <div class="tweet-box">
          <vue-tweet :id="tweets[0]" />
        </div>
      </a-div>
      <a-div size="3">
        <figure class="image is-hidden-touch">
          <img
            src="~@/assets/img/bg/bg-tweet-shape-left.png"
            srcset="~@/assets/img/bg/bg-tweet-shape-left@2x.png 2x, ~@/assets/img/bg/bg-tweet-shape-left@3x.png 3x"
            alt="twitter shape"
          >
        </figure>
      </a-div>
    </a-container>
  </a-layout>
</template>

<script>
import VueTweet from '@/components/VueTweet'

export default {
  name: 'Tweet',
  components: { VueTweet },
  data: () => ({
    tweets: [
      '1074232356528107520',
      '1073581270268108806',
      '1070750612994822144',
      '1069893232727875585',
      '1062351482073309184',
      '1060554713278619649']
  })
}
</script>

<style lang="scss">
.tweet-box {
  position: relative;
  margin: 0 3rem;

  .twitter-tweet {
    margin: auto;
    width: auto !important;
  }
}
</style>
