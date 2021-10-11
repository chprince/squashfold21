<template>
  <div v-editable="blok" class="latestPosts" v-bind:style="{ 'background-color': '#' + getThemeSettings.palette.bg2.hex }">
      <div class="layout-container">
        <h2>Latest posts</h2>
        <PostGrid v-bind:pages="3" />
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
