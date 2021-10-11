<template>
  <div class="post">
    <h1>{{this.story.content.title}}</h1>
    <!-- {{ this.story.content }} -->
    <rich-text-renderer :document="this.story.content.long_text" />
  </div>
</template>

<script>
// @ is an alias to /src
import StoryblokClient from 'storyblok-js-client'

const token = 'Ghd2CFQWsS9RgzmF2X03GQtt';

let storyapi = new StoryblokClient({
  accessToken: token
});

export default {
  name: "PostSample",
  data: function () {
    return {
      story: 'hello'
    }
  },
  props: {
    // slug: ,
  },
  components: {
  },
  computed: {
  },
  created () {
    // 4. Initialize the Storyblok Client Bridge to allow us to subscribe to events
    // from the editor itself.
    window.storyblok.init({
      accessToken: token
    })
    window.storyblok.on('change', () => {
      this.getStory(this.$route.params.id, 'draft')
    })
    window.storyblok.pingEditor(() => {
      if (window.storyblok.isInEditor()) {
        // draft will be loaded if embeded in app.storyblok.com
        this.getStory(this.$route.params.id, 'draft')
      } else {
        // published versions will be loaded outside of app.storyblok.com
        // so make sure to published your entries - otherwise this will be a 404
        this.getStory(this.$route.params.id, 'published')
      }
    })
  },
  methods: {
    getStory(slug, version) {
      console.log(slug);
      storyapi.get('cdn/stories/blog/' + slug, {
        version: version
      })
      .then((response) => {
        this.story = response.data.story
      })
      .catch((error) => {
        console.log(error);
      })
    }
  },
};
</script>