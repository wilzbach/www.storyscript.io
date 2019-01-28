<template>
  <section class="not-found">
    <a-jumbo
      size="fullheight"
      title="404"
      small="Lost in space ?"
      into="chevron"
    >
      <a-navbar
        slot="header"
        :items="[{ name: 'Home', icon: 'arrow-left', route: { name: 'home' } }]"
        dark
        @logo="$router.push({ name: 'home' })"
      />
    </a-jumbo>
  </section>
</template>

<script>
export default {
  name: 'NotFound'
}
</script>
