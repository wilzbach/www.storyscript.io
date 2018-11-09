import Vue from 'vue'
import GDemo from '@glorious/demo'
import '@glorious/demo/dist/gdemo.min.css'

const GloriousDemoComponent = {
  name: 'GloriousDemo',
  data: () => ({ demo: undefined }),
  props: {
    actions: {
      type: Array,
      default: () => [
        {
          type: 'editor',
          windowTitle: 'demo.js',
          code: `
function greet(){
  console.log("Hello World!");
}

greet();
`
        }, {
          type: 'terminal',
          command: 'node ./demo.js',
          respond: 'Hello World!',
          promptString: '$'
        }, {
          type: 'terminal',
          command: ''
        }
      ]
    },
    autostart: {
      type: Boolean,
      default: true,
      description: 'Autostart the demo'
    }
  },
  render: function (h) { return h('div', { class: { [`glorious-demo-${this._uid}`]: true } }) },
  mounted: function () {
    this.demo = new GDemo(`.glorious-demo-${this._uid}`)
    this.$el.style.textAlign = 'left'
    if (this.autostart) {
      this.process()
    }
  },
  methods: {
    process: function () {
      let last
      for (let action of this.actions) {
        if (!last || last !== action.type || action.newWindow) {
          this.$el.style.minHeight = action.minHeight || '350px'
          this.demo.openApp(action.type, {
            minHeight: action.minHeight || '350px',
            windowTitle: action.windowTitle || (action.type === 'terminal' ? 'bash' : 'file'),
            promptString: action.type === 'terminal' ? action.promptString || '~/my-project $' : undefined,
            onCompleteDelay: action.onCompleteDelay || 1000
          })
        }
        if (action.type === 'editor') {
          this.demo.write(action.code, { onCompleteDelay: (action.delay || 1500) })
        } else if (action.type === 'terminal') {
          this.demo.command(action.command, { onCompleteDelay: (action.delay || 100), promptString: action.promptString })
          if (action.respond) {
            this.demo.respond(action.respond, { onCompleteDelay: (action.respondDelay || 300) })
          }
        }
        last = action.type
      }
      this.demo.end()
    }
  }
}

Vue.component('a-demo', GloriousDemoComponent)
