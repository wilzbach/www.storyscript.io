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
