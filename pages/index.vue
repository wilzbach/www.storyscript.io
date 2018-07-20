<template>
  <div>
    <max-width :style="{
      marginTop: '70px',
      marginBottom: '60px',
    }">
      <page-background
        :left-image="headerLeft"
        :right-image="headerRight"
        :scale="3"
        :left-x="-320"
        :left-y="-70"
        :right-x="-320"
        :right-y="-70"
      />
      <div :style="{
        textAlign: 'center',
      }">
        <h1 :style="{
          fontSize: '3.2em',
          color: 'white',
        }" v-html="title"></h1>
        <p class="subtitle" :style="{
          color: '#B7B8C1',
        }">{{subtitle}}</p>
        <div :style="{
          maxWidth: '560px',
          margin: '45px auto 0 auto',
        }">
          <email-form />
        </div>
      </div>
    </max-width>

    <max-width :style="{
      backgroundImage: `url(${purpleBg})`,
      backgroundColor: '#7A33D7',
      color: 'white',
    }">
      <div :style="{
        maxWidth: '1100px',
        margin: '0 auto',
        padding: '40px 0 80px 0'
      }">
        <p :style="{
          maxWidth: '610px',
          margin: '0 auto',
          textAlign: 'center',
        }">
          {{description}}
        </p>
        <alternating-two-columns :text-data="sections" :reversed="true" :style="{
          marginTop: '85px',
        }"/>

        <div :style="{ marginTop: '105px' }">
          <div class="columns" v-for="(featureList, key) in [features.slice(0, 2), features.slice(2, 4)]" :key="key" :style="{ marginTop: '35px' }">
            <div v-for="(feature, key) in featureList" :key="key" class="column">
              <div class="columns">
                <div class="column is-narrow">
                  <img :src="feature.icon" :style="{
                    marginTop: '4px',
                    width: '20px',
                    height: '20px',
                  }" alt="null"/>
                </div>
                <div class="column">
                  <h4 :style="{ marginTop: '0em' }">{{feature.title}}</h4>
                  <p>{{feature.description}}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </max-width>

    <max-width :style="{
      backgroundColor: 'white',
      padding: '50px 25px',
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
          <div v-for="(link, key) in community.links" :key="key" class="level-item">
            <a class="community-link" :href="link.link">{{link.title}} &rsaquo;</a>
          </div>
        </div>

        <div class="event-container columns is-variable is-7" :style="{
          maxWidth: '860px',
          margin: '0 auto',
          marginTop: '72px',
        }">
          <div v-for="(event, key) in community.events" :key="key" class="column event">
            <url-link :to="event.link" :style="{
              color: 'rgba(255, 255, 255, 0.66)',
              fontWeight: '400',
            }">
            <div :style="{
              position: 'relative',
              overflow: 'hidden',
              height: '340px',
              width: '100%',
              borderRadius: '4px',
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
                </div>
              </div>
            </div>
            </url-link>
          </div>
        </div>
      </div>
    </max-width>


    <max-width :style="{
      marginTop: '40px',
      backgroundColor: '#111',
      padding: '25px 25px',
    }">
      <div :style="{
        margin: '0px auto',
        textAlign: 'center',
        maxWidth: '800px',
      }">
      <h3 :style="{
        marginBottom: '1.3em',
        color: 'white',
      }">{{cta}}</h3>
      </div>

      <div :style="{
        maxWidth: '600px',
        margin: '0 auto',
      }">
        <email-form theme="dark" />
      </div>
    </max-width>
  </div>
</template>

<script>
import AlternatingTwoColumns from '~/components/AlternatingTwoColumns.vue'
import TimeAndLocation from '~/components/TimeAndLocation.vue'
import EmailForm from '~/components/EmailForm.vue'

import codeImg from '~/assets/images/window.jpg'
import stack from '~/assets/images/stack.svg?external'
import appsIcon from '~/assets/images/icon_apps.svg?external'
import automationIcon from '~/assets/images/icon_automation.svg?external'
import integrationIcon from '~/assets/images/icon_integration.svg?external'
import opensourceIcon from '~/assets/images/icon_opensource.svg?external'
import headerLeft from '~/assets/images/home-header-left.svg?external'
import headerRight from '~/assets/images/home-header-right.svg?external'
import purpleBg from '~/assets/images/purple-bg-pattern.svg?external'

import events from '~/data/events';

export default {
  components: {
    AlternatingTwoColumns,
    TimeAndLocation,
    EmailForm,
  },
  data: () => {
    return {
      headerLeft,
      headerRight,
      purpleBg,
      title: 'Build smarter applications.',
      subtitle: 'An open source, DSL powered, serverless platform that choreographs microservices ✨🍰✨',
      description: 'Write applications as stories, removing all the unnecessary complexity on a batteries-included platform.',
      sections: [
        {
          title: 'Meet Storyscript',
          description: 'Readable and strong-typed programming language that focused on application logic only by removing unnecessary complexity that choreographs microservices.',
          image: codeImg,
          alt: 'Example of Storyscript code',
          link: 'https://docs.asyncy.com/storyscript/',
          linkText: 'Read the documentation'
        },
        {
          title: 'Serverless + Microservice = 🌈🦄',
          description: 'Your application becomes serverless functions backed by choreographed microservices with observability and transparency.',
          image: stack,
          alt: 'The Asyncy architecture stack',
          link: '/platform',
          linkText: 'Learn More'
        }
      ],
      features: [
        {
          title: 'Automation',
          description: `Transparent, long-running logic for customer retention and marketing automation. Perfect for social media and cron jobs.`,
          icon: automationIcon,
        },
        {
          title: 'Integration',
          description: `Seamlessly connect services and applications with reusable containers. Perfect for devops, webhooks and bots.`,
          icon: integrationIcon,
        },
        {
          title: 'Applications',
          description: `Prototype applications in a production-grade platform powered by microservices. Perfect for backends and APIs.`,
          icon: appsIcon,
        },
        {
          title: 'Open Source',
          description: `Run Asyncy in any environment. Locally, or on our hosted cloud.`,
          icon: opensourceIcon,
        },
      ],
      community: {
        title: 'Learn with the community',
        description: 'Get feedback and quick help with your projects in our online communities, or join an event to meet us in-person.',
        links: [
          { title: 'Join our Slack', link: 'https://asyncy.click/slack' },
          { title: 'Contribute on Github', link: 'https://github.com/asyncy' },
          { title: 'Read the docs', link: 'https://docs.asyncy.com' },
        ],
        events: events.slice(0, 2).reverse(),
      },
      cta: 'Sign up to join the beta 🚀',
    };
  },
}
</script>

<style scoped lang="styl">
.usecase-description
  @media (max-width: 768px) and (min-width: 400px)
    max-width: 500px
    margin: 0 auto

@media (max-width: 768px)
  .event
    padding-left 0 !important
    padding-right 0 !important

.community-link
  text-decoration none
  color #515CF9
  transition all 0.2s
  font-weight 500
  &:hover
    filter brightness(65%)

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
