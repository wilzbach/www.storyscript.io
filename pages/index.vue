<template>
  <div>
    <page-background
      :left-image="headerLeft"
      :right-image="headerRight"
      :scale="0.6"
      :left-x="-320"
      :left-y="1"
      :right-x="-85"
      :right-y="1"
    />
    <max-width :style="{
      marginTop: '70px',
      marginBottom: '60px',
    }">
      <div :style="{
        textAlign: 'center',
      }">
        <h1 :style="{
          fontSize: '3.2em',
          color: 'white',
        }">{{title}}</h1>
        <p class="subtitle" :style="{
          color: '#B7B8C1',
        }">{{subtitle}}</p>
        <div :style="{
          maxWidth: '560px',
          margin: '45px auto 0 auto',
        }">
          <email-form :btn-style="{
            backgroundColor: 'white',
            color: '#515CF9',
          }"/>
        </div>
      </div>
    </max-width>

    <max-width :style="{
      backgroundImage: `url(${purpleBg})`,
      backgroundColor: '#7A33D7',
      color: 'white',
    }">
      <div :style="{
        maxWidth: '1000px',
        margin: '0 auto',
        padding: '40px 0 80px 0'
      }">
        <p :style="{
          width: '585px',
          margin: '0 auto',
        }">
          {{description}}
        </p>
        <alternating-two-columns :text-data="sections" :reversed="true" :style="{
          marginTop: '85px',
        }"/>
      </div>
    </max-width>

    <max-width :style="{
      backgroundColor: 'white',
      padding: '50px 0',
    }">
      <div :style="{
        textAlign: 'center',
      }">
        <h2>{{community.title}}</h2>
        <p :style="{
          maxWidth: '620px',
          fontSize: '1.2em',
          color: '#666',
          margin: '0 auto',
        }">
          {{community.description}}
        </p>
        <div class="level" :style="{
          maxWidth: '620px',
          fontSize: '1.2em',
          margin: '0 auto',
          marginTop: '40px',
        }">
          <div class="level-item">
            <a href="https://asyncy.click/slack">Join our slack &rsaquo;</a>
          </div>
          <div class="level-item">
            <a href="https://github.com/asyncy">Contribute on Github &rsaquo;</a>
          </div>
          <div class="level-item">
            <a href="https://docs.asyncy.com">Read the docs &rsaquo;</a>
          </div>
        </div>

        <div class="columns is-variable is-7" :style="{
          maxWidth: '860px',
          margin: '0 auto',
          marginTop: '72px',
        }">
          <div v-for="(event, key) in community.events" :key="key" class="column event">
            <div :style="{
              position: 'relative',
              overflow: 'hidden',
              height: '340px',
              width: '100%',
            }">
              <div class="event-background" :style="{
                display: 'flex',
                borderRadius: '4px',
                height: '340px',
                width: '100%',
                backgroundSize: '100%',
                backgroundImage: `url(${event.image})`,
                padding: '28px',
              }">
                <div :style="{
                  color: 'white',
                  textAlign: 'left',
                  alignSelf: 'flex-end',
                  zIndex: '100',
                }">
                  <h3 :style="{ fontSize: '1.6em', fontWeight: '500' }">{{event.title}}</h3>
                  <time-and-location text-color='#FFF' icon-color='#FFF' :date="event.date" :location="event.location" />
                  <a :href="event.link" :style="{
                    color: 'rgba(255, 255, 255, 0.66)',
                    fontWeight: '400',
                    fontSize: '1.2em',
                  }">
                    Learn More &rsaquo;
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </max-width>


    <max-width :style="{
      margin: '0px auto',
      textAlign: 'center',
      maxWidth: '800px',
      backgroundColor: '#111',
      padding: '35px 15px 10px 15px',
      borderRadius: '4px',
    }">
      <h3 :style="{
        marginBottom: '1.1em',
        color: 'white',
      }">Sign up to get updates</h3>
      <div :style="{
        maxWidth: '600px',
        margin: '0 auto',
        padding: '10px 0'
      }">
        <email-form :btn-style="{
          backgroundColor: 'white',
          color: '#111',
        }"/>
      </div>
    </max-width>
  </div>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'
import AlternatingTwoColumns from '~/components/AlternatingTwoColumns.vue'
import TimeAndLocation from '~/components/TimeAndLocation.vue'
import EmailForm from '~/components/EmailForm.vue'

import placeholder from '~/assets/images/placeholder.svg'
import appsIcon from '~/assets/images/icon_apps.svg'
import automationIcon from '~/assets/images/icon_automation.svg'
import integrationIcon from '~/assets/images/icon_integration.svg'
import headerLeft from '~/assets/images/home-header-left.svg?external'
import headerRight from '~/assets/images/home-header-right.svg?external'
import purpleBg from '~/assets/images/purple-bg-pattern.svg?external'

import events from '~/data/events';

export default {
  components: {
    AppLogo,
    AlternatingTwoColumns,
    TimeAndLocation,
    EmailForm,
  },
  data: () => {
    return {
      headerLeft,
      headerRight,
      purpleBg,
      title: 'Write stories, then code.',
      subtitle: 'OSS Microservice Choreography as a Platform',
      description: 'A batteries-included open-source platform for building applications and workflows with microservices. Choreographed by an expressive DSL for rapid prototyping in a resilient production-ready, dynamically-scalable managed architecture.',
      sections: [
        {
          title: 'Meet Storyscript',
          description: 'Inspired by the Zen of Python where functions are microservices, Storyscript is a high-level language that can be used to orchestrate microservices in an algorithmic way.',
          image: placeholder,
          link: 'https://docs.asyncy.com/#storyscript',
          linkText: 'Learn More'
        },
        {
          title: 'Microservice choreography',
          description: 'Microservice Choreography is an architecture layer above orchestration eliminating service coupling and seperates logic from code with limited to no devops. Perfect for rapid application prototyping to production.',
          image: placeholder,
          link: '/platform',
          linkText: 'Learn More'
        }
      ],
      community: {
        title: 'Learn with the community',
        description: 'Get feedback and quick help with your projects in our online communities, or join a meetup to Asyncy with fellow in person.',
        events: events.slice(0, 2).reverse(),
      },
    };
  },
}
</script>

<style scoped lang="styl">
.usecase-description
  @media (max-width: 768px) and (min-width: 400px)
    max-width: 500px
    margin: 0 auto

.event-background
  transition all 0.3s
  background-position center

  &::before
    display block
    content ""
    height 100%
    width 100%
    position absolute
    top 0
    left 0

  &:hover
    background-size 105% !important

.event:first-child
  & .event-background::before
    background: linear-gradient(270deg, rgba(180, 124, 255, 0.6) 0%, rgba(60, 5, 133, 0.6) 100%)
    background-color: rgba(86,33,156,0.6) !important

.event:last-child
  & .event-background::before
    background-color rgba(0,0,0,0.5) !important
</style>
