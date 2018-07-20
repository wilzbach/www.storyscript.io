<template>
  <div>
    <app-header link-component="url-link" :links="headerLinks"/>
    <nuxt :style="{
      margin: '25px',
    }"/>
    <app-footer />
  </div>
</template>

<script>
import AppHeader from '~/node_modules/asyncy-ui-components/dist/AppHeader.js';
import AppFooter from '~/node_modules/asyncy-ui-components/dist/AppFooter.js';

export default {
  data() {
    return {
      headerLinks: [
        { text: 'Platform', to: '/platform' },
        { text: 'Documentation', to: 'https://docs.asyncy.com'},
        {
          text: 'More &#x25BE;',
          items: [
            { text: 'About', to: '/about' },
            { text: 'Events', to: '/events' },
            { text: 'Contact', to: '/contact' },
          ],
        },
      ],
    };
  },
  components: {
    AppHeader,
    AppFooter,
  },
}
</script>

<style lang="styl">
/* contains all css global to the asyncy marketing site */
@import "../node_modules/asyncy-ui-components/dist/css/global.css";

@import "../node_modules/bulma-stylus/stylus/utilities/_all";
@import "../node_modules/bulma-stylus/stylus/grid/columns";
@import "../node_modules/bulma-stylus/stylus/grid/tiles";
@import "../node_modules/bulma-stylus/stylus/base/helpers";
@import "../node_modules/bulma-stylus/stylus/components/level";

body {
  background: #111;
  color: #111;
  font-size: 1em;
  margin: 0;
}

.subtitle {
  font-size: 1.15em;
}

p {
  font-size:1.12em;
  line-height:1.9em;
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
