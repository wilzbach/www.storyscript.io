<template>
  <section class="section jumbo">
    <div class="background">
      <stars-particles/>
      <div class="gradient-stars"/>
    </div>
    <a-nav
      :items="[
        { name: 'BLOG', link: '//asyncy.com/blog', external: true },
        { name: 'DOCUMENTATION', link: '//docs.asyncy.com', external: true },
        { name: 'JOIN OUR CREW!', link: '//angel.co/asyncy/jobs', external: true }
      ]"
      :transparent="true"
      effect="dark"
      logo="light"
      @brand-click="$router.push({ name: 'home' })"
    />
    <div class="container">
      <div class="columns">
        <div class="column is-full text--center">
          <h3 class="subtitle-bold">DEVELOPER MARKETPLACE RUNTIME</h3>
          <div class="head">
            <span class="bracket bracket--left">
              <img src="@/assets/img/bracket.svg">
            </span>
            <h1 class="title">Asyncy amplifies
              <br>the developer
            </h1>
            <span class="bracket bracket--right">
              <img src="@/assets/img/bracket.svg">
            </span>
          </div>
          <form-beta/>
        </div>
      </div>
      <div class="columns jumbo-end">
        <div class="column is-full">
          <div class="separator-dot hide-s"/>
          <h4 class="light hide-s">Discover our mission to raise any developer
            <br>into a 10x developer.
          </h4>
          <div class="arrow-down">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 36.22 21.18"
            >
              <path
                d="M2001.1,2887.88l-15.11,15.22-15.11-15.22"
                transform="translate(-1967.91 -2884.91)"
              />
            </svg>
          </div>
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
.navbar-nav {
  .nav-item:last-child {
    a:before {
      background-color: color(cyan) !important;
    }
  }
}
</style>
<style lang="scss" scoped>
.jumbo {
  background-color: darken(color(dark), 5%) !important;
  min-height: 100vh;

  .title {
    padding-top: 0 !important;
    color: #fff;
    font-size: 5rem !important;
    position: relative;

    @include breakpoint(max m) {
      font-size: 4rem !important;
    }

    @include breakpoint(max s) {
      font-size: 2.6rem !important;
    }
  }

  .head {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .bracket {
    font-size: 8rem;
    margin: 0 40px;
    font-weight: 400 !important;
    color: color(cyan);

    @include breakpoint(max s) {
      display: none;
    }

    img {
      display: block;
    }

    &.bracket--right img {
      transform: rotate(180deg);
    }
  }

  .separator-dot {
    width: 0.75rem;
    height: 0.75rem;
    background-color: gray(100);
    border-radius: 0.75rem;
    margin: auto;
    animation: bounce 1s;
    animation-direction: alternate;
    animation-timing-function: cubic-bezier(0.5, 0.05, 1, 0.5);
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
      stroke-width: 0.2rem;
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
    0% {
      transform: translate3d(0, 0, 0);
    }
    100% {
      transform: translate3d(0, 20px, 0);
    }
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
    font-size: 0.8rem !important;
    letter-spacing: 0.2rem;
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
    background-color: rgb(11, 11, 32);
    z-index: -1;
    .gradient-stars {
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      display: block;
      position: absolute;
      align-items: center;
      // background: linear-gradient(
      //     60deg,
      //     rgba(0, 0, 0, 0.5),
      //     rgba(darken(state(primary), 30%), 0.25)
      //   )
      //   repeat-x;
    }
  }
}
</style>
