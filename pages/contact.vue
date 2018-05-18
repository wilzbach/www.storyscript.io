<template>
  <div>
    <PageBackground
      :leftImage="headerLeft"
      :rightImage="headerRight"
      :leftX="-500"
      :leftY="-150"
    />

    <Hero :title="title" :subtitle="subtitle"></Hero>

    <max-width class="body">
      <section :style="{
        maxWidth: '900px',
        margin: '0 auto',
      }">
        <div class='columns'>
          <div v-for="(contact, key) in contacts" class='column' :key="key">
            <div :style="{
              maxWidth: '200px',
              margin: '0 auto',
              borderRadius: '4px',
              fontSize: '0.9em',
            }">
              <div :style="{
                textAlign: 'center',
              }">
                <h4>{{contact.title}}</h4>
              </div>
              <p>{{contact.description}}</p>
              <a class="item typeform-share button" href="https://asyncy.typeform.com/to/GAr52V" data-mode="popup" data-hide-headers="true" data-hide-footer="true" target="_blank">
                <button class='secondary' :style="{
                  marginTop: '1em',
                  width: '100%',
                  fontSize: '1.1em',
                }">
                  {{contact.linkText}}
                </button>
              </a>
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

import headerLeft from '../assets/images/contact-header-left.svg'
import headerRight from '../assets/images/contact-header-right.svg'

export default {
  components: { Hero, PageBackground },
  data() {
    return {
      headerLeft,
      headerRight,
      title: 'Contact Us',
      subtitle: 'Get in touch and let us know how we can help.',
      contacts: [
        {
          title: 'Sales',
          description: `We'd love to talk about how we can work together.`,
          linkText: 'Contact Sales',
          link: '/',
        },
        {
          title: 'Help & Support',
          description: `We're here to help with any questions or concerns.`,
          linkText: 'Contact Support',
          link: '/',
        },
        {
          title: 'Media & Press',
          description: `Get asyncy news, company info, and media resources.`,
          linkText: 'Contact Press',
          link: '/',
        },
      ],
    }
  }
}
</script>

<style scoped lang="styl">
@import "../assets/css/variables"

.body
  background-color $page-background-color
  padding 80px 0
</style>
