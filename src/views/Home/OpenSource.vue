<template>
  <section class="open-source">
    <div class="container">
      <h3 class="is-size-3 has-text-dark">Asyncy is <b>open-source.</b></h3>
      <p class="is-size-6 has-text-dark">
        A vendor-neutral application development ecosystem to run on <br>
        <b>any cloud</b>, <b>on-premise</b> or the <b>Asyncy Cloud.</b>
      </p>
      <a-boxed class="boxed">
        <div class="columns is-vcentered">
          <div class="column is-one-fifth logo linux-foundation" />
          <div class="column is-one-fifth logo cnc-foundation" />
          <div class="column is-two-fifths is-offset-one-fifth">
            <h5 class="is-size-5 has-text-dark has-text-left">
              A proud member of <br>CNCF and Linux Foundation.
            </h5>
          </div>
        </div>
      </a-boxed>
      <p class="is-size-6 has-text-gray-2">
        <span>Review source and contribute on </span>
        <a
          href="//github.com/asyncy"
          target="_blank"
          class="is-primary has-text-weight-bold"
          title="Github Asyncy">GitHub</a>
      </p>
    </div>
  </section>
</template>

<script>
export default {
  name: 'OpenSource'
}
</script>

<style lang="scss" scoped>
.open-source {
  margin: 10rem 0;
  @include mobile {
    margin: 0;
  }

  h3 {
    margin-bottom: 1rem;
  }

  .boxed {
    margin-top: 3rem;
    margin-bottom: 5rem;
    .columns {
      padding: 0rem 3rem;
    }
  }

  .logo {
    height: 48px;
    margin: 2rem 0;
    background-position: left;
    background-repeat: no-repeat;
    background-size: contain;
    &.linux-foundation { background-image: url('~@/assets/img/linux-foundation.png') }
    &.cnc-foundation { background-image: url('~@/assets/img/cnc-foundation.png') }
  }
}
</style>
