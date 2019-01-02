<template>
  <section class="section join-beta">
    <div class="background">
      <stars-particles />
      <div class="gradient-stars" />
    </div>
    <div class="container">
      <div class="columns">
        <div class="column is-half">
          <h3 class="title light">Time to write <b>your story.</b></h3>
        </div>
        <div class="column is-half auto">
          <form-beta />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import StarsParticles from '@/components/Stars'
import FormBeta from '@/components/Home/FormBeta'

export default {
  name: 'JoinBeta',
  components: { StarsParticles, FormBeta }
}
</script>

<style lang="scss" scoped>
.join-beta {
  .title {
    color: #fff;
  }

  .auto {
    margin: auto;
  }

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
}
</style>
