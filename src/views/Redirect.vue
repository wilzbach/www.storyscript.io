<template>
  <div />
</template>

<script>
export default {
  name: 'Redirect',
  data: () => ({
    routes: ['blog', 'docs'],
    hrefs: ['//asyncy.com/blog', '//docs.asyncy.com']
  }),
  computed: {
    href: function (route) {
      return this.hrefs[this.routes.indexOf(this.$route.query.to)]
    }
  },
  created: function () {
    if (this.$route.query && this.routes.includes(this.$route.query.to)) {
      window.location = this.href
    } else {
      this.$router.push({ name: 'home' })
    }
  }
}
</script>
