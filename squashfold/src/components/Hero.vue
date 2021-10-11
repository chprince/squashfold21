<template>
  <div class="hero" v-bind:style="{ 'background-color': '#' + getThemeSettings.palette.bg1.hex }">
    <div v-editable="blok" class="hero__inner">
      <h1>
        {{blok.quote}}
      </h1>
      <h2>
        {{blok.quoteAuthor}}
      </h2>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Hero",
  props: {
    blok: Object
  },
  computed: {
    ...mapGetters(["getThemeSettings"]),
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
