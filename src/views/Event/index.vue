<template>
  <div class="event">
    <event-upcoming />
    <event-calendar />
    <a-join
      internal
      footer
      is-paddingless />
  </div>
</template>

<script>
import EventUpcoming from './Upcoming'
import EventCalendar from './Calendar'

export default {
  name: 'Event',
  components: {
    EventUpcoming,
    EventCalendar
  }
}
</script>
