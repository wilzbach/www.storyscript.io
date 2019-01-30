<template>
  <div class="home">
    <home-jumbo />
    <home-problem />
    <home-solution />
    <home-open-source />
    <home-tweet />
    <home-join />
    <home-footer />
  </div>
</template>

<script>
import HomeJumbo from './Jumbo'
import HomeProblem from './Problem'
import HomeSolution from './Solution'
import HomeOpenSource from './OpenSource'
import HomeTweet from './Tweet'
import HomeJoin from '@/components/Join'
import HomeFooter from '@/components/Footer'

export default {
  name: 'Home',
  components: {
    HomeJumbo,
    HomeProblem,
    HomeSolution,
    HomeOpenSource,
    HomeTweet,
    HomeJoin,
    HomeFooter
  }
}
</script>
