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

        <div class="columns" :style="{ marginTop: '105px' }">
          <div v-for="(data, key) in imagelessData" :key="key" class="column">
            <h3>{{data.title}}</h3>
            <p>{{data.description}}</p>
            <url-link v-if="data.link" :to="data.link"><button class="secondary">{{data.linkText}}</button></url-link>
          </div>
        </div>
      </section>
    </max-width>

    <section :style="{
      textAlign: 'center',
      maxWidth: '525px',
      margin: '70px auto 0 auto',
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

import placeholder from '~/assets/images/placeholder.svg'
import stack from '~/assets/images/stack.svg?external'
import devtools from '~/assets/images/devtools.svg?external'
import application from '~/assets/images/application.svg?external'
import hub from '~/assets/images/hub.svg?external'

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
      title: 'DSL + Serverless + Microservices',
      subtitle: 'A symphony of tools for building smarter applications.',
      textData: [
        {
          title: 'Stack',
          description: 'A full-stack of industry standard components providing a production-ready environment for managed microservices.',
          image: stack,
          alt: 'The Asyncy architecture stack',
        },
        {
          title: 'Devtools',
          description: 'Syntax highlighting, linting, debugging, autocomplete, debugging and service discovery.',
          image: devtools,
          alt: 'A screenshot of Storyscript Devtools',
        },
        {
          title: 'Hub',
          description: 'A registry of services and containers submitted by the community or your own private services.',
          image: hub,
          alt: 'A screenshot of the Asyncy Hub'
        },
        {
          title: 'App',
          description: 'Dashboard for managing applications. Deploying, scaling, metrics, monitoring and security.',
          image: application,
          alt: 'A screenshot of the Asyncy App'
        },
      ],
      imagelessData: [
        {
          title: 'Engine',
          description: 'Serverless engine with choreographed microservices under-the-hood.',
        },
        {
          title: 'Gateway',
          description: 'HTTP gateway for client traffic to run Storyscripts as the backend.',
        },
        {
          title: 'Storyscript',
          description: `A DSL with built-in service discovery, functions, type system, data mutations and more.`,
          link: 'https://docs.asyncy.com/storyscript/',
          linkText: 'Read documentation',
        }
      ]
    }
  }
}
</script>
