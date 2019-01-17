<template>
  <section class="section jumbo-about">
    <div class="background">
      <stars-particles />
      <div class="gradient-stars" />
    </div>
    <a-nav
      :items="[
        { name: 'BLOG', link: '//asyncy.com/blog', external: true },
        { name: 'DOCUMENTATION', link: '//docs.asyncy.com', external: true },
        { name: 'ABOUT', link: '/about' },
        { name: 'CONTACT', link: '' },
        { name: 'JOIN OUR CREW!', link: '//angel.co/asyncy/jobs', external: true, color: 'pink', hideDecoration: true }
      ]"
      :transparent="true"
      effect="dark"
      logo="light"
      @brand-click="$router.push({ name: 'home' })" />
    <div class="container">
      <div class="columns">
        <div class="column is-full text--center">
          <h3 class="subtitle-bold">ABOUT US</h3>
          <h1 class="title">Our Story</h1>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import StarsParticles from '@/components/Stars'
import FormBeta from '@/components/Home/FormBeta'

export default {
  name: 'Jumbo',
  components: { StarsParticles, FormBeta }
}
</script>

<style lang="scss">
a.nav-link {
  font-size: 0.75rem !important;
  font-weight: bold !important;
  letter-spacing: 0.11rem;
  text-transform: uppercase;
}
</style>
<style lang="scss" scoped>
.jumbo-about {
  background-color: darken(color(dark), 5%) !important;
  min-height:  60vh;

  .title {
    display: inline-block;
    padding-top: 0 !important;
    color: #fff;
    font-size: 5rem !important;
    position: relative;
    @include breakpoint(max m) {
      font-size: 4rem !important;
    }
    @include breakpoint(max s) {
      font-size: 3rem !important;
    }

    &:before, &:after {
      display: block;
      @include breakpoint(max s) {
        display: none;
      }
      position: absolute;
      top: -5rem;
      bottom: 0;
      font-size: 12rem;
      font-weight: 200;
    }
    &:before {
      content: '/';
      left: -12rem;
    }
    &:after {
      content: '/';
      right: -12rem;
    }
  }

  .separator-dot {
    width: .75rem;
    height: .75rem;
    background-color: gray(100);
    border-radius: .75rem;
    margin: auto;
    animation: bounce 1s;
    animation-direction: alternate;
    animation-timing-function: cubic-bezier(.5, .05, 1, .5);
    animation-iteration-count: infinite;
  }

  .arrow-down {
    margin: auto;
    svg {
      animation: float 6s ease-in-out infinite;
      fill: none;
      stroke: gray(100);
      stroke-linecap: round;
      stroke-linejoin: round;
      stroke-width: .2rem;
      fill-rule: evenodd;
    }
  }

  .jumbo-end {
    .hide-s {
      @include breakpoint(max s) {
        display: none;
      }
    }

    h4 {
      color: gray(100);
    }
  }

  @keyframes float {
    0% {
      transform: translatey(0px);
    }
    50% {
      transform: translatey(-10px);
    }
    100% {
      transform: translatey(0px);
    }
  }

  @keyframes bounce {
    0% { transform: translate3d(0, 0, 0) }
    100% { transform: translate3d(0, 20px, 0) }
  }

  .container {
    padding: 4rem 1rem 1rem !important;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: absolute !important;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 9 !important;

    .columns:not(.jumbo-end) {
      margin: auto 0;
    }
  }

  .subtitle-bold {
    padding-bottom: 0 !important;
    font-weight: bold;
    font-size: .8rem !important;
    letter-spacing: .2rem;
    color: #fff;
  }

  h3.subtitle {
    // font-size: 2rem !important;
    color: gray(500);
    b {
      color: color(light);
    }
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
