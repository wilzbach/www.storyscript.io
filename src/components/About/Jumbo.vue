<template>
  <section class="section jumbo-about">
    <div class="background">
      <!-- <stars-particles /> -->
      <div class="gradient-stars" />
    </div>
    <a-nav
      :items="[
        { name: 'BLOG', link: '//asyncy.com/blog', external: true },
        { name: 'DOCUMENTATION', link: '//docs.asyncy.com', external: true },
        { name: 'ABOUT', link: '/about' },
        { name: 'CONTACT', link: '' },
        { name: 'JOIN OUR CREW!', link: '//angel.co/asyncy/jobs', external: true, color: 'pink', hideDecoration: true }
      ]"
      :transparent="true"
      effect="dark"
      logo="light"
      @brand-click="$router.push({ name: 'home' })" />
    <div class="container">
      <div class="columns">
        <div class="column is-full text--center">
          <h3 class="subtitle-bold">ABOUT US</h3>
          <h1 class="title">Our Story</h1>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Jumbo'
}
</script>
