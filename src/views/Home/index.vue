<template>
  <div class="home">
    <home-jumbo />
    <a-navbar
      :items="menu"
      class="nav-stick"
      @logo="$router.push({ name: 'home' })"
    />
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
  },
  data: () => ({
    menu: [
      { name: 'Blog', link: '/blog' },
      { name: 'Documentation', link: '//docs.asyncy.com' },
      { name: 'About', route: { name: 'about' } },
      { name: 'Contact', route: { name: 'contact' } },
      { name: 'Join our Crew!', link: '//angel.co/asyncy/jobs' }
    ]
  })
}
</script>

<style lang="scss">
.nav-stick {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  margin-top: 0;
  height: 3rem;
  background-color: $white;
  z-index: 1010;
}

section {
  position: relative;
  z-index: 1000;
  &.jumbo { z-index: 1100 }
}
</style>
