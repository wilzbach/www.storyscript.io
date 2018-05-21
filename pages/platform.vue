<template>
  <div>
    <page-background
      :leftImage="headerLeft"
      :rightImage="headerRight"
      :scale="0.6"
      :leftX="-390"
      :leftY="70"
      :rightX="-120"
      :rightY="70"
    />
    <hero :title="title" :subtitle="subtitle"></hero>

    <max-width :style="{
      color: '#111',
      background: 'white',
    }">
      <section :style="{
        maxWidth: '1100px',
        margin: '0 auto',
        padding: '80px 0',
      }">
        <AlternatingTwoColumn :reversed="true" :textData="textData" />
      </section>
    </max-width>

    <section :style="{
      textAlign: 'center',
      maxWidth: '525px',
      margin: '0 auto',
    }">
      <div :style="{
        textAlign: 'left',
        color: 'white',
      }"><h2>Sign up to get updates</h2></div>
      <div :style="{
        margin: '30px 0',
      }">
        <EmailForm placeholder='Your Email' btnText='Sign up'/>
      </div>
    </section>
  </div>
</template>

<script>
import EmailForm from '~/components/EmailForm'
import AlternatingTwoColumn from '~/components/AlternatingTwoColumns'

import listIcon from '~/assets/images/icon_list.svg'
import circleIcon from '~/assets/images/icon_circle.svg'
import squareIcon from '~/assets/images/icon_square.svg'
import placeholder from '~/assets/images/placeholder.svg'

import headerLeft from '~/assets/images/platform-left.svg?external'
import headerRight from '~/assets/images/platform-right.svg?external'

export default {
  components: {
    EmailForm,
    AlternatingTwoColumn,
  },
  data() {
    return {
      placeholder,
      headerLeft,
      headerRight,
      title: 'Microservice choreography as a platform.',
      subtitle: 'A symphony of open source tools for building applications with microservices.',
      textData: [
        {
          title: 'Stack',
          description: 'A full-stack of industry standard components providing a production-ready environment for managed microservices.',
          image: 'placeholder',
        },
        {
          title: 'Storyscript',
          description: 'A DSL for microservice choreography with built-in service discovery, functions, type system, data mutations and more.',
          linkText: 'Read documentation',
          link: 'https://docs.asyncy.com/storyscript/',
          image: placeholder,
        },
        {
          title: 'Plugins',
          description: 'IDE plugins with syntax highlighting, linting, debugging, autocomplete and service discovery.',
          image: placeholder,
        },
        {
          title: 'Hub',
          description: 'A registry of services and containers submitted by the community or your own private services.',
          items: [
            { icon: circleIcon, text: 'Hundreds of open source services' },
            { icon: squareIcon, text: 'Premium subscription based services' },
            { icon: listIcon, text: 'Anonymous, cross-application metrics' },
          ],
          image: placeholder,
        },
        {
          title: 'Gateway',
          description: 'The HTTP gateway for client traffic to run Storyscripts as the backend.',
          image: placeholder,
        },
        {
          title: 'Engine',
          description: 'The Storyscript execution engine which manages data-flow and container choreography.',
          image: placeholder,
        },
        {
          title: 'App',
          description: 'Dashboard for managing applications. Deploying, scaling, metrics, monitoring and security.',
          image: placeholder,
        },
      ],
    }
  }
}
</script>
