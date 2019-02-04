<template>
  <a-jumbo
    :size="current.size"
    :into="current.into"
    :small="current.small"
    :title="current.title">
    <a-navbar
      slot="header"
      :items="menu"
      dark
      @logo="$router.push({ name: 'home' })"
    />
    <template v-if="current.name === 'home'">
      <template slot="title">
        Asyncy amplifies<br>the developer
      </template>
      <a-form-beta class="form-beta" />
      <div
        slot="footer"
        class="has-text-centered">
        <a-icon icon="separator" />
        <p class="has-text-weight-normal">Discover our mission to raise <br>any developer into a 10x developer.</p>
        <div class="arrow-down">
          <a-icon
            icon="arrow-down"
            stroke="white"
          />
        </div>
      </div>
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
      size: 'fullheight',
      into: 'bracket',
      small: 'developer marketplace runtime'
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
        { name: 'Blog', link: '/blog' },
        { name: 'Documentation', link: '//docs.asyncy.com' },
        { name: 'About', route: { name: 'about' }, active: this.$route.name === 'about' },
        { name: 'Contact', route: { name: 'contact' }, active: this.$route.name === 'contact' },
        { name: 'Join our Crew!', link: '//angel.co/asyncy/jobs', underlined: true }
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
  }
}
</script>

<style lang="scss">
.jumbo {
  &, & > * {
    transition: all 0.3s ease-in-out;
  }
}
</style>
