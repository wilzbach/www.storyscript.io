<template>
  <div class="home">
    <home-problem />
    <home-solution />
    <home-open-source />
    <home-tweet />
    <home-join />
  </div>
</template>

<script>
import HomeProblem from './Problem'
import HomeSolution from './Solution'
import HomeOpenSource from './OpenSource'
import HomeTweet from './Tweet'
import HomeJoin from '@/components/Join'

export default {
  name: 'Home',
  components: {
    HomeProblem,
    HomeSolution,
    HomeOpenSource,
    HomeTweet,
    HomeJoin
  }
}
</script>
