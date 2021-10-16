<template>
  <div v-editable="blok" class="code">
      <h1>This is a code block</h1>
      <code>{{blok}}</code>
  </div>
</template>

<script>

export default {
  name: "HighlightedCode",
  props: {
    blok: Object
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/scss/_variables.scss";
@import "@/scss/_layout.scss";

</style>
