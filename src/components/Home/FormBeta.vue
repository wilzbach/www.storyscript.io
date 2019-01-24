<template>
  <form
    :class="{ error, success }"
    action
    class="input-beta"
    @submit.prevent="submit">
    <input
      v-model="email"
      name="beta-email"
      placeholder="Enter your email"
      type="email"
      value>
    <button
      :class="{ loading: sending }"
      type="submit"
      class="submit">
      <template v-if="!sending">
        {{ success ? 'Thanks!' : 'Join Beta' }}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 45.81 18.82">
          <path
            d="M1502,4202l8,7.99-8,8.01"
            transform="translate(-1467 -4200.59)" />
          <path
            d="M1467,4210l42-.01"
            transform="translate(-1467 -4200.59)" />
        </svg>
      </template>
      <img
        v-else
        src="@/assets/img/loading.svg">
    </button>
  </form>
</template>

<script>
export default {
  name: 'FormBeta',
  data: () => ({
    email: '',
    sending: false,
    success: false,
    error: false
  }),
  computed: {
    isEmail: function () {
      return this.email.trim().length === 0 ? undefined : (/^(([^<>()\\[\]\\.,;:\s@\\"]+(\.[^<>()\\[\]\\.,;:\s@\\"]+)*)|(\\".+\\"))@(([^<>()[\]\\.,;:\s@\\"]+\.)+[^<>()[\]\\.,;:\s@\\"]{2,})$/i).test(this.email)
    }
  },
  watch: {
    success: function () { if (this.success) { setTimeout(() => { this.success = false }, 2000) } },
    error: function () { if (this.error) { setTimeout(() => { this.error = false }, 2000) } }
  },
  methods: {
    submit: function () {
      if (this.sending) return
      if (!this.isEmail) {
        this.error = true
      } else {
        this.sending = true
        if (typeof window['clevertap'] !== 'undefined') {
          window['clevertap'].profile.push({ 'Site': { 'Email': this.email } })
          window['clevertap'].event.push('Interested in beta', { 'Source': 'Website' })
          this.success = true
          this.email = ''
          setTimeout(() => {
            this.sending = false
          }, 500)
        } else {
          this.sending = false
          this.error = true
        }
      }
    }
  }
}
</script>
