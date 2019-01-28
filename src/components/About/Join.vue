<template>
  <section class="join-beta is-stars">
    <div class="container">
      <div class="columns is-mobile">
        <div class="column is-full">
          <h4 class="content">
            <a-icon icon="rocket" />
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
      <div class="columns story">
        <div class="column is-half">
          <h3 class="title light">Time to write <b>your story.</b></h3>
        </div>
        <div class="column is-half auto">
          <a-form-beta />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'JoinBeta'
}
</script>

<style lang="scss" scoped>
.join-beta {
  margin-top: -15rem !important;
  padding-top: 15rem !important;
  z-index: 0 !important;
}
</style>
