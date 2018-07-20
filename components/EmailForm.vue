<template>
  <form
    ref="form"
    :class="{ 'email-form': 'true', 'success': isSuccess, 'error': isFailure, 'dark': theme === 'dark' }"
    :style="{
      marginBottom: '16px'
    }"
    method="post"
    :action="`https://send.pageclip.co/${pageclipKey}/default`"
    v-on:submit.prevent.stop="onSubmit"
  >
    <div class='columns is-variable is-1' :style="{
      marginBottom: 0,
    }">
      <div class='column' :style="{
        paddingTop: 0,
        paddingBottom: 0,
      }">
        <a-input
          type="text"
          class='email-input'
          name='email'
          :placeholder="placeholder || 'Email address'"
          v-model="email"
          aria-label="Email"
          :style="{
            width: '100%',
          }"/>
        <div v-if="errorMsg" class='error-message' :style="{
          color: '#F74545',
          textAlign: 'left',
          fontSize: '0.8em',
        }">{{errorMsg}}</div>
      </div>
      <div class='column is-narrow' :style="{
        paddingTop: 0,
        paddingBottom: 0,
        textAlign: 'center',
      }">
        <a-button color="white" :class="{ 'is-loading': isLoading, 'form-button': true }" ref='button'>
          {{ buttonText }}
        </a-button>
      </div>
    </div>
  </form>
</template>

<script>
import validate from 'validate.js';
import axios from 'axios';

const formConstraints = {
  email: {
    presence: true,
    email: true,
  }
};

export default {
  props: ['placeholder', 'btnText', 'theme' ],
  data() {
    return {
      pageclipKey: process.env.pageclipKey,
      isSuccess: false,
      isFailure: false,
      isLoading: false,
      errorMsg: '',
      email: '',
      buttonText: this.btnText || 'Join the beta',
    }
  },
  methods: {
    onSubmit(e) {
      this.isLoading = true;
      this.isSuccess = false;
      this.isFailure = false;
      this.errorMsg = '';
      this.buttonText = this.$props.btnText || 'Join the beta';

      const hasError = validate({ email: this.email }, formConstraints);

      if (hasError) {
        this.isLoading = false;
        this.isFailure = true;
        this.errorMsg = 'Please enter a valid email address';
      } else {
        axios.post(e.target.action, { email: this.email }, { headers: {
          'X-REQMETHOD': 'send-v1',
        }}).then(
          () => {
            // errors out because pageclip insists on redirecting us, which then fails
            this.buttonText = 'Thanks!'
            this.isSuccess = true;
            this.isLoading = false;
            this.email = '';
          },
          (err) => {
            this.isFailure = true;
            this.isLoading = false;
            this.errorMsg = 'There was an error submitting your data. Please try again.';
          }
        );
      }
    },
  },
};
</script>

<style scoped lang="styl">
@import "../node_modules/bulma-stylus/stylus/utilities/_all.styl";

.button.form-button
  position relative
  width 160px
  color #515CF9
.button.form-button:hover
  color #111
  border-color #8F8F8F
  background-color white

.dark
  .button.form-button
    color #111
  .button.form-button:hover
    color #515CF9

.button.is-loading
  color transparent !important
  pointer-events none

.button.is-loading::after
  loader()
  center(1em)
  border-color transparent transparent rgba(0,0,0,.7) rgba(0,0,0,.7) !important

.email-form
  &.error .email-input
    border-color #F74545
  &.success .email-input
    border-color #3EC28F
  &.success button
    color #3EC28F !important
  .pageclip-form__submit--success
    color #3EC28F !important
</style>
