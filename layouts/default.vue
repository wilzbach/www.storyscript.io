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
@import "../node_modules/bulma-stylus/stylus/utilities/_all.styl";
@import "../node_modules/bulma-stylus/stylus/base/helpers.styl";
@import "../node_modules/bulma-stylus/stylus/grid/columns.styl";
@import "../node_modules/bulma-stylus/stylus/grid/tiles.styl";
@import "../node_modules/bulma-stylus/stylus/components/level.styl";
</style>
