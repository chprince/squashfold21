<template>
  <div class="hero" v-bind:style="{ 'background-color': '#' + getThemeSettings.palette.bg1.hex }">
    <div v-editable="blok" class="hero__inner layout-container">
      <p class="quote-text">
        {{blok.quote}}
      </p>
      <span class="quote-author">
        - {{blok.quoteAuthor}}
      </span>
    </div>
    {{ this.bottomBorder }}
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import bottomBorder from "../assets/bottom.svg";

export default {
  name: "Hero",
  data: function () {
    return {
      bottomBorder: bottomBorder,
    }
  },
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
@import "@/scss/_variables.scss";
@import "@/scss/_layout.scss";

.quote-text {
  display: block;
  font-size: $font-size__xl;
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
  font-family: $font-family__heading;
  font-weight: bold;

  &:before,
  &:after {
    content: '"';
  }
  
  @include from('medium') {
    font-size: $font-size__xxl;
  }
}

.quote-author {
  display: block;
  text-align: center;
  margin-top: $indent__l;
}
</style>
