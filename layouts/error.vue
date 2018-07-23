<template>
  <div>
    <max-width :style="{
      backgroundColor: 'white',
      textAlign: 'center',
      padding: '2em 0',
    }">
      <div class="text-container" v-if="error.statusCode === 404">
        <h1>404</h1>
        <h3>Oops. The page you were looking for doesn't exist.</h3>
        <p>You may have mistyped the address or the page may have moved</p>
      </div>

      <div class="text-container" v-else>
        <h1>An error occurred</h1>
      </div>

      <nuxt-link to='/'><a-button color="white">Go to homepage</a-button></nuxt-link>
    </max-width>
  </div>
</template>

<script>
export default {
  props: ['error'],
}
</script>

<style scoped lang="styl">
.text-container
  margin-bottom 1rem
</style>
