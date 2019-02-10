<template>
  <div class="home">
    <home-problem />
    <home-solution />
    <home-open-source />
    <home-tweet />
    <a-join internal />
  </div>
</template>

<script>
import HomeProblem from './Problem'
import HomeSolution from './Solution'
import HomeOpenSource from './OpenSource'
import HomeTweet from './Tweet'

export default {
  name: 'Home',
  components: {
    HomeProblem,
    HomeSolution,
    HomeOpenSource,
    HomeTweet
  }
}
</script>
