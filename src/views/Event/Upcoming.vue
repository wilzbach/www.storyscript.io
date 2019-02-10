<template>
  <section class="section upcoming">
    <div class="container">
      <h3 class="is-size-3 has-text-gray-2 has-text-weight-bold">Upcoming Events</h3>
      <div class="columns is-multiline">
        <div
          v-for="(event, idx) of events"
          :key="`list-event-${idx}`"
          class="column is-narrow"
        >
          <card-calendar
            :date="event.date"
            :link="event.link"
            :picture="event.picture"
            :title="event.title"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import CardCalendar from '@/components/CardCalendar'

export default {
  name: 'Upcoming',
  components: { CardCalendar },
  data: () => ({
    events: [{
      title: 'Git Merge + Fosterm',
      date: new Date('2019-02-17 00:00:00'),
      picture: '//source.unsplash.com/350x400/?nature'
    }, {
      title: 'Open source summit EU',
      date: new Date('2019-02-22 00:00:00'),
      picture: '//source.unsplash.com/350x400/?mountains'
    }, {
      title: 'Kubecon EU',
      date: new Date('2019-10-08 00:00:00'),
      picture: '//source.unsplash.com/350x400/?leaf'
    }, {
      title: 'OSS Leadership',
      date: new Date('2019-12-22 00:00:00'),
      picture: '//source.unsplash.com/350x400/?mountain'
    }]
  })
}
</script>

<style lang="scss">
.upcoming {
  border-top: 1rem solid $info;
  .container {
    h3 {
      margin: 9.5rem 0 5rem;
    }
  }
}
</style>
