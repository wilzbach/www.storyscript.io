<template>
  <div v-html="logo" :style="{
    width: '180px',
    fill: 'white',
  }"/>
</template>

<script>
import logo from '../assets/images/logo.svg';

export default {
  data() {
    return {
      logo,
    };
  },
}
</script>

<style>
</style>
