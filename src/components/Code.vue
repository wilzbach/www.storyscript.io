<template>
  <div class="code">
    <span ref="command">{{ command }}</span>
    <a-button
      class="code_copy-button"
      type="neutral"
      @click="copy">{{ copyText }}</a-button>
  </div>
</template>

<script>
import copyToClipboard from 'copy-to-clipboard'

export default {
  name: 'Code',
  props: {
    command: {
      type: String,
      default: '[command here]'
    }
  },
  data () {
    return {
      copyText: 'copy'
    }
  },
  methods: {
    copy () {
      copyToClipboard(this.$refs.command.textContent)
      this.copyText = 'copied'

      setTimeout(() => {
        this.copyText = 'copy'
      }, 1000)
    }
  }
}
</script>

<style lang="scss" scoped>
.code {
  position: relative;
  display: inline-block;
  padding: 15px 40px;
  border-radius: 10px;
  font-family: "DejaVu Sans Mono", monospace;
  background-color: var(--default);
  font-size: 1.5rem;
  color: white;

  &:before {
    content: "$ ";
    color: var(--green);
  }
}

.code_copy-button {
  position: absolute;
  right: 30px;
  bottom: 0;
  transform: translateY(65%) !important;
  font-size: 12px !important;
  padding: 6px 12px;
  font-size: 1rem;
  line-height: 1;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
}
</style>
