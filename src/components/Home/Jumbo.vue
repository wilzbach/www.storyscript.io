<template>
  <a-jumbo
    size="fullheight"
    into="bracket"
    title="Asyncy amplifies the developer"
    small="developer marketplace runtime">
    <a-navbar
      slot="header"
      :items="menu"
      dark />
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
      { name: 'About', route: { name: 'about' } },
      { name: 'Blog', link: '/blog' },
      { name: 'Documentation', link: '//docs.asyncy.com' },
      { name: 'Join our Crew!', link: '//angel.co/asyncy/jobs' }
    ]
  })
}
</script>

<style lang="scss" scoped>
.form-beta {
  margin-top: 3rem;
}
.arrow-down {
  margin: .5rem auto;
  svg {
    animation: float 2s ease-in-out infinite;
  }
}

@keyframes float {
  0% {
    transform: translatey(0px);
  }
  50% {
    transform: translatey(-10px);
  }
  100% {
    transform: translatey(0px);
  }
}
</style>
