<template>
  <form
    ref="form"
    :class="{ 'email-form': 'true', 'success': isSuccess, 'error': isFailure }"
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
        <input
          type="text"
          class='email-input'
          name='email'
          :placeholder="placeholder || 'Email address'"
          v-model="email"
          aria-label="Email"
          :style="Object.assign({
            width: '100%',
          }, inputStyle || {})"/>
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
        <button :class="{ 'is-loading': isLoading }" ref='button' :style="Object.assign({
          width: '160px'
        }, btnStyle || {})" class='primary button'>
          <span>{{ buttonText }}</span>
        </button>
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
  props: ['placeholder', 'inputStyle', 'btnText', 'btnStyle'],
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
