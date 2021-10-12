<template>
  <div class="blog layout-container">
    <div class="blog__header">
      <h1>Blog</h1>
      <form>
        <label class="visually-hidden" for="search-input">Search</label>
        <input id="search-input" v-model="query" @input="searchTerm = query" type="text" placeholder="Search" />
      </form>
    </div>
    <PostGrid v-bind:pages="this.pages" v-bind:searchTerm="this.searchTerm" />
    <div class="toolbar toolbar--center">
      <button class="btn" @click="pages += 3">Load More</button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import PostGrid from "@/components/PostGrid.vue";

export default {
  name: "Blog",
  components: {
    PostGrid,
  },
  data: function () {
    return {
      pages: 6,
      searchTerm: '',
    }
  },
};
</script>

<style scoped lang="scss">
@import "@/scss/_variables.scss";
@import "@/scss/_layout.scss";

.blog {
  padding-top: $indent__xl;

  &__header {
    display: flex;
    flex-direction: column;
    padding: $indent__base 0;

    @include from('xsmall') {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      padding: $indent__l 0;

      h1 {
        padding-right: $indent__base;
      }
    }

    h1 {
      margin: 0;
    }

    input[type="text"] {
      padding: $indent__base;
      border-radius: 6px;
      border: 2px solid #000;
      font-size: $font-size__base;
      width: 100%;
      box-sizing: border-box;
      margin-top: $indent__base;

      &:focus,
      &:focus-visible {
        border-color: $accent;
      }

      @include from('xsmall') {
        max-width: 300px;
        margin-top: 0;
      }
    }
  }
}
</style>