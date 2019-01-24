<template>
  <form
    :class="variant"
    class="form--beta columns"
    @submit.prevent="submit">
    <a-input
      v-model="email"
      :input-classes="variant !== 'neutral' && variant !== 'dark' ? 'text--light' : ''"
      :valid="isEmail && !error"
      :error="error ? 'Something went wrong. Try again' : 'Please enter a valid email address'"
      class="column"
      type="email"
      size="l"
      name="beta-email"
      placeholder="Enter Email" />
    <div class="column is-one-third">
      <a-button
        :state="success || error ? 'neutral' : variant === 'neutral' ? 'primary' : 'neutral'"
        :class="{ loading: error, success }"
        type="submit"
        no-shadow
        size="l">
        {{ success ? 'Thanks !' : error ? 'Try again' : 'Join Beta' }}
      </a-button>
    </div>
  </form>
</template>

<script>
export default {
  name: 'Form',
  props: {
    variant: {
      type: String,
      default: undefined,
      validator: v => ['light', 'dark', 'neutral'].includes(v),
      description: 'The input variant (dark|light|neutral)'
    }
  },
  data: () => ({
    email: '',
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
      if (!this.isEmail && this.error) {
        this.error = false
      }
      if (this.isEmail) {
        if (typeof window['clevertap'] !== 'undefined') {
          window['clevertap'].profile.push({ 'Site': { 'Email': this.email } })
          window['clevertap'].event.push('Interested in beta', { 'Source': 'Website' })
        }
        this.success = true
      }
    }
  }
}
</script>

<style lang="scss">
.form--beta {
  z-index: 3;
  margin: 1rem auto !important;
  max-width: 600px;
  width: stretch;

  .form-group {
    min-width: 1px;
    .form-control {
      min-width: 1px;
      font-size: 1.2rem;
    }
  }

  .loading {
    span {
      color: #ffffff;
    }
    &::after {
      animation: spinAround .5s infinite linear;
      border: 2px solid #dbdbdb;
      border-radius: 290486px;
      border-right-color: transparent;
      border-top-color: transparent;
      content: '';
      display: block;
      height: 1em;
      position: relative;
      width: 1em;
      left: 50%;
      margin-left: -.5em;
      margin-top: -.5em;
      position: absolute;
      top: 50%;
      border-color: transparent transparent rgba(0,0,0,.7) rgba(0,0,0,.7)!important;
    }
    &.btn--primary {
      span {
        color: $primary;
      }
      &::after {
        border-color: transparent transparent rgba($light, .7) rgba($light, .7)!important;
      }
    }
  }

  .error {
    span {
      color: $danger;
    }
  }

  .success {
    span {
      color: $success;
    }
  }

  &.light {
    .form-group {
      .form-control, .input-group-append {
        background-color: lighten($dark, 5%);
      }
    }
  }

  &.dark {
    .form-group {
      .form-control, .input-group-append {
        background-color: lighten($light, 5%);
      }
    }
  }
}

@keyframes spinAround {
  0% { transform: rotate(0deg) }
  100% { transform: rotate(360deg) }
}
</style>
