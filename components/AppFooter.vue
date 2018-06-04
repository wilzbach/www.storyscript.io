<template>
  <div
    :style="{
      fontSize: '0.9em',
      marginTop: '75px',
      marginBottom: '55px',
    }"
  >
    <div class='columns' :style="{
      maxWidth: '1000px',
      margin: '0 auto',
      padding: '0 25px',
    }">
      <nav class='column'>
        <div class="menu-header">Product</div>
        <ul class="ul">
          <li class="li"><url-link to='/platform'>Platform</url-link></li>
          <li class="li"><url-link to='https://docs.asyncy.com'>Documentation</url-link></li>
          <li class="li"><url-link to='https://docs.asyncy.com/faq'>FAQ</url-link></li>
          <li class="li">
            <a class="item typeform-share button" href="https://asyncy.click/feedback" data-mode="popup" data-hide-headers="true" data-hide-footer="true" target="_blank">Give Feedback</a>
          </li>
        </ul>
      </nav>
      <nav class='column'>
        <div class="menu-header">Resources</div>
        <ul class="ul">
          <li class="li"><url-link to='/events'>Events</url-link></li>
          <li class="li"><url-link to='https://medium.com/asyncy'>Blog</url-link></li>
        </ul>
      </nav>
      <nav class='column'>
        <div class="menu-header">Company</div>
        <ul class="ul">
          <li class="li"><url-link to='/about'>About</url-link></li>
          <li class="li"><url-link to='https://angel.co/asyncy/jobs'>Jobs</url-link></li>
          <li class="li"><url-link to='/contact'>Contact</url-link></li>
        </ul>
      </nav>
      <div class='column'>
        <url-link to='http://asyncy.click/slack'>
          <img :src="slackLogo" :style="{
            display: 'inline-block',
            width: '30px',
          }" alt="Slack"/>
        </url-link>
        <url-link to='https://github.com/asyncy'>
          <img :src="githubLogo" :style="{
            display: 'inline-block',
            width: '30px',
            marginLeft: '25px',
          }" alt="Github"/>
        </url-link>
        <url-link to='https://twitter.com/asyncy'>
          <img :src="twitterLogo" :style="{
            display: 'inline-block',
            width: '30px',
            marginLeft: '25px',
          }" alt="Twitter"/>
        </url-link>
      </div>
    </div>
  </div>
</template>

<script>
import slackLogo from '~/assets/images/slack_logo.svg?external';
import githubLogo from '~/assets/images/github_logo.svg?external';
import twitterLogo from '~/assets/images/twitter_logo.svg?external';

export default {
  data() {
    return {
      slackLogo,
      githubLogo,
      twitterLogo,
    };
  },
}
</script>

<style scoped lang="scss">
.ul {
  list-style: none;
  padding-left: 0;
}

.li {
  font-size: 1.1em;
  margin-bottom: 0.5em;
}

.li a {
  color: #A3A3A3;
  font-size: 0.95em;
  font-weight: 400;
  line-height: 1.6em;
}

.li a:hover {
  color: white;
  transition: color 0.3s ease-out;
  -webkit-transition: color 0.3s ease-out;
  -moz-transition: color 0.3s ease-out;
  -o-transition: color 0.3s ease-out;
  transition: color 0.3s ease-out;
}

.menu-header {
  font-size: 1em;
  color: white;
  margin-bottom: 1em;
}
</style>
