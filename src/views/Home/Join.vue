<template>
  <section class="join-beta is-stars">
    <div class="container">
      <p class="is-size-6 has-text-white has-text-centered is-vcentered">
        <a-icon
          icon="rocket"
          height="18px" />
        <a
          href="#"
          target="_blank"
          class="has-text-info has-text-weight-bold"
          title="Join our crew">Join our crew</a>
        <span> or learn about our </span>
        <a
          href="#"
          target="_blank"
          class="has-text-info has-text-weight-bold"
          title="Asyncy Champion Initiative"
        >Asyncy Champion Initiative</a>
        <span>.</span>
      </p>
      <div class="columns story">
        <div class="column is-half has-text-white">
          <h4 class="is-size-4">
            Time to write
            <b>your story.</b>
          </h4>
        </div>
        <div class="column is-half">
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
  margin-top: -10rem !important;
  padding-top: 15rem !important;
  z-index: 0 !important;

  .story {
    padding: 10rem 0;
  }

  .form-beta {
    margin-right: 0;
  }
}
</style>
