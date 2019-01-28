<template>
  <section class="open-source">
    <div class="container">
      <h3 class="is-size-3 has-text-dark">Asyncy is <b>open-source.</b></h3>
      <p class="is-size-6 has-text-dark">
        A vendor-neutral application development ecosystem to run on <br>
        <b>any cloud</b>, <b>on-premise</b> or the <b>Asyncy Cloud.</b>
      </p>
      <boxed>
        <div class="columns is-vcentered is-centered">
          <div class="column is-one-quarter logo linux-foundation" />
          <div class="column is-one-quarter logo cnc-foundation" />
          <div class="column is-half">
            <h5 class="is-size-5 has-text-dark has-text-left">
              A proud member of <br><b>CNCF and Linux Foundation.</b>
            </h5>
          </div>
        </div>
      </boxed>
      <p class="is-size-6 has-text-gray-2">
        <span>Review source and contribute on </span>
        <a
          href="//github.com/asyncy"
          target="_blank"
          class="is-primary"
          title="Github Asyncy">Github</a>
      </p>
    </div>
  </section>
</template>

<script>
import Boxed from '@/components/Boxed'

export default {
  name: 'OpenSource',
  components: { Boxed }
}
</script>

<style lang="scss" scoped>
.open-source {
  margin: 10rem 0;

  .logo {
    height: 48px;
    margin: 2rem 0;
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    &.linux-foundation { background-image: url('~@/assets/img/linux-foundation.png') }
    &.cnc-foundation { background-image: url('~@/assets/img/cnc-foundation.png') }
  }
}
</style>
