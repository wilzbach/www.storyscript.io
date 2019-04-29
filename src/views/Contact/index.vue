<template>
  <div class="contact">
    <contact-help />
    <!-- <contact-join-crew /> -->
    <contact-office />
    <s-join
      internal
      footer
      is-paddingless
    />
  </div>
</template>

<script>
import ContactHelp from './Help'
import ContactJoinCrew from './JoinCrew'
import ContactOffice from './Office'

export default {
  name: 'Contact',
  components: {
    ContactHelp,
    ContactJoinCrew,
    ContactOffice
  }
}
</script>
