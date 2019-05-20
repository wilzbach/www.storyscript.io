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
    events: [ {
      title: 'OSS Leadership',
      date: new Date('2019-03-12 00:00:00'),
      picture: '//events.linuxfoundation.org/wp-content/uploads/2018/08/39764015295_3d0ddb5950_o.jpg',
      link: '//events.linuxfoundation.org/events/open-source-leadership-summit-2019/register/'
    }, {
      title: 'The next Web',
      date: new Date('2019-05-09 00:00:00'),
      picture: '//s3.amazonaws.com/events.tnw/hardfork-2018/uploads/visuals/NDSM_tinypng2.png',
      link: '//thenextweb.com/conference/'
    }, {
      title: 'Kubecon EU',
      date: new Date('2019-05-20 00:00:00'),
      picture: '//events.linuxfoundation.org/wp-content/uploads/2018/08/Barcelona.jpg',
      link: '//events.linuxfoundation.org/events/kubecon-cloudnativecon-europe-2019/'
    }]
  })
}
</script>
