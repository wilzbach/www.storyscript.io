<template>
  <div>
    <cookies-banner @cookie-consent-received="onConsentReceived" v-if="!consentReceived"/>
    <app-header />
    <nuxt :style="{
      margin: '25px',
    }"/>
    <app-footer />
  </div>
</template>

<script>
import jsonp from 'jsonp';
import CookiesBanner from '~/node_modules/asyncy-ui-components/components/CookiesBanner';
import AppHeader from '~/components/AppHeader';
import AppFooter from '~/components/AppFooter';

export default {
  components: {
    CookiesBanner,
    AppHeader,
    AppFooter,
  },
  data() {
    return {
      consentReceived: false,
    };
  },
  methods: {
    onConsentReceived() {
      this.consentReceived = true;

      this.loadServices();
    },
    loadServices() {
      // Use jsonp to avoid CORS issues
      jsonp('https://embed.typeform.com/embed.js');

      this.loadGA();

      window.ga('create', process.env.gaKey, 'auto');
      window.ga('set', 'page', this.$route.path);
      window.ga('send', 'pageview');
    },
    loadGA() {
      (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
        (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
        m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
        })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
    },
  },
  watch: {
    '$route.path'(newPath) {
      window.ga && window.ga('set', 'page', newPath);
      window.ga && window.ga('send', 'pageview');
    },
  },
}
</script>

<style lang="scss">
/* contains all css global to the asyncy marketing site */
@import "../node_modules/bulma/sass/utilities/initial-variables";
@import "../node_modules/bulma/sass/utilities/functions";

$dropdown-content-background-color: #363636;
$dropdown-item-hover-background-color: #363636;
$dropdown-item-hover-color: #D1D1D1;
$dropdown-item-color: $white;
$dropdown-content-offset: 14px;

@import "../node_modules/bulma/sass/utilities/_all";

@import "../node_modules/bulma/sass/grid/columns";
@import "../node_modules/bulma/sass/grid/tiles";
@import "../node_modules/bulma/sass/base/helpers";
@import "../node_modules/bulma/sass/components/level";
@import "../node_modules/bulma/sass/components/dropdown";
@import '../assets/fonts/1804-GFNGYO';

body {
  background: #111;
  color: #111;
  font-size: 1em;
  font-family: Graphik Web,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizelegibility;
  margin: 0;

  *, *:before, *:after {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
}

.subtitle {
  font-size: 1.15em;
}

/* contains css global to the Asyncy org */

a {
  text-decoration: none;
  color: #515CF9;
  font-weight: 500;
  transition: all 0.2s;
}

input {
  font-size: 1em;
  border-radius: 6px;
  border: 1px solid transparent;
  padding: 15px 20px;
  margin-bottom: 10px;
  background-color: rgba(35,35,35,1);
  color: rgba(190,190,190,1);
  transition: all 0.2s ease-in-out;
  outline: none;
}

input:focus {
  border-color: #515CF9;
  filter: brightness(120%);
  color: white;
}

input:invalid {
  border-color: #F74545;
  color: #F74545;
}

h1  {
  font-size: 2.5em;
  margin-bottom: 0.20em;
  font-weight: 400;
  margin-top: 0.4em;
}

h2  {
  font-size: 2em;
  font-weight:300;
  margin-bottom: 0.5em;
  margin-top: 0.5em;
  font-weight: 400;
}

h3  {
  font-size: 2em;
  font-weight:300;
  margin-bottom: 0.2em;
  margin-top: 0.2em;
  font-weight: 400;
}

h4 {
  font-size: 1.6em;
  font-weight:300;
  margin-bottom: 0.7em;
  margin-top: 0.2em;
  font-weight: 400;
}

h5 {
  font-size: 1em;
  font-weight:300;
  margin-bottom: 0.2em;
  margin-top: 0.2em;
  font-weight: 400;
}

p {
  font-size:1.12em;
  line-height:1.9em;
}

button {
  font-size: 0.95em;
  color: white;
  border: none;
  padding: 15px 28px;
  border-radius: 6px;
  transition: all 0.2s;
  cursor: pointer;
  position: relative;
}

.link-text {
  transition: 0.2 all;

  &:hover {
    filter: brightness(125%);
  }
}

button.primary {
  color: black;
  background-color: white;
  text-align: center;
  font-weight: 600;

  &:hover {
    filter: brightness(125%);
  }
}

button.secondary {
  color:black;
  background-color: white;
  border: 1px solid #8F8F8F;
  text-align: center;
  font-weight: 600;

  &:hover {
    color: white;
    background-color: black;
    border-color: black;
  }
}

.button.is-loading {
  color: transparent !important;
  pointer-events: none;
}

.button.is-loading::after, .loader {
  @include loader;
  @include center(1em);
  border-color: transparent transparent rgba(0,0,0,.7) rgba(0,0,0,.7) !important;
}
</style>
