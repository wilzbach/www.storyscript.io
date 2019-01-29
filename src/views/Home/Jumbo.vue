<template>
  <a-jumbo
    size="fullheight"
    into="bracket"
    small="developer marketplace runtime">
    <a-navbar
      slot="header"
      :items="menu"
      dark
      @logo="$router.push({ name: 'home' })"
    />
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
  </a-jumbo>
</template>

<script>
export default {
  name: 'JumboHome',
  data: () => ({
    menu: [
      { name: 'Blog', link: '/blog' },
      { name: 'Documentation', link: '//docs.asyncy.com' },
      { name: 'About', route: { name: 'about' } },
      { name: 'Contact', route: { name: 'contact' } },
      { name: 'Join our Crew!', link: '//angel.co/asyncy/jobs' }
    ]
  })
}
</script>

<style lang="scss" scoped>
@import "~@asyncy/vue/src/scss/custom/_animations";

.form-beta {
  margin-top: 3rem;
  margin: auto;
}

.arrow-down {
  margin: .5rem auto;
  svg { @include animate-float; }
}
</style>
