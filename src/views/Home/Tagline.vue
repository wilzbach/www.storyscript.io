<template>
  <div
    v-waves
    class="section tagline">
    <div class="container">
      <div class="columns is-centered">
        <div class="column is-one-half">
          <h3>This is Orchestration</h3>
          <div class="orchestration">
            <img
              src="@/assets/img/O1.svg"
              alt="orchestration example">
            <img
              src="@/assets/img/O2.svg"
              alt="orchestration example">
            <img
              src="@/assets/img/O3.svg"
              alt="orchestration example">
          </div>
        </div>
        <div class="column is-one-half">
          <h3>This is Choreography</h3>
          <div class="choreography">
            <img
              src="@/assets/img/C1.svg"
              alt="choreography example">
          </div>
          <h3 class="light text--center">
            Join our mission to build smarter applications.
          </h3>
          <form-beta variant="neutral" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Tagline'
}
</script>

<style lang="scss" scoped>
.tagline {
  margin-top: 140px !important;
}

h2 {
  margin-top: 2rem;
  svg {
    margin-bottom: -.4rem;
    margin-right: .5rem;
  }
}

.orchestration {
  position: relative;
  img {
    width: 700px;
    position: relative;
    margin-bottom: -400px;
    margin-left: 50px;
    @include breakpoint(max s) { margin-bottom: -200px; margin-left: 0px; }
    @include breakpoint(max m) { margin-left: 20px; }
  }
  :first-child {
    margin-left: 0px;
  }
  :last-child {
    margin-bottom: 50px;
    margin-left: -100px;
    @include breakpoint(max s) { margin-left: 0px; }
    @include breakpoint(max m) { margin-left: -50px; }
  }
}

.choreography {
  position: relative;
  height: 200px;
  margin-bottom: 0;
  @include breakpoint(m) { margin-bottom: 3rem }
  img {
    margin: auto;
    vertical-align: middle;
    position: absolute;
    width: 600px;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
  }
}
</style>
