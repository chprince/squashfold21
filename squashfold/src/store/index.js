import Vue from "vue";
import Vuex from "vuex";

import aboutImage from "../assets/aboutimage.jpg";
import CSS3Icon from "../assets/devicons/css3.png";
import drupalIcon from "../assets/devicons/drupal.png";
import html5Icon from "../assets/devicons/html5.png";
import jsIcon from "../assets/devicons/js.png";
import lessIcon from "../assets/devicons/less.png";
import magentoIcon from "../assets/devicons/magento.png";
import sassIcon from "../assets/devicons/sass.png";
import vueIcon from "../assets/devicons/vue.png";
import wordpressIcon from "../assets/devicons/wordpress.png";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    themeSettings: {
      palette: {
        bg1: {hex: 'FBE8DE'},
        bg2: {hex: 'CBF4EB'},
        accent: {hex: 'FF846C'},
        accent2: {hex: '7FD1AE'},
      }
    },
    heroQuote:
      {
        quoteText: "Quote here",
        author: "Alanis"
      },
    aboutSection:
      {
        title: "Hi there, I'm Charlie!",
        description: "This is where I put stuff about myself",
        image: aboutImage,
        imageAlt: "Alt text here",
      },
    keySkills: [
      {id: 1, title: "A key skill"},
      {id: 2, title: "another key skill"},
    ],
    tools: [
      {id: 1, title: "CSS3", image: CSS3Icon},
      {id: 2, title: "Drupal", image: drupalIcon},
      {id: 3, title: "html5", image: html5Icon},
      {id: 4, title: "JavaScript", image: jsIcon},
      {id: 5, title: "LESS", image: lessIcon},
      {id: 6, title: "Magento", image: magentoIcon},
      {id: 7, title: "SCSS", image: sassIcon},
      {id: 8, title: "VueJS", image: vueIcon},
      {id: 9, title: "Wordpress", image: wordpressIcon},
    ],
    posts: [
      {
        id: 1,
        category: 'Blog',
        title: "Blog Post Title",
        excerpt: "This is the post excerpt",
        content: "This is the post content and stuff",
      },
      {
        id: 2,
        category: 'Blog',
        title: "Blog Post Title",
        excerpt: "This is the post excerpt",
        content: "This is the post content and stuff",
      },
      {
        id: 3,
        category: 'Blog',
        title: "Blog Post Title",
        excerpt: "This is the post excerpt",
        content: "This is the post content and stuff",
      },
    ]
  },
  getters: {
    listKeySkills: (state) => {
      return state.keySkills;
    },
    getAboutSection: (state) => {
      return state.aboutSection;
    },
    getHeroQuote: (state) => {
      return state.heroQuote;
    },
    getTools: (state) => {
      return state.tools;
    },
    getThemeSettings: (state) => {
      return state.themeSettings;
    },
    getPosts: (state) => {
      return state.posts;
    }
  },
  mutations: {},
  actions: {},
  modules: {},
});
