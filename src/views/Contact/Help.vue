<template>
  <section class="help">
    <a-card>
      <template slot="head">
        <h2 class="is-size-2 has-text-weight-bold has-text-dark">How can we help?</h2>
        <h5 class="is-size-5 has-text-gray-2">We look forward to hearing from you.</h5>
      </template>
      <div class="columns is-centered">
        <div class="column">
          <contact-card
            type="sales"
            name="Sales"
            description="We'd love to talk about how we can work together." />
        </div>
        <div class="column">
          <contact-card
            type="help"
            name="Help & Support"
            description="We're here to help with any questions or concerns." />
        </div>
        <div class="column">
          <contact-card
            type="press"
            name="Media & Press"
            description="Get Asyncy news, company info, and media resources." />
        </div>
      </div>
    </a-card>
  </section>
</template>

<script>
import ContactCard from '@/components/ContactCard'

export default {
  name: 'Help',
  components: { ContactCard }
}
</script>

<style lang="scss" scoped>
.help {
  margin-top: -7.5rem;
}
</style>
