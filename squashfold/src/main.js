import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import StoryblokVue from 'storyblok-vue';
import VueCompositionApi from '@vue/composition-api';
import VueRichTextRenderer from '@marvr/storyblok-rich-text-vue-renderer';

import Page from '@/components/Page';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Teaser from '@/components/Teaser';
import Icon from '@/components/Icon';
import IconRow from '@/components/IconRow';
import LatestPosts from '@/components/LatestPosts';
import HighlightedCode from '@/components/HighlightedCode';
import VuePrlx from 'vue-prlx';

Vue.component('page', Page);

Vue.component('teaser', Teaser);
Vue.component('hero', Hero);
Vue.component('about', About);
Vue.component('icon', Icon);
Vue.component('icon-row', IconRow);
Vue.component('latestPosts', LatestPosts);
Vue.component('highlightedCode', HighlightedCode);

Vue.use(VuePrlx);

 // Register Composition API
Vue.use(VueCompositionApi);

Vue.use(StoryblokVue)
Vue.use(VueCompositionApi);
// Vue.use(VueRichTextRenderer);
Vue.use(VueRichTextRenderer, {
  resolvers: {
    components: {
      latestPosts: LatestPosts,
      highlightedCode: HighlightedCode,
      about: About
    },
  }
});

Vue.config.productionTip = false;

//SVG
import InlineSvg from 'vue-inline-svg';
Vue.component('inline-svg', InlineSvg);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
