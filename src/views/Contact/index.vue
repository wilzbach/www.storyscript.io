<template>
  <div class="contact">
    <contact-jumbo />
    <contact-help />
    <contact-join-crew />
    <contact-office />
    <contact-join
      footer
      is-paddingless
    />
    <contact-footer />
  </div>
</template>

<script>
import ContactJumbo from './Jumbo'
import ContactHelp from './Help'
import ContactJoinCrew from './JoinCrew'
import ContactOffice from './Office'
import ContactJoin from '@/components/Join'
import ContactFooter from '@/components/Footer'

export default {
  name: 'Contact',
  components: {
    ContactJumbo,
    ContactHelp,
    ContactJoinCrew,
    ContactOffice,
    ContactJoin,
    ContactFooter
  }
}
</script>
