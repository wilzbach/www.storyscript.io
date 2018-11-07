<template>
  <div class="section">
    <div class="container">
      <div class="columns is-centered">
        <div class="column is-one-third text--left">
          <h2>Meet Storyscript</h2>
          <p>The first goal-oriented programming language,<br>empowering developers to focus on features;<br>deploying in a fraction of the time,<br>scaling in days rather than months.</p>
        </div>
        <div class="column is-half">
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
      <!-- <a-tabs class="container">
        <a-card light>
          <a-tab-pane title="Serverless HTTP">
            <div class="columns">
              <div class="column is-three-fifths">
                <a-window>{{ code }}</a-window>
                <a-window
                  :copy="false"
                  type="terminal"
                  lang="bash">{{ deploy }}</a-window>
              </div>
              <div class="column is-two-fifths">
                <a-window
                  title="wonderful-app-666.asyncyapp.com"
                  type="browser">
                  <h3>hello world!</h3>
                </a-window>
              </div>
            </div>
          </a-tab-pane>
          <a-tab-pane title="Slack Bot">
            <div class="columns">
              <div class="column is-three-fifths">
                <a-window title="Source">{{ code2 }}</a-window>
                <a-window
                  :copy="false"
                  title="Logs"
                  type="terminal"
                  lang="bash">{{ deploy2 }}</a-window>
              </div>
              <div class="column is-two-fifths">
                <a-window
                  title="mycompany.slack.com"
                  type="browser">
                  <div class="columns is-mobile is-gapless">
                    <div class="column is-one-fifth bg--dark">
                      <p>hello</p>
                    </div>
                    <div class="column is-one-fifth bg--light">
                      <p>channel</p>
                    </div>
                    <div class="column is-three-fifths bg--white">
                      <p>content</p>
                    </div>
                  </div>
                </a-window>
              </div>
            </div>
          </a-tab-pane>
          <a-tab-pane title="Machine Learning">
            <div class="columns stretch">
              <div class="column is-three-fifths">
                <a-window title="Source">{{ code3 }}</a-window>
                <a-window
                  :copy="false"
                  title="Logs"
                  type="terminal"
                  lang="bash">{{ deploy3 }}</a-window>
              </div>
              <div class="column is-two-fifths">
                <a-window
                  title="cat-or-dog.org"
                  type="browser">
                  <h3>Upload your picture</h3>
                </a-window>
              </div>
            </div>
          </a-tab-pane>
        </a-card>
      </a-tabs> -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'Demo',
  data: () => ({
    code: `http server as server\n  when server listen path:'/' method:'get' as req\n    req write content:'hello world!'`,
    code2: `slack bot as bot\n  when bot hears pattern:/weather/ as message\n    location = corenlp location text:message.text\n    fc = accuweather forecast location:location\n    slack reply thread_ts:message.thread_ts text:fc`,
    code3: `Need to be written`,
    deploy: `$> asyncy deploy\n√ Deployed!\nIf your story listens to HTTP requests, visit https://wonderful-app-666.asyncyapp.com`,
    deploy2: `$> asyncy deploy\n√ Deployed!\nIf your story listens to HTTP requests, visit https://xxx-yyy-777.asyncyapp.com`,
    deploy3: `$> asyncy deploy\n√ Deployed!\nIf your story listens to HTTP requests, visit https://cat-or-dog.org`
  }),
  methods: {
    openDoc: function () {
      window.location = '//docs.asyncy.com'
    }
  }
}
</script>

<style lang="scss" scoped>
.story {
  margin-top: 1rem;
}
</style>
