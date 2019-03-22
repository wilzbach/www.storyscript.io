<template>
  <a-jumbo
    :size="current.size"
    :into="current.into"
    :small="current.small"
    :title="current.title"
  >
    <a-navbar
      slot="header"
      :items="menu"
      dark
      @logo="$router.push({ name: 'home' })"
    />
    <template v-if="current.name === 'home'">
      <a-container h-centered>
        <a-div
          size="half"
          padding="normal"
        >
          <p class="is-size-6 has-text-gray-4 has-text-centered">High-level programming that strings together microservices and functions intuitively in a beautiful story of data.</p>
        </a-div>
      </a-container>
      <a-form-beta class="form-beta" />
    </template>
    <template v-else-if="current.name === 'loading'">
      <template slot="title">
        <i class="mdi mdi-spin mdi-loading" />
      </template>
    </template>
  </a-jumbo>
</template>

<script>
export default {
  name: 'AsyncyJumbo',
  data: () => ({
    jumbos: [{
      name: 'home',
      size: 'large',
      title: 'Kubernetes Native DSL',
      small: 'Introducing the open source'
    }, {
      name: 'about',
      size: 'medium',
      into: 'slash',
      title: 'Our Story',
      small: 'About Us'
    }, {
      name: 'contact',
      size: 'medium',
      into: 'chevron',
      title: 'Let\'s Talk',
      small: 'Contact'
    }, {
      name: 'events',
      size: 'medium',
      into: 'hash',
      title: 'Let\'s Meet Up!',
      small: 'Events'
    }],
    visible: false
  }),
  computed: {
    menu: function () {
      return [
        { name: 'Blog', link: '//asyncy.com/blog' },
        { name: 'Documentation', link: '//docs.asyncy.com' },
        { name: 'About', route: { name: 'about' }, active: this.$route.name === 'about' },
        { name: 'Contact', route: { name: 'contact' }, active: this.$route.name === 'contact' }
      ]
    },
    current: function () {
      return (
        !this.visible
          ? { name: 'loading', size: 'fullheight' }
          : this.jumbos.filter(j => j.name === this.$route.name)[0] ||
            {
              name: 'not-found',
              size: 'fullheight',
              title: '404',
              small: 'Lost in space ?',
              into: 'chevron'
            }
      )
    }
  },
  watch: {
    '$route': function () {
      this.visible = true
    }
  },
  mounted: function () {
    if (this.$route.name) {
      this.visible = true
    }
  }
}
</script>

<style lang="scss">
.jumbo {
  &,
  & > * {
    transition: all 0.3s ease-in-out;
  }
}
</style>
