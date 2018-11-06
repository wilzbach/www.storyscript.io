<template>
  <div class="section">
    <div class="container">
      <div class="columns">
        <div class="column is-one-third platform-head text--center">
          <p><b>Hub</b> is a lorem ipsum dolor sit, constur adipiscing elit, sed.</p>
        </div>
        <div class="column is-one-third platform-head text--center">
          <p><b>Storyscript</b> is an intuitive <b>DSL</b> that ties together microservices with <b>high-transparency.</b></p>
        </div>
        <div class="column is-one-third platform-head text--center">
          <p><b>Dashboard</b> is a lorem ipsum dolor sit, constur adipiscing elit, sed.</p>
        </div>
      </div>
      <div class="columns">
        <div class="column is-full text--center">
          <h3>Work in progress</h3>
        </div>
      </div>
    </div>
    <!-- <div class="platform" /> -->
  </div>
</template>

<script>
export default {
  name: 'Platform'
}
</script>

<style lang="scss" scoped>
.align-items--flex-end {
  @include breakpoint(m) {
    align-items: flex-end !important;
  }
}
.platform {
  position: relative;
  display: block;
  max-width: 100%;
  width: 100%;
  height: 1240px;
  background-image: url('~@/assets/img/platform.svg');
  background-position: top center;
  background-size: contain;
  background-repeat: no-repeat;
}

.platform-head {
  border-radius: .5rem;
  padding: .8rem 2rem;
  border: 1px solid gray(400);
  position: relative;
  max-width: 300px;
  font-size: 1.2rem;
  & + .platform-head {
    @include breakpoint(m) {
      margin-left: 10rem;
    }
  }
  &::after {
    content: '';
    width: 20px;
    height: 20px;
    background: #fff;
    border-right: 1px solid gray(400);
    border-bottom: 1px solid gray(400);
    border-radius: 0;
    transform: rotate(45deg);
    position: absolute;
    left: calc(50% - 11px);
    bottom: -11px;
  }
}
</style>
