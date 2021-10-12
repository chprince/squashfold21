<template>
  <div class="hero" v-bind:style="{ 'background-color': '#' + getThemeSettings.palette.bg1.hex }">
    <div v-editable="blok" class="hero__inner layout-container layout-container--cut">
      <p class="quote-text">
        {{blok.quote}}
      </p>
      <span class="quote-author">
        - {{blok.quoteAuthor}}
      </span>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
// import InlineSvg from 'vue-inline-svg';

export default {
  name: "Hero",
  data: function () {
    return {
      // bottomBorder: bottomBorder,
    }
  },
  props: {
    blok: Object
  },
  computed: {
    ...mapGetters(["getThemeSettings"]),
  },
  components: {
    // InlineSvg,
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/scss/_variables.scss";
@import "@/scss/_layout.scss";

.hero {
  position: relative; 

  @include from('medium') {
    &::before {
        content: '';
        top: 0;
        right: 10px;
        background-image: url(../assets/hero-2.png);
        height: 200px;
        width: 200px;
        position: absolute;
        background-position: top right;
        background-repeat: no-repeat;
        background-size: contain;
    }

    &::after {
        content: '';
        bottom: 0;
        left: 10px;
        background-image: url(../assets/hero-1.png);
        height: 300px;
        width: 300px;
        position: absolute;
        background-position: bottom left;
        background-repeat: no-repeat;
        background-size: contain;
    }
  }

  @include from('large') {
    &::before {
      width: 200px;
      height: 400px;
    }

    &::after {
      width: 400px;
      height: 400px;
    }
  }

  &__inner {
    &::after {
      content: none;
    }
  }
}

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
