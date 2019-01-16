<template>
  <section class="section join-crew">
    <div class="background">
      <stars-particles />
      <div class="gradient-stars" />
    </div>
    <div class="container">
      <div class="columns is-mobile">
        <div class="column is-full">
          <h4 class="content">
            <a
              href="#"
              target="_blank"
              title="Join our crew">Join our crew</a>
            <span> or learn about our </span>
            <a
              href="#"
              target="_blank"
              title="Asyncy Champion Initiative">Asyncy Champion Initiative</a>
            <span>.</span>
          </h4>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import StarsParticles from '@/components/Stars'

export default {
  name: 'JoinCrew',
  components: { StarsParticles }
}
</script>

<style lang="scss" scoped>
.join-crew {
  margin-top: -15rem !important;
  padding-top: 10rem !important;
  z-index: 0 !important;

  .background {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: block;
    background-color: #000;
    z-index: -1;
    .gradient-stars {
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      display: block;
      position: absolute;
      align-items: center;
      background: linear-gradient(60deg, rgba(0, 0, 0, .5), rgba(darken(state(primary), 10%), .25)) repeat-x
    }
  }
  .container {
    padding: 1rem 2rem !important;
  }
  .content {
    padding: 0 !important;
    span {
      color: #fff;
      font-weight: 200 !important;
    }
    a {
      color: #fff;
      font-weight: bold !important;
      text-decoration: underline;
    }
  }
}
</style>
