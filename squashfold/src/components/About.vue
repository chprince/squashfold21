<template>
  <div v-editable="blok" class="about layout-container">
    <img :src="blok.image.filename" alt="blok.image.alt"/>
    <div class="content">
      <h1>{{ blok.heading }}</h1>
      <rich-text-renderer :document="blok.content" />
    </div>
  </div>
</template>

<script>

export default {
  name: "About",
  props: {
    blok: Object
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/scss/_layout.scss";
@import "@/scss/_variables.scss";

.about {
  display: grid;
  grid-template-columns: 1fr;

  @include from('small') {
    grid-template-columns: 1fr 1fr;
    grid-gap: $indent__base;
    align-items: center;
  }
}
</style>
