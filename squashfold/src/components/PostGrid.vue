<template>
  <section class="posts-grid">
    <div class="posts-grid__inner">
        <article class="posts-grid__item" v-for="post in this.posts" :key="post.id">
          <router-link  :to="{ path: '/Post/'+ post.slug }">
            <strong>{{ dateBuilder(post.published_at) }}</strong>
            <span class="post-tag">{{post.tag_list[0]}}</span>
            <h3 class="post-title">{{post.name}}</h3>
            <p>{{post.content.excerpt}}</p>
            <!-- <rich-text-renderer v-if="post.content.long_text" :document="post.content.long_text" /> -->
            <!-- {{post}} -->
          </router-link>
        </article>
    </div>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
import StoryblokClient from 'storyblok-js-client'

const token = 'Ghd2CFQWsS9RgzmF2X03GQtt';

let storyapi = new StoryblokClient({
  accessToken: token
});

export default {
  name: "PostGrid",
  data: function () {
    return {
      posts: 'hello'
    }
  },
  props: {
    slug: String,
    pages: Number,
    searchTerm: String,
  },
  computed: {
    ...mapGetters(["getPosts"]),
  },
  created () {
    window.storyblok.init({
      accessToken: token
    })
    this.getListPosts();
  },
  watch: {
    pages: function(newVal, oldVal) { // watch it
      console.log('Prop changed: ', newVal, ' | was: ', oldVal);
      this.getListPosts();
    },
    searchTerm: function(newVal, oldVal) {
      console.log('Prop changed: ', newVal, ' | was: ', oldVal);
      this.getListPosts();
    }
  },
  methods: {
    getListPosts() {
      storyapi.get('cdn/stories', {
        "starts_with": "blog/",
        "per_page": this.pages,
        "search_term": this.searchTerm,
      })
      .then(response => {
        this.posts = response.data.stories
      }).catch(error => { 
        console.error(error)
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
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/scss/_variables.scss";
@import "@/scss/_layout.scss";

.posts-grid {
  &__inner {
    display: flex;
    flex-direction: column;
  }

  &__item {
    a {
      display: block;
      color: #000;
      text-decoration: none;
      border-bottom: 2px dashed #000;
      padding: $indent__l 0;
      text-align: left;

      .post-tag {
        &::before {
          content: ' - ';
        }
      }

      @include from('medium') {
        display: grid;
        grid-template-columns: 1fr 1fr 2fr 2fr;
        grid-gap: $indent__base;
        align-items: center;

        .post-tag::before {
          content: none;
        }
      }
    }

    &:first-child {
        a{
          border-top: 2px dashed #000;
        }
      }
  }

  // .post-title {
  //   font-size: $font-size__xl;
  // }
}
</style>
