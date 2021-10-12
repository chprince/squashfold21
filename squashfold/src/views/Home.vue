<template>
  <div class="home">
      <component :blok="story.content" :is="story.content.component"></component>
  </div>
</template>

<script>
// @ is an alias to /src
import About from "@/components/About.vue";
import Hero from "@/components/Hero.vue";
import PostGrid from "@/components/PostGrid.vue";
import StoryblokClient from 'storyblok-js-client'

const token = 'Ghd2CFQWsS9RgzmF2X03GQtt';

let storyapi = new StoryblokClient({
  accessToken: token
});

import { mapGetters } from "vuex";

export default {
  name: "Home",
  components: {
    About,
    Hero,
    PostGrid,
  },
  computed: {
    ...mapGetters(["getAboutSection", "getHeroQuote"]),
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      story: {
        content: {
          body: []
        }
      }
    }
  },
  created () {
    // 4. Initialize the Storyblok Client Bridge to allow us to subscribe to events
    // from the editor itself.
    window.storyblok.init({
      accessToken: token
    })
    window.storyblok.on('change', () => {
      this.getStory('home', 'draft')
    })
    window.storyblok.pingEditor(() => {
      if (window.storyblok.isInEditor()) {
        // draft will be loaded if embeded in app.storyblok.com
        this.getStory('home', 'draft')
      } else {
        // published versions will be loaded outside of app.storyblok.com
        // so make sure to published your entries - otherwise this will be a 404
        this.getStory('home', 'published')
      }
    })
  },
  methods: {
    getStory(slug, version) {
      storyapi.get('cdn/stories/' + slug, {
        version: version
      })
      .then((response) => {
        this.story = response.data.story
      })
      .catch((error) => {
        console.log(error);
      })
    }
  }
};
</script>
