<template>
  <div class="footer" v-bind:style="{ 'background-color': '#' + getThemeSettings.palette.bg1.hex }">
    <div class="footer__inner layout-container layout-container--cut">
        <h2>Want to get in touch?</h2>
        <p>Message me on <a href="/">LinkedIn</a> or <a href="/">Twitter</a></p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
// import InlineSvg from 'vue-inline-svg';

export default {
  name: "Footer",
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

.footer {
    &__inner {
        text-align: center;

        &::before {
            content: none;
        }
    }
    
    a {
        color: $accent;
        font-weight: bold;
    }
}
</style>
