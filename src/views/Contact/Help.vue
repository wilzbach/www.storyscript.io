<template>
  <s-layout
    background="light"
    margin="large"
  >
    <s-container>
      <s-div size="full">
        <s-text
          :padding="['none', 'normal']"
          alignment="centered"
          head="3"
        >How can we help?</s-text>
        <s-text
          p="1"
          alignment="centered"
        >We look forward to hearing from you.</s-text>
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
