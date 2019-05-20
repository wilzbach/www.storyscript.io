<template>
  <s-layout
    padding="large"
    background="light"
  >
    <s-container centered-vh>
      <s-div
        :padding="['normal', 'large']"
        size="12"
      >
        <s-text
          alignment="centered"
          head="2"
        >Use Cases</s-text>
        <s-text
          alignment="centered"
          p="1"
          padding="min"
        >From small workflows to commercialized applications.</s-text>
      </s-div>
      <s-div
        v-for="(uc, idx) of usecases"
        :key="`list-usecases-${_uid}-${idx}`"
        size="half"
        padding="1x"
        class="s-usecase-box-container"
      >
        <div class="code-block code-block-lighter">
          <div class="head">
            <s-logo
              variant="black"
              icon
            />
            <code v-text="uc.name" />
            <!-- <a
              v-if="idx % 4 !== 0"
              class="button is-link is-capitalized is-primary has-small-arrow is-small"
            ><span>Launch</span>
              <s-icon
                class="icon arrow"
                icon="arrow"
            /></a> -->
          </div>
          <div class="body">
            <prism language="story">{{ uc.code }}</prism>
          </div>
        </div>
      </s-div>
    </s-container>
  </s-layout>
</template>

<script>
import IconUseCases from '@/components/IconUseCases'

export default {
  name: 'UseCases',
  components: { IconUseCases },
  data: () => ({ usecases: [{
    name: 'http.story',
    code: "# Simple HTTP server\nhttp server as client\n  when client listen method:'get' path:'/' as r\n    r write content:'Hello world!'"
  }, {
    name: 'redis.story',
    code: "# Communicate with a Redis server.\nhttp server as client\n  when client listen method:'get' path:'/cache' as r\n    key = r.query_params['key']\n    result = redis/get key='cache-{key}'\n    r write content:result"
  }, {
    name: 'minio.story',
    code: "# Store things in minio (S3 API)...\nhttp server as client\n  when client listen method:'post' path:'/store' as r\n    upload = r.body['store']\n    minio fputobject name:'mybucket' objectname:'output.html' contents:upload"
  }, {
    name: 'wolfram.story',
    code: '# Respond to incoming Slack messages with Wolfram Alpha answers.\nwhen slack bot responds as msg\n  msg reply text:(wolfram answer query:msg.text).answer'
  }, {
    name: 'monitor_social.story',
    code: "# Social media monitoring.\nwhen twitter stream tweets track:'#storyscript' as tweet\n  sent = machinebox/textbox process input:tweet.text\n  if sent.positive\n    tweet like"
  }, {
    name: 'pandoc.story',
    code: "# Harness Pandoc, anywhere, to interchange data.\nhttp server as client\n  when client listen method:'post' path:'/md2html' as r\n    doc = r.body['md']\n    html = pandoc convert doc:doc format:'markdown' output:'html'\n    r write content:html"
  }] })
}
</script>

<style lang="scss">
.s-usecase-box-container {
  &:nth-child(3n) {
    @include desktop {
      margin-top: 1rem;
      margin-bottom: -1rem;
    }
  }
}
.s-usecase-box {
  background-color: $white;
  background-image: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzVweCIgaGVpZ2h0PSI2MXB4IiB2aWV3Qm94PSIwIDAgMzUgNjEiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PGcgZmlsbD0iI0M2QzdEQyI+PGVsbGlwc2UgY3g9IjEuNTkwOTA5MDkiIGN5PSIxLjUiIHJ4PSIxLjU5MDkwOTA5IiByeT0iMS41IiAvPjxlbGxpcHNlIGN4PSIxNy41IiBjeT0iMS41IiByeD0iMS41OTA5MDkwOSIgcnk9IjEuNSIgLz48ZWxsaXBzZSBjeD0iMzMuNDA5MDkwOSIgY3k9IjEuNSIgcng9IjEuNTkwOTA5MDkiIHJ5PSIxLjUiIC8+PGVsbGlwc2UgY3g9IjEuNTkwOTA5MDkiIGN5PSIyMC41IiByeD0iMS41OTA5MDkwOSIgcnk9IjEuNSIgLz48ZWxsaXBzZSBjeD0iMTcuNSIgY3k9IjIwLjUiIHJ4PSIxLjU5MDkwOTA5IiByeT0iMS41IiAvPjxlbGxpcHNlIGN4PSIzMy40MDkwOTA5IiBjeT0iMjAuNSIgcng9IjEuNTkwOTA5MDkiIHJ5PSIxLjUiIC8+PGVsbGlwc2UgY3g9IjEuNTkwOTA5MDkiIGN5PSI0MC41IiByeD0iMS41OTA5MDkwOSIgcnk9IjEuNSIgLz48ZWxsaXBzZSBjeD0iMTcuNSIgY3k9IjQwLjUiIHJ4PSIxLjU5MDkwOTA5IiByeT0iMS41IiAvPjxlbGxpcHNlIGN4PSIzMy40MDkwOTA5IiBjeT0iNDAuNSIgcng9IjEuNTkwOTA5MDkiIHJ5PSIxLjUiIC8+PGVsbGlwc2UgY3g9IjEuNTkwOTA5MDkiIGN5PSI1OS41IiByeD0iMS41OTA5MDkwOSIgcnk9IjEuNSIgLz48ZWxsaXBzZSBjeD0iMTcuNSIgY3k9IjU5LjUiIHJ4PSIxLjU5MDkwOTA5IiByeT0iMS41IiAvPjxlbGxpcHNlIGN4PSIzMy40MDkwOTA5IiBjeT0iNTkuNSIgcng9IjEuNTkwOTA5MDkiIHJ5PSIxLjUiIC8+PC9nPjwvc3ZnPg==");
  background-position: calc(100% - 1rem) 1rem;
  background-repeat: no-repeat;
  border-radius: 0.625rem;
  box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.09);
  padding: 2rem 2rem 2rem 1rem;
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  cursor: pointer;
  p {
    color: #110e24;
    word-break: normal;
    @include touch {
      word-break: break-all;
    }
  }
  .icon {
    background-color: rgba($info, 0.35);
    border-radius: 2rem;
    width: 4rem;
    min-width: 4rem;
    height: 4rem;
    margin-right: 1rem;
    @include desktop-only {
      margin-right: 0.2rem;
    }
    @include widescreen-only {
      margin-right: 0.2rem;
    }
    svg {
      fill: nth($grays, 2);
    }
  }
  &:hover {
    .icon {
      background-color: $white;
    }
    background-color: #722bff;
    p {
      color: $white;
    }
  }
}
</style>
