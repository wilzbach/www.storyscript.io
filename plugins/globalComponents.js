import Vue from 'vue';

import MaxWidth from '~/components/MaxWidth'
import Hero from '~/components/Hero'
import PageBackground from '~/components/PageBackground'

export default () => {
  Vue.component('max-width', MaxWidth);
  Vue.component('hero', Hero);
  Vue.component('page-background', PageBackground);
}
