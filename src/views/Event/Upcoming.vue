<template>
  <s-layout>
    <s-container>
      <s-div
        v-for="(event, idx) of events"
        :key="`list-event-${idx}`"
        size="narrow"
      >
        <card-calendar
          :date="event.date"
          :link="event.link"
          :picture="event.picture"
          :title="event.title"
        />
      </s-div>
    </s-container>
  </s-layout>
</template>

<script>
import CardCalendar from '@/components/CardCalendar'

export default {
  name: 'Upcoming',
  components: { CardCalendar },
  data: () => ({
    events: [{
      title: 'GOTO Amsterdam',
      date: new Date('2019-06-17 00:00:00'),
      picture: '//files.gotocon.com/uploads/images/conference_11/pages/173/original/front_of_the_beurs_van_berlage_damrak_at_night1.jpg',
      link: '//gotoams.nl'
    }, {
      title: 'GitHub Universe',
      date: new Date('2019-11-13 00:00:00'),
      picture: '//event-sponsorship.github.com/assets/images/events/universe/universe-modal-1.jpg',
      link: '//githubuniverse.com'
    }]
  })
}
</script>
