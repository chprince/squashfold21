<template>
  <div v-editable="blok" class="latestPosts" v-bind:style="{ 'background-color': '#' + getThemeSettings.palette.bg2.hex }">
      <div class="layout-container layout-container--cut-alt layout-container--cut">
        <div class="latestPosts__top">
          <h2>Latest posts</h2>
          <router-link class="btn desktop-only" to="/Blog">View all</router-link>  
        </div>
        <PostGrid v-bind:pages="3" />
        <div class="toolbar toolbar--center mobile-only">
          <router-link class="btn" to="/Blog">View all</router-link>  
        </div>
      </div>
  </div>
</template>

<script>
import PostGrid from "@/components/PostGrid.vue";
import { mapGetters } from "vuex";

export default {
  name: "LatestPosts",
  components: {
    PostGrid,
  },
  props: {
    blok: Object
  },
  computed: {
    ...mapGetters(["getThemeSettings"]),
  },
};
</script>

<style scoped lang="scss">
@import "@/scss/_variables.scss";
@import "@/scss/_layout.scss";

.latestPosts {
  &__top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: $indent__base;

    h2 {
      margin: 0;
    }
  }

  .toolbar {
    .btn {
      width: 100%;
    }
  }
}
</style>
