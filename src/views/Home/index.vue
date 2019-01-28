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
import HomeJoin from './Join'
import HomeFooter from './Footer'

export default {
  name: 'HomeNew',
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

<style lang="css">
#asyncy .SandboxRoot .CallToAction {
  display: none !important;
}
</style>
