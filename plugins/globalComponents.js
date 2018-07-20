import Vue from 'vue';

import HeroBackground from '~/node_modules/asyncy-ui-components/dist/HeroBackground.js';
import AButton from '~/node_modules/asyncy-ui-components/dist/AButton';
import AInput from '~/node_modules/asyncy-ui-components/dist/AInput';
import MaxWidth from '~/components/MaxWidth';
import Hero from '~/components/Hero';
import UrlLink from '~/components/UrlLink';

import '~/node_modules/asyncy-ui-components/dist/HeroBackground.css';
import '~/node_modules/asyncy-ui-components/dist/AInput.css';
import '~/node_modules/asyncy-ui-components/dist/AButton.css';
import '~/node_modules/asyncy-ui-components/dist/AppHeader.css';
import '~/node_modules/asyncy-ui-components/dist/AppFooter.css';

export default () => {
  Vue.component('max-width', MaxWidth);
  Vue.component('a-input', AInput);
  Vue.component('a-button', AButton);
  Vue.component('hero', Hero);
  Vue.component('page-background', HeroBackground);
  Vue.component('url-link', UrlLink);
}
