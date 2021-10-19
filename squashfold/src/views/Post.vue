<template>
  <div class="post layout-container">
    <div v-if="this.loading === 'true'">
      <h1>Loading</h1>
    </div>
    <div class="post__top" v-if="this.loading === 'false'">
      <img :src="this.story.content.image" :alt="this.story.content.title"/>
      <div>
        <div class="post-meta">
          <strong>{{ dateBuilder(this.story.first_published_at) }}</strong> | 
          <span v-for="tag in this.story.tag_list" :key="tag">{{tag}}</span>
        </div>
        <h1>{{this.story.content.title}}</h1>
        <p class="intro">{{this.story.content.intro}}</p>
      </div>
    </div>
    <!-- {{ this.story.content }} -->
    <div class="post__content" v-if="this.loading === 'false'">
      <rich-text-renderer :document="this.story.content.long_text"/>
      <p class="small">Last edited {{ dateBuilder(this.story.published_at) }}</p>
    </div>
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
      story: 'hello',
      loading: 'true',
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
        this.story = response.data.story;
        this.loading = 'false';
      })
      .catch((error) => {
        console.log(error);
      })
    },
    dateBuilder() {
      let d = new Date();
      let months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];
      let date = d.getDate();
      let month = months[d.getMonth()];
      let year = d.getFullYear();
      return `${date} ${month} ${year}`;
    },
  },
};
</script>

<style scoped lang="scss">
@import "@/scss/_layout.scss";
@import "@/scss/_variables.scss";

.post {
  padding-top: $indent__xl;

  &__top {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: $indent__l;
    align-items: center;
    border-bottom: 2px dashed #000;
    padding-bottom: $indent__l;
    margin-bottom: $indent__l;

    @include from('medium') {
      grid-template-columns: 1fr 1fr;
    }
  }

  &__content {
    max-width: 600px;
    margin: 0 auto;
  }
}
</style>
