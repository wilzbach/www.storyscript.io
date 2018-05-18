<template>
  <div>
    <page-background
      :leftImage="headerLeft"
      :rightImage="headerRight"
      :scale="0.5"
      :leftX="-320"
      :leftY="60"
      :rightX="-160"
      :rightY="60"
    />
    <hero :title="title" :subtitle="subtitle"></hero>

    <max-width :style="{
      background: 'white',
    }">
      <section :style="{
        maxWidth: '1000px',
        margin: '0 auto',
        padding: '80px 0',
      }">
        <div class='columns'>
          <div class='column is-three-quarters' :style="{
            marginLeft: 'auto',
            marginRight: 'auto',
          }">
            <div v-for="(event, index) in events" class='columns' :key="index" :style="{
              marginBottom: (index === events.length - 1) ? '0' : '65px',
              paddingBottom: (index === events.length - 1) ? '0' : '45px',
              borderBottom: (index === events.length - 1) ? 'none' : '1px solid #DDDDDD'
            }">
              <div class='column is-narrow'>
                <div>
                  <img :style="{
                    height: '145px',
                    width: '145px',
                    borderRadius: '4px',
                  }" :src="event.image"/>
                </div>
              </div>
              <div class='column'>
                <h4>{{event.title}}</h4>
                <time-and-location text-color='#151515' icon-color='#7F7F7F' :date="event.date" :location="event.location" />
                <p>
                  {{event.description}}
                </p>
                <a :href="event.link" data-mode="popup" data-hide-headers="true" data-hide-footer="true" target="_blank">
                  <button class='secondary' :style="{ marginTop: '0.5em' }">
                    RSVP
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </max-width>
  </div>
</template>

<script>
import Hero from '../components/Hero'
import PageBackground from '../components/PageBackground'
import TimeAndLocation from '../components/TimeAndLocation'

import headerLeft from '../assets/images/events-header-left.svg'
import headerRight from '../assets/images/events-header-right.svg'

import events from '~/data/events'

export default {
  components: {
    Hero,
    PageBackground,
    TimeAndLocation,
  },
  data() {
    return {
      headerRight,
      headerLeft,
      title: 'Upcoming Events',
      subtitle: 'Connect with the Asyncy community at conferences, meetups, and hackathons around the world.',
      events: events,
      learningEvents: [
        {
          title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
          link: '/',
          date: 'June 22',
          location: 'Amsterdam',
        },
        {
          title: 'Vestibulum auctor dapibus neque.',
          link: '/',
          date: 'June 24',
          location: 'Amsterdam',
        }
      ]
    };
  },
}
</script>
