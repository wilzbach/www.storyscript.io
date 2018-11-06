<template>
  <a-nav
    :items="[
      { name: 'Documentation', link: '//docs.asyncy.com', external: true },
      { name: 'About', link: '/about' },
      { name: 'Contact', link: '/contact' },
      { name: 'We are Hiring!', link: '//angel.co/asyncy/jobs', external: true, color: 'pink', hideDecoration: true }
    ]"
    :transparent="!dark && !needScroll"
    :style="`background-color: rgba(48, 50, 61, ${bgOpacity})`"
    effect="dark"
    logo="light"
    type="dark"
    class="topnav"
    tag="Beta"
    tag-state="primary"
    @brand-click="$router.push({ name: 'home' })" />
</template>

<script>
export default {
  name: 'Navbar',
  inject: ['client'],
  props: {
    dark: {
      type: Boolean,
      default: false,
      description: 'put the dark navbar'
    }
  },
  computed: {
    needScroll: function () {
      return !this.dark && this.client.screen.scrollTop > this.client.screen.topHeight - 139
    },
    bgOpacity: function () {
      let o = this.client.screen.scrollTop / (this.client.screen.topHeight - 69.5)
      return o > 1 ? 1 : o
    }
  }
}
</script>
