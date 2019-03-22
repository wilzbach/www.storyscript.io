<template>
  <div class="home">
    <home-get-started />
    <home-use-cases />
    <home-open-source />
    <home-benefits />
    <home-tweet />
    <a-join is-paddingless />
  </div>
</template>

<script>
import HomeGetStarted from './GetStarted'
import HomeUseCases from './UseCases'
import HomeOpenSource from './OpenSource'
import HomeBenefits from './Benefits'
import HomeTweet from './Tweet'

export default {
  name: 'Home',
  components: {
    HomeGetStarted,
    HomeUseCases,
    HomeOpenSource,
    HomeBenefits,
    HomeTweet
  }
}
</script>
