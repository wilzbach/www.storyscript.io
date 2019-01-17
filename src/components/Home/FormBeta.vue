<template>
  <form
    action=""
    class="input-beta"
    @submit.prevent="submit">
    <input
      v-model="email"
      name="beta-email"
      placeholder="Enter your email"
      type="email"
      value="">
    <button
      :class="{ loading: sending, error, success }"
      type="submit"
      class="submit">
      <template v-if="!sending">Join Beta</template>
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
  methods: {
    submit: function () {
      if (this.sending) return
      this.sending = true
      this.error = false
      this.success = false
      if (!this.isEmail) {
        this.error = true
      } else {
        if (typeof window['clevertap'] !== 'undefined') {
          window['clevertap'].profile.push({ 'Site': { 'Email': this.email } })
          window['clevertap'].event.push('Interested in beta', { 'Source': 'Website' })
        }
        this.success = true
      }
      this.sending = false
    }
  }
}
</script>

<style lang="scss" scoped>
form.input-beta {
  background-color: darken(color(dark), 8%);
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  height: 4rem;
  border-radius: 2rem;
  input, button {
    font-size: 1.1rem;
    border: none;
    outline: none;
    background: none;
    color: color(light);
  }

  input {
    margin: 0;
    padding: 1rem 1rem 1rem 1.5rem;
    &:-webkit-autofill {
      &, &:hover, &:focus {
        -webkit-text-fill-color: color(light);
        transition: background-color 5000s ease-in-out 0s;
        background: none !important;
      }
    }
  }

  @keyframes rotate {
    from { transform: rotate(0deg) }
    to { transform: rotate(360deg) }
  }

  button {
    height: 3.5rem;
    background-color: state(primary);
    border-radius: 1.75rem;
    margin-right: .25rem;
    padding: 0 1.5rem;
    font-weight: bold;
    cursor: pointer;
    transition: all .1s ease-in-out;

    &.loading {
      background-color: #464769;
      img {
        padding: 0 3rem;
        animation: rotate 3s infinite linear;
      }
    }
    &:hover {
      background-color: lighten(state(primary), 5%);
    }
    &:active {
      transform: scale(1.05);
    }
  }
}
</style>
