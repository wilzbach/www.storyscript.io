<template>
  <div class='container level-item'>
    <div>
      <img :src="image" :style="{ width: '142px', marginBottom: 0, objectFit: 'cover' }"/>
      <div :style="{
        marginTop: '1em',
      }">
        <strong>{{name}}</strong>
        <p :style="{
          marginBottom: '0.6em',
          marginTop: '0.2em',
        }">{{role}}</p>
        <a v-if="twitterHandle" :href="`https://twitter.com/${twitterHandle}`">
          <div :style="{
            width: '14px',
            height: '14px',
            margin: 0,
            fill: '#AFAFAF',
          }" v-html="twitterLogo"/>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import twitterLogo from '../assets/images/twitter_logo.svg'

export default {
  props: ['name', 'role', 'twitterHandle', 'image'],
  data() {
    return {
      twitterLogo,
    }
  },
}
</script>

<style scoped>
.container {
  @media (max-width: 768px) {
    text-align: center;
  }
}
</style>
