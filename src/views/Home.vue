<template>
  <div class="home">
    <home-jumbo />
    <!-- <home-about-lock /> -->
    <home-problem />
    <!-- <home-problem-why /> need to split problem -->
    <home-solution-lock />
    <home-open-source />
    <home-tweet />
    <!-- <home-join-crew /> -->
    <home-join-beta />
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

<style lang="css">
#asyncy .SandboxRoot .CallToAction {
  display: none !important;
}

.home {
  background-color: #fff;
}
.section {
  background-color: transparent !important;
  background-color: rgba(255, 255, 255, 0);
}
</style>
