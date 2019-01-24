<template>
  <a-jumbo
    size="fullheight"
    into="bracket"
    title="Asyncy amplifies the developer"
    small="developer marketplace runtime">
    <a-navbar
      slot="header"
      :items="[{ name: 'Blog' }, { name: 'Documentation' }]"
      dark />
    <div class="columns is-centered is-desktop">
      <div class="column is-half">
        <a-form-beta />
      </div>
    </div>
    <div
      slot="footer"
      class="has-text-centered">
      <p class="is-size-7">Discover our mission to raise any developer <br>into a 10x developer.</p>
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
  </a-jumbo>
</template>

<script>
export default {
  name: 'JumboHome'
}
</script>

<style lang="scss" scoped>
.arrow-down {
  margin: .5rem auto;
  svg {
    animation: float 2s ease-in-out infinite;
    fill: none;
    stroke: $white;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-width: 0.2rem;
    fill-rule: evenodd;
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
</style>
