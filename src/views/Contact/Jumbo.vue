<template>
  <a-jumbo
    size="large"
    into="chevron"
    small="Contact"
    title="Let's talk">
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
  name: 'JumboContact',
  data: () => ({
    menu: [
      { name: 'Blog', link: '/blog' },
      { name: 'Documentation', link: '//docs.asyncy.com' },
      { name: 'About', route: { name: 'about' } },
      { name: 'Contact', route: { name: 'contact' }, active: true },
      { name: 'Join our Crew!', link: '//angel.co/asyncy/jobs', underlined: true }
    ]
  })
}
</script>
