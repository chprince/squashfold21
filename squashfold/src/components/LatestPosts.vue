<template>
  <div v-editable="blok" class="about" v-bind:style="{ 'background-color': '#' + getThemeSettings.palette.bg2.hex }">
      <h2>Latest posts</h2>
      <PostGrid v-bind:pages="3" />
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
