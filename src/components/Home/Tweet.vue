<template>
  <section class="section tweet">
    <div class="container">
      <div class="columns">
        <div class="column is-full text--left">
          <h2 class="title light">Dream bigger, <b>Go further with Asyncy!</b></h2>
          <h4 class="subtitle light">
            <span>Some tweets from our users. Follow us on twitter; </span>
            <a
              href="twitter.com/asyncy"
              title="Asyncy Twitter"
              target="_blank">@asyncy</a>
          </h4>
        </div>
      </div>
      <div class="columns is-multiline is-mobile">
        <div class="column is-full bottom-based">
          <div class="columns">
            <div class="column is-one-quarter">
              <div class="tweet-sample">
                <vue-tweet id="1074232356528107520" />
              </div>
            </div>
            <div class="column is-one-quarter">
              <div class="tweet-sample">
                <vue-tweet id="1073581270268108806" />
              </div>
            </div>
            <div class="column is-one-quarter">
              <div class="tweet-sample">
                <vue-tweet id="1073213686582521856" />
              </div>
            </div>
            <div class="column is-one-quarter">
              <div class="tweet-sample">
                <vue-tweet id="1070750612994822144" />
              </div>
            </div>
          </div>
        </div>
        <div class="column is-full top-based">
          <div class="columns">
            <div class="column is-one-quarter">
              <div class="tweet-sample">
                <vue-tweet id="1069893232727875585" />
              </div>
            </div>
            <div class="column is-one-quarter">
              <div class="tweet-sample">
                <vue-tweet id="1062351482073309184" />
              </div>
            </div>
            <div class="column is-one-quarter">
              <div class="tweet-sample">
                <vue-tweet id="1060554713278619649" />
              </div>
            </div>
            <div class="column is-one-quarter">
              <div class="tweet-sample">
                <vue-tweet id="1060448795333287936" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { Tweet } from 'vue-tweet-embed'

export default {
  name: 'Tweet',
  components: { 'VueTweet': Tweet }
}
</script>

<style lang="scss">
.twitter-tweet {
  margin: 0 !important;
}
</style>
<style lang="scss" scoped>
.tweet {
  background-color: #E7E7EA !important;
  display: flex !important;
  align-items: center;

  .container {
    display: flex !important;
    justify-content: space-around;
    flex-direction: column;
    min-height: 100vh;
  }
  .title {
    color: #464769;
    b {
      color: #000;
    }
  }

  .subtitle {
    span {
      color: gray(700);
    }
    a {
      color: state(primary);
    }
  }

  .bottom-based {
    .column {
      margin-top: auto;
    }
  }

  .columns + .columns {
    margin-top: 4rem;
  }

  .tweet-sample {
    width: 100%;
    border-radius: .5rem;
    background-color: #fff;
    box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.04);
    padding: 0;
    text-align: left;
    .twitter-tweet {
      margin: 0;
    }
  }
}
</style>
