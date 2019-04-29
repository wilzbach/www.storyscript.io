<template>
  <s-layout
    foreground="light"
    outside
    rounded
  >
    <s-container>
      <s-div size="full">
        <h2 class="is-size-2 has-text-weight-bold has-text-dark has-padding-top-large has-padding-bottom-normal">How can we help?</h2>
        <h5 class="is-size-5 has-text-gray-2">We look forward to hearing from you.</h5>
      </s-div>
      <s-div
        v-for="(card, idx) of cards"
        :key="`list-cards-${idx}`"
        size="one-third"
        padding="large"
      >
        <contact-card
          :type="card.type"
          :name="card.name"
          :description="card.description"
          :link="card.link"
        />
      </s-div>
    </s-container>
  </s-layout>
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
      description: 'We\'d love to talk about how we can work together.',
      link: '//asyncy.typeform.com/to/GAr52V'
    }, {
      type: 'help',
      name: 'Help & Support',
      description: 'We\'re here to help with any questions or concerns.',
      link: '//docs.storyscript.io/support/'
    }, {
      type: 'press',
      name: 'Media & Press',
      description: 'Get Storyscript news, company info, and media resources.',
      link: '//asyncy.typeform.com/to/GAr52V'
    }]
  })
}
</script>
