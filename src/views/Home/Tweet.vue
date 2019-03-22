<template>
  <a-layout>
    <a-container
      slot="absolute"
      vh-centered
    >
      <a-div
        size="8"
        padding="2x"
      >
        <div class="tweet-box">
          <vue-tweet :id="tweets[0]" />
        </div>
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
  background-color: $light;
  border-radius: 0.625rem;
  position: relative;
  margin: 0 auto;
  &:before,
  &:after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    width: 21rem;
    background-repeat: no-repeat;
    background-size: contain;
  }
  &:before {
    left: -18rem;
    background-image: url("~@/assets/img/bg/bg-tweet-shape-left.png");
  }
  &:after {
    right: -18rem;
    background-image: url("~@/assets/img/bg/bg-tweet-shape-right.png");
  }
}
</style>
