<template>
  <div class="home">
    <home-jumbo />
    <home-about-lock />
    <home-problem />
    <!-- <home-problem-why /> need to split problem -->
    <home-solution-lock />
    <home-open-source />
    <home-tweet />
    <home-join-beta />
    <home-join-crew />
    <home-footer />
  </div>
</template>

<script>
import Components from '@/components/Home'
import LockRoom from '@/components/LockRoom'

export default {
  name: 'HomeNew',
  components: { LockRoom, ...Components }
}
</script>
