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

<style lang="scss" scoped>
form.input-beta {
  background-color: #151734;
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  height: 4rem;
  border-radius: 2rem;
  input,
  button {
    font-size: 1.1rem;
    border: none;
    outline: none;
    background: none;
    color: color(light);
  }

  button {
    @include breakpoint(max s) { font-size: 0; }
    svg {
      height: 0;
      @include breakpoint(max s) {
        height: .5rem;
        fill: none;
        stroke: color(light);
        stroke-width: 4px;
        fill-rule: evenodd;
      }
    }
  }

  &.error {
    animation: shake 0.82s cubic-bezier(.36,.07,.19,.97) both;
    transform: translate3d(0, 0, 0);
    backface-visibility: hidden;
    perspective: 1000px;
  }

  @keyframes shake {
    10%, 90% { transform: translate3d(-1px, 0, 0) }
    20%, 80% { transform: translate3d(2px, 0, 0) }
    30%, 50%, 70% { transform: translate3d(-4px, 0, 0) }
    40%, 60% { transform: translate3d(4px, 0, 0) }
  }

  input {
    margin: 0;
    padding: 1rem 1rem 1rem 1.5rem;
    &:-webkit-autofill {
      &,
      &:hover,
      &:focus {
        -webkit-text-fill-color: color(light);
        transition: background-color 5000s ease-in-out 0s;
        background: none !important;
      }
    }
  }

  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  button {
    height: 3.5rem;
    background-color: #5805FC;
    border-radius: 1.75rem;
    margin-right: 0.25rem;
    padding: 0 1.5rem;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.1s ease-in-out;

    &.loading {
      background-color: #464769 !important;
      img {
        padding: 0 1rem;
        animation: rotate 3s infinite linear;
      }
    }

    &:hover {
      background-color: #731EEA;
    }

    &:active, &:focus {
      background-color: #4A00DC;
      // transform: scale(1.05);
    }
  }
}
</style>
