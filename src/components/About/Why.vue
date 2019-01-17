<template>
  <section class="section about">
    <div class="container">
      <div
        v-for="(step, idx) of steps"
        :key="`step-${idx}`"
        class="columns">
        <div
          v-if="idx % 2 === 1"
          class="column is-half">
          <img :src="step.picture">
        </div>
        <div class="column is-half text--left">
          <h2 class="light">We believe in amplifying <br>the <vue-typer
            :repeat="0"
            :text="`${step.name}.`" /></h2>
          <p v-text="step.content" />
          <div class="fade-block">
            <transition name="fade-link">
              <p
                v-if="step.blog"
                class="blog-link">
                <span>READ OUR BLOG:</span>
                <a
                  :href="step.blog[1]"
                  :title="step.blog[0]"
                  target="_blank">
                  <span>{{ step.blog[0] }}</span>
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
        <div
          v-if="idx % 2 === 0"
          class="column is-half">
          <img :src="step.picture">
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import PictureOpenSource from '@/assets/img/about-opensource.svg'
import PictureDev from '@/assets/img/about-dev.svg'
import PictureStory from '@/assets/img/about-story.svg'

export default {
  name: 'Why',
  data: () => ({
    steps: [{
      name: 'open source community',
      content: 'Code is brought to life with cross-application metrics and usage insights to empower developers and vendors with actionable data to improve software.',
      blog: ['Introducing Asyncy', '//asyncy.com/blog/p/21b8a70b-7684-4762-8760-2dd62b8caea2'],
      picture: PictureOpenSource
    }, {
      name: 'developer',
      content: 'Increasing reusability and reducing complexity by extending the developer journey to create powerful applications; focusing on delivering features more effectively at scale.',
      picture: PictureDev
    }, {
      name: 'story of data',
      content: 'Over the last 50 years we crafted programming languages to communicate with computers. It’s time we amplify this communication with a new language for high-level abstractions that is intuitive and familiar.',
      blog: ['Storytelling your application', '//asyncy.com/blog/p/3a6442df-880b-416e-b782-85d688851334'],
      picture: PictureStory
    }]
  })
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

  p {
    color: #7B7B8F;
  }

  .vue-typer {
    font-weight: bold;
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
