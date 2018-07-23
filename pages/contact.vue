<template>
  <div>
    <hero :title="title" :subtitle="subtitle">
      <page-background
        :leftImage="headerLeft"
        :rightImage="headerRight"
        :scale="2.8"
        :leftX="-300"
        :leftY="0"
        :rightX="-380"
        :rightY="0"
      />
    </hero>

    <max-width class="body">
      <section :style="{
        maxWidth: '900px',
        margin: '0 auto',
      }">
        <div class='columns'>
          <div v-for="(contact, key) in contacts" class='column' :key="key">
            <div class='contact-box' :style="{
              maxWidth: '200px',
              margin: '10px auto',
              borderRadius: '4px',
              fontSize: '0.9em',
            }">
              <div :style="{
                textAlign: 'center',
              }">
                <h4>{{contact.title}}</h4>
              </div>
              <p>{{contact.description}}</p>
              <a class="button typeform-share" :href="contact.link" data-mode="popup" data-hide-headers="true" data-hide-footer="true" target="_blank">
                <a-button color="white" :style="{
                  marginTop: '1em',
                  width: '100%',
                  fontSize: '1.1em',
                }">
                  {{contact.linkText}}
                </a-button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </max-width>
  </div>
</template>

<script>
import headerLeft from '../assets/images/contact-left.svg?external'
import headerRight from '../assets/images/contact-right.svg?external'

export default {
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
          link: 'https://asyncy.typeform.com/to/GAr52V',
        },
        {
          title: 'Help & Support',
          description: `We're here to help with any questions or concerns.`,
          linkText: 'Contact Support',
          link: 'https://docs.asyncy.com/support',
        },
        {
          title: 'Media & Press',
          description: `Get asyncy news, company info, and media resources.`,
          linkText: 'Contact Press',
          link: 'https://asyncy.typeform.com/to/GAr52V',
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
  padding 80px 25px

@media (max-width: 768px)
  .contact-box
    max-width 100% !important
    text-align center

    button
      max-width 400px
</style>
