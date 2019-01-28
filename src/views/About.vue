<template>
  <div class="home">
    <about-jumbo />
    <about-mission />
    <about-why />
    <about-team />
    <about-office />
    <about-join />
    <about-footer />
  </div>
</template>

<script>
import Components from '@/components/About'
// import LockRoom from '@/components/LockRoom'

export default {
  name: 'HomeNew',
  components: { ...Components }
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
