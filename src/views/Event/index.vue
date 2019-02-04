<template>
  <div class="event">
    <event-upcoming />
    <event-calendar />
    <event-join
      footer
      is-paddingless />
  </div>
</template>

<script>
import EventUpcoming from './Upcoming'
import EventCalendar from './Calendar'
import EventJoin from '@/components/Join'

export default {
  name: 'Event',
  components: {
    EventUpcoming,
    EventCalendar,
    EventJoin
  }
}
</script>
