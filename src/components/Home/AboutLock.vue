<template>
  <section class="section about">
    <lock-room>
      <template slot-scope="{ step }">
        <div class="columns is-mobile is-gapless centered">
          <div class="column is-half text--left">
            <h2 class="light">We believe in amplifying <br>the <vue-typer
              :repeat="0"
              :text="stepName(step)" /></h2>
            <p v-text="stepContent(step)" />
            <div class="fade-block">
              <transition name="fade-link">
                <p
                  v-if="blogLink(step)"
                  class="blog-link">
                  <span>READ OUR BLOG:</span>
                  <a
                    :href="blogLink(step)[1]"
                    :title="blogLink(step)[0]"
                    target="_blank">
                    <span>{{ blogLink(step)[0] }}</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 45.81 18.82">
                      <path
                        d="M1502,4202l8,7.99-8,8.01"
                        transform="translate(-1467 -4200.59)" />
                      <path
                        d="M1467,4210l42-.01"
                        transform="translate(-1467 -4200.59)" />
                    </svg>
                  </a>
                </p>
              </transition>
            </div>
          </div>
          <div class="column is-half" />
        </div>
      </template>
    </lock-room>
  </section>
</template>

<script>
import LockRoom from '@/components/LockRoom'

export default {
  name: 'AboutLock',
  components: { LockRoom },
  data: () => ({
    steps: [{
      name: 'open source community',
      content: 'Code is brought to life with cross-application metrics and usage insights to empower developers and vendors with actionable data to improve software.',
      blog: ['Introducing Asyncy', '//asyncy.com/blog/p/21b8a70b-7684-4762-8760-2dd62b8caea2']
    }, {
      name: 'developer',
      content: 'Increasing reusability and reducing complexity by extending the developer journey to create powerful applications; focusing on delivering features more effectively at scale.'
    }, {
      name: 'story of data',
      content: 'Over the last 50 years we crafted programming languages to communicate with computers. It’s time we amplify this communication with a new language for high-level abstractions that is intuitive and familiar.',
      blog: ['Storytelling your application', '//asyncy.com/blog/p/3a6442df-880b-416e-b782-85d688851334']
    }]
  }),
  methods: {
    stepName: function (step) {
      if (step < 1 || step > this.steps.length) return ' '
      return `${this.steps[step - 1].name}.`
    },
    stepContent: function (step) {
      if (step < 1 || step > this.steps.length) return ' '
      return this.steps[step - 1].content
    },
    blogLink: function (step) {
      if (step < 1 || step > this.steps.length) return ' '
      return this.steps[step - 1].blog || undefined
    }
  }
}
</script>

<style lang="scss" scoped>
.about {
  h2 {
    color: #464769;
  }

  .fade-block {
    margin-top: 2rem;
    height: 2rem;
    width: 100%;
  }

  .blog-link {
    display: block;
    margin-top: 2rem;
    span, a {
      text-transform: uppercase;
      font-size: .8rem;
      letter-spacing: .15rem;
      font-weight: bold;
    }
    span {
      color: #464769;
    }
    a {
      margin-left: 1rem;
      span {
        color: #5805fc;
        margin-right: .5rem;
      }
      svg {
        height: .5rem;
        fill: none;
        stroke: #5805fc;
        stroke-width: 4px;
        fill-rule: evenodd;
      }
    }
    span, a {
      display: inline-block;
    }
  }
}

.fade-link-enter-active,
.fade-link-leave-active {
  transition-duration: 0.2s !important;
  transition-property: opacity;
  transition-timing-function: ease-in;
}

.fade-link-enter,
.fade-link-leave-active {
  opacity: 0
}
</style>
