<template>
  <section class="help">
    <a-card>
      <template slot="head">
        <h2 class="is-size-2 has-text-weight-bold has-text-dark">How can we help?</h2>
        <h5 class="is-size-5 has-text-gray-2">We look forward to hearing from you.</h5>
      </template>
      <div class="columns is-centered is-multiline">
        <div
          v-for="(card, idx) of cards"
          :key="`list-cards-${idx}`"
          class="column is-narrow">
          <contact-card
            :type="card.type"
            :name="card.name"
            :description="card.description" />
        </div>
      </div>
    </a-card>
  </section>
</template>

<script>
import ContactCard from '@/components/ContactCard'

export default {
  name: 'Help',
  components: { ContactCard },
  data: () => ({
    cards: [{
      type: 'sales',
      name: 'Sales',
      description: 'We\'d love to talk about how we can work together.'
    }, {
      type: 'help',
      name: 'Help & Support',
      description: 'We\'re here to help with any questions or concerns.'
    }, {
      type: 'press',
      name: 'Media & Press',
      description: 'Get Asyncy news, company info, and media resources.'
    }]
  })
}
</script>

<style lang="scss" scoped>
.help {
  margin-top: -7.5rem;
  @include mobile {
    margin-top: 0
  }
}
</style>
