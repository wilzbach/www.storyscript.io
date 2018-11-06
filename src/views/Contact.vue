<template>
  <div class="container contact">
    <div class="head">
      <!-- <scene
        variant="about"
        fixed /> -->
      <div class="columns is-mobile is-centered">
        <div class="column is-three-quarters">
          <h1 class="text--center">Contact</h1>
          <h3 class="text--center">Get in touch and let us know how we can help.</h3>
        </div>
      </div>
    </div>
    <div
      v-waves
      class="section">
      <div class="container">
        <div class="columns is-centered">
          <div class="column is-one-quarter">
            <h3>Sales</h3>
            <p>We'd love to talk about how we can work together.</p>
            <a-button
              state="primary"
              size="l"
              outline
              @click="open('//asyncy.typeform.com/to/GAr52V')">Contact Sales</a-button>
          </div>
          <div class="column is-one-quarter">
            <h3>Help & Support</h3>
            <p>We're here to help with any questions or concerns.</p>
            <a-button
              state="primary"
              size="l"
              outline
              @click="open('//docs.asyncy.com/support/')">Contact Support</a-button>
          </div>
          <div class="column is-one-quarter">
            <h3>Media & Press</h3>
            <p>Get asyncy news, company info, and media resources.</p>
            <a-button
              state="primary"
              size="l"
              outline
              @click="open('//asyncy.typeform.com/to/GAr52V')">Contact Press</a-button>
          </div>
        </div>
      </div>
    </div>
    <a-footer
      dark
      internal />
  </div>
</template>

<script>
export default {
  name: 'Contact',
  methods: {
    open: function (url) {
      window.open(url, '_blank')
    }
  }
}
</script>

<style lang="scss">
.contact {
  display: block;
  z-index: 3;

  .scene {
    max-width: 100%;
  }

  .head {
    max-width: 100%;
    // min-height: 80vh;
    // position: absolute;
    .columns {
      // position: fixed;
      margin: 0 auto;
      text-align: center;
      width: 100%;
    }
  }

p { margin-bottom: 2rem; }

  .section {
    margin-top: 200px !important;
    padding-bottom: 7.5rem !important;
  }

  .footer {
    background-color: color(dark) !important;
  }

  .column {
    padding: 0 3.5rem;
    h3 { @include breakpoint (max m) { margin-top: 2rem } }
    p { text-align: justify; }
    button {
      margin-top: 1.5rem;
    }
  }
}
</style>
