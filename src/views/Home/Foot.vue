<template>
  <div class="foot stars">
    <a-stars absolute />
    <div class="section outro">
      <scene variant="outro" />
      <div class="container">
        <h2 class="light text--light z-2">WE ARE <b>OPEN</b> SOURCE</h2>
        <p class="text--bold text--light text--large text--spaced z-2">Platform &middot; Language &middot; Standards &middot; Cloud</p>
      </div>
      <div class="container">
        <h3 class="text--light light z-2">
          Have questions? Read our
          <a-link
            state="primary"
            href="#">
            FAQ
          </a-link>
          to learn more.
        </h3>
      </div>
      <a-footer dark />
      <!-- <div class="rocket">
        <a href="#top">
          <rocket />
        </a>
      </div> -->
    </div>
  </div>
</template>

<script>
import Rocket from '@/components/Rocket'

export default {
  name: 'Foot',
  components: { Rocket }
}
</script>

<style lang="scss" scoped>
.foot {
  overflow: hidden;
}
</style>
