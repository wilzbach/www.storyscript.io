<template>
  <div class="contact">
    <contact-help />
    <!-- <contact-join-crew /> -->
    <contact-office />
    <contact-join
      footer
      is-paddingless
    />
  </div>
</template>

<script>
import ContactHelp from './Help'
import ContactJoinCrew from './JoinCrew'
import ContactOffice from './Office'
import ContactJoin from '@/components/Join'

export default {
  name: 'Contact',
  components: {
    ContactHelp,
    ContactJoinCrew,
    ContactOffice,
    ContactJoin
  }
}
</script>
