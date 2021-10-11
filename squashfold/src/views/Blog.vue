<template>
  <div class="about">
    <h1>This is a blog page</h1>
    <PostGrid v-bind:pages="12" />
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
};
</script>