<template>
  <s-layout margin="large">
    <s-container centered-v>
      <s-div
        size="4 is-offset-1"
        padding="large"
      >
        <s-text
          :padding="['none', '1x']"
          head="3"
        >Zero-DevOps Deployment</s-text>
        <s-text p="1">With a single command easily
        deploy to <b>Story Cloud</b> or <b>your
        existing infrastructure</b>.</s-text>
        <!-- <s-button
          size="small"
          link
          @click="terminal = !terminal"
        >$> Story deploy</s-button> -->
      </s-div>
      <s-div size="6 is-offset-1">
        <div
          id="try-termynal"
          data-termynal
        />
        <!-- <img
          v-show="!terminal"
          src="~@/assets/img/bg/zerodev-diagram.png"
          srcset="~@/assets/img/bg/zerodev-diagram@2x.png 2x, ~@/assets/img/bg/zerodev-diagram@3x.png 3x"
          alt=""
        > -->
      </s-div>
    </s-container>
  </s-layout>
</template>

<script>
export default {
  name: 'ZeroDevops',
  data: () => ({ termynal: undefined }),
  mounted: function () {
    this.termynal = new this.$termynal('#try-termynal',
      {
        lineData: [
          { type: 'input', value: 'story deploy' },
          { value: 'Compiling Stories…' },
          { delay: 10, value: 'Deploying app my-awesome-123... ⠋' },
          { value: '✔ Version 42 of your app has been queued for deployment.\n' },
          { value: '' },
          { value: 'Waiting for deployment to complete…  ⠸' },
          { delay: 10, value: '✔ Deployment successful!' },
          { value: 'If your Story responds to HTTP requests, please visit:' },
          { value: ' https://my-awesome-123.storyscriptapp.com/' }
        ],
        noInit: true
      }
    )
    window.addEventListener('scroll', this.appear)
  },
  beforeDestroy: function () {
    window.removeEventListener('scroll', this.appear)
  },
  methods: {
    appear: function () {
      if (this.$el.offsetTop && window.scrollY + (window.innerHeight / 2) > this.$el.offsetTop) {
        this.termynal.init()
        window.removeEventListener('scroll', this.appear)
      }
    }
  }
}
</script>

<style lang="scss">
/**
 * termynal.js
 *
 * @author Ines Montani <ines@ines.io>
 * @version 0.0.1
 * @license MIT
 */

:root {
  --color-bg: #252a33;
  --color-text: #eee;
  --color-text-subtle: #a2a2a2;
}

[data-termynal] {
  width: 750px;
  max-width: 100%;
  height: 320px;
  overflow-y: auto;
  background: var(--color-bg);
  color: var(--color-text);
  font-size: 14px;
  font-family: "Fira Mono", Consolas, Menlo, Monaco, "Courier New", Courier,
    monospace;
  border-radius: 4px;
  padding: 3rem 1.5rem 0.5rem;
  position: relative;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

[data-termynal]:before {
  content: "";
  position: absolute;
  top: 15px;
  left: 15px;
  display: inline-block;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  /* A little hack to display the window buttons in one pseudo element. */
  background: #d9515d;
  -webkit-box-shadow: 25px 0 0 #f4c025, 50px 0 0 #3ec930;
  box-shadow: 25px 0 0 #f4c025, 50px 0 0 #3ec930;
}

[data-termynal]:after {
  content: "~/project";
  position: absolute;
  color: var(--color-text-subtle);
  top: 0.5rem;
  font-size: 1rem;
  left: 0;
  width: 100%;
  text-align: center;
}

[data-ty] {
  display: block;
  line-height: 2;
}

[data-ty]:before {
  /* Set up defaults and ensure empty lines are displayed. */
  content: "";
  display: inline-block;
  vertical-align: middle;
}

[data-ty="input"]:before,
[data-ty-prompt]:before {
  margin-right: 0.5rem;
  color: var(--color-text-subtle);
}

[data-ty="input"]:before {
  content: "$";
}

[data-ty][data-ty-prompt]:before {
  content: attr(data-ty-prompt);
}

[data-ty-cursor]:after {
  content: attr(data-ty-cursor);
  font-family: monospace;
  margin-left: 0.25rem;
  -webkit-animation: blink 1s infinite;
  animation: blink 1s infinite;
}

/* Cursor animation */

@-webkit-keyframes blink {
  50% {
    opacity: 0;
  }
}

@keyframes blink {
  50% {
    opacity: 0;
  }
}
</style>
