<template>
  <div class="section">
    <div class="container">
      <div class="columns is-centered">
        <div class="column is-one-third text--left">
          <h2>Meet Storyscript</h2>
          <p>The first goal-oriented programming language,<br>empowering developers to focus on features;<br>deploying in a fraction of the time,<br>scaling in days rather than months.</p>
        </div>
        <div class="column is-half">
          <!-- <a-demo :actions="actions"/> -->
          <a-window
            class="story"
            title="http.story">{{ code }}</a-window>
          <p>Horizontal auto-scaling</p>
          <a-window
            class="story"
            title="slack.story">{{ code2 }}</a-window>
          <p>Create integrations in minutes, deploying in seconds</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

const highlight = function (code) {
  /* global Prism */
  return Prism.highlight(
    code,
    Prism.languages.coffeescript,
    'coffeescript'
  )
}

export default {
  name: 'Demo',
  data: () => ({
    actions: [{
      type: 'editor',
      minHeight: '554px',
      code: highlight(`# Horizontal auto-scaling\n\nhttp server as server\n  when server listen path:'/' method:'get' as req\n    req write content:'hello world!'\n`),
      windowTitle: 'app.story'
    }, {
      type: 'editor',
      code: highlight(`# Create integrations in minutes, deploying in seconds\n\nslack bot as bot\n  when bot hears pattern:/weather/ as message\n    location = corenlp location text:message.text\n    fc = accuweather forecast location:location\n    slack reply thread_ts:message.thread_ts text:fc\n`)
    }, {
      type: 'terminal',
      minHeight: '554px',
      command: 'cat ./app.story',
      respond: `# Horizontal auto-scaling\n\nhttp server as server\n  when server listen path:'/' method:'get' as req\n    req write content:'hello world!'\n\n# Create integrations in minutes, deploying in seconds\n\nslack bot as bot\n  when bot hears pattern:/weather/ as message\n    location = corenlp location text:message.text\n    fc = accuweather forecast location:location\n    slack reply thread_ts:message.thread_ts text:fc`
    }, {
      type: 'terminal',
      command: 'asyncy deploy',
      respond: '√ Deployed!\nIf your story listens to HTTP requests, visit https://my-project.asyncyapp.com'
    }, {
      type: 'terminal',
      command: 'curl my-project.asyncyapp.com',
      respond: 'hello world!'
    }, {
      type: 'terminal',
      command: ''
    }],
    code: `http server as server\n  when server listen path:'/' method:'get' as req\n    req write content:'hello world!'`,
    code2: `slack bot as bot\n  when bot hears pattern:/weather/ as message\n    location = corenlp location text:message.text\n    fc = accuweather forecast location:location\n    slack reply thread_ts:message.thread_ts text:fc`,
    code3: `Need to be written`,
    deploy3: `$> asyncy deploy\n√ Deployed!\nIf your story listens to HTTP requests, visit https://cat-or-dog.org`
  }),
  methods: {
    openDoc: function () {
      window.location = '//docs.asyncy.com'
    }
  }
}
</script>
