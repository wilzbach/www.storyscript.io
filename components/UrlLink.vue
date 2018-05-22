<template>
  <a v-if="(to || '').startsWith('http')" :href="to" target="_blank"><slot></slot></a>
  <nuxt-link v-else :to="to"><slot></slot></nuxt-link>
</template>

<script>
export default {
  props: ['to'],
}
</script>
