<template>
  <a-jumbo
    size="large"
    into="slash"
    small="About Us"
    title="Our Story">
    <a-navbar
      slot="header"
      :items="menu"
      dark
      @logo="$router.push({ name: 'home' })"
    />
  </a-jumbo>
</template>

<script>
export default {
  name: 'JumboAbout',
  data: () => ({
    menu: [
      { name: 'Blog', link: '/blog' },
      { name: 'Documentation', link: '//docs.asyncy.com' },
      { name: 'About', route: { name: 'about' }, active: true },
      { name: 'Contact', route: { name: 'contact' } },
      { name: 'Join our Crew!', link: '//angel.co/asyncy/jobs' }
    ]
  })
}
</script>
