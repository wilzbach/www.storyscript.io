<template>
  <section class="tweet">
    <a-card alternative>
      <template slot="head">
        <h3 class="is-size-3 has-text-dark">
          Dream bigger, <b>Go further with Asyncy!</b>
        </h3>
        <p class="is-size-6 has-text-gray-2">
          Some tweets from our users. Follow us on twitter;
          <a
            href="//twitter.com/asyncy"
            title="Asyncy Twitter"
            class="is-primary"
            target="_blank">@asyncy</a>
        </p>
      </template>
      <div class="columns is-multiline is-gapless">
        <div
          v-for="(tweet, idx) of tweets"
          :key="`tweets-list-${idx}`"
          :class="['column', 'is-one-third', {'bottom-based': idx < 3}]"
        >
          <div :class="['tweet-sample', {'centered': idx % 3 === 1}, {'right': idx % 3 === 2}]">
            <vue-tweet :id="tweet" />
          </div>
        </div>
      </div>
    </a-card>
  </section>
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

<style lang="scss" scoped>
.tweet {

  .bottom-based {
    margin: auto 0 0 0;
  }

  .tweet-sample {
    max-width: 100%;
    border-radius: .5rem;
    background-color: #fff;
    box-shadow: 0 8px 22px 0 rgba(0, 0, 0, 0.04);
    padding: 0;
    text-align: left;
    margin-top: .75rem;
    margin-left: 0;
    margin-bottom: .75rem;
    margin-right: .75rem;
    &.centered, &.right {
      margin-left: .75rem;
    }
    &.right {
      margin-right: 0;
    }
  }
}
</style>
