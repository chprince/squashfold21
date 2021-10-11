<template>
  <div v-editable="blok" class="icon">
      <img :src="blok.image.filename" alt="blok.image.alt"/>
  </div>
</template>

<script>

export default {
  name: "Icon",
  props: {
    blok: Object
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/scss/_layout.scss";

.icon {
  text-align: center;
  
    img {
      width: 100%;
      max-width: 60px;
      height: auto;

      @include from('medium') {
        max-width: 80px;
      }

      @include from('medium') {
        max-width: 100px;
      }
    }
}
</style>
