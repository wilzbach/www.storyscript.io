<template>
  <s-layout
    margin="normal"
    padding="large"
    class="has-top-rounded"
    background="light"
  >
    <s-container centered-h>
      <s-div
        :padding="['none', 'large']"
        size="12"
      >
        <s-container centered-h>
          <s-div size="6">
            <s-text
              :padding="['none', 'small']"
              head="2"
              alignment="centered"
            >Focus on what matters</s-text>
            <s-text
              p="1"
              alignment="centered"
            >Amplifying developers to build and ship software simply by just moving data in an intuitive way.</s-text>
          </s-div>
        </s-container>
      </s-div>
      <s-div
        padding="large"
        size="half"
        class="is-paddingless"
      >
        <div class="code-block has-bg-meet">
          <div class="head">
            <code>design-of-a.story</code>
          </div>
          <div class="body">
            <prism language="story">{{ designOfAStory }}</prism>
          </div>
        </div>
      </s-div>
    </s-container>
  </s-layout>
</template>

<script>
import IconGetStarted from '@/components/IconGetStarted'

export default {
  name: 'GetStarted',
  components: { IconGetStarted },
  data: () => ({
    curItem: 0,
    designOfAStory: 'when sevice action event key:value as data\n  res = service action key:value\n  output = method key:value',
    items: [{
      title: 'Hello, world 👋Meet Storyscript, your Kubernetes native DSL.',
      code: 'when http server listen path:\'/\' as req\n    req write content: \'Hello, world!\'',
      small: 'Serverless http endpoints, websockets, cron jobs, pubsub, event pubsub, and streaming. It’s all supported.'
    }, {
      title: 'String together microservices and functions in a serverless way.',
      code: 'when http server listen path:\'/hello\' as req\n    output = github lookup username:\'stevepeak\'\n    req write content:output',
      small: 'Storyscript is strong-typed and packed with variable mutations to move data between services with high transparency.'
    }, {
      title: 'Connect the old...',
      code: 'when http server listen path:\'/hello\' as req\n .   output = github lookup username:\'stevepeak\'\n    SomethingLegacy action input:output\n    req write content:output',
      small: 'First-class support for the Open Microservice Guide, OpenAPI, and AsyncAPI. Expose the API; no migration, no refactoring necessary.'
    }, {
      title: '...with the new.',
      code: 'when http server listen path:\'/hello\' as req\n    output = github lookup username:\'stevepeak\'\n    SomethingLegacy action input:output\n  ...\n    req write content:output',
      small: 'Take advantage of machine-learning, knative, and serverless with ease.'
    }, {
      title: 'Zero-devop deployments into Kubernetes 🚀',
      code: 'story deploy',
      small: '🎉Amazing! You just deployed your first application with Storyscript; generating a robust Kubernetes microservice architecture. Yes, that’s it. Grab a coffee, you did great! ☕'
    }]
  }),
  mounted: function () {
    document.onscroll = this.scrollEvent
    /* global Prism */
    this.$nextTick().then(Prism.highlightAll)
  },
  methods: {
    scrollEvent: function () {
      if (!this.$refs.list) return
      let pos = document.documentElement.scrollTop - this.$el.offsetTop + window.innerHeight / 2
      let scrollpos = 0
      let idx = 0
      for (let listitem of this.$refs.list) {
        scrollpos += listitem.scrollHeight
        const lastitem = this.$refs.list.indexOf(listitem) === this.$refs.list.length - 1
        if (pos < scrollpos || lastitem) {
          idx = this.$refs.list.indexOf(listitem)
          break
        }
      }
      if (idx !== this.curItem) {
        this.$nextTick(() => {
          this.curItem = idx
        })
      }
      // console.log(document.documentElement.scrollTop, this.$el.scrollHeight, this.$refs.list[2].scrollHeight)
    }
  }
}
</script>

<style lang="scss">
.steps-segment:not(:last-child) {
  padding-bottom: 3rem;
}

.get-started-picture {
  position: absolute;
  right: -5rem;
  width: 20rem;
  @include mobile {
    display: none;
  }
}

.s-card-box {
  border-radius: 0.25rem;
  background-color: rgba(nth($grays, 4), 0.15);
  border-left: 0.25rem solid $primary;
  padding: 0.5rem 2rem;
  @include touch {
    .level {
      flex-direction: column;
    }
  }
  .level-right .level-item {
    position: relative;
  }
  .separator {
    background-color: rgba(nth($grays, 4), 0.5);
    height: 100%;
    width: 2px;
    display: block;
    position: absolute;
    left: -2.5rem;
    @include touch {
      display: none;
    }
  }
}

.has-bg-meet {
  position: relative;
  &:before,
  &:after {
    display: block;
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    width: 25vw;
    height: 13rem;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    @include mobile {
      display: none;
    }
  }
  &:before {
    @include backgroundImage("sides/left-side-meet", "png");
    left: -27rem;
  }
  &:after {
    @include backgroundImage("sides/right-side-meet", "png");
    right: -27rem;
  }
}
</style>
