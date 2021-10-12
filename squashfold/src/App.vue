<template>
  <div id="app">
    <nav class="nav" id="nav">
      <router-link class="home-link" to="/"><strong>Squash</strong>Fold</router-link>
      <div>
        <router-link to="/Blog">Blog</router-link> |
        <router-link to="/">Contact</router-link>
      </div>
    </nav>
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Footer from "@/components/Footer.vue";

export default ({
  setup() {
    
  },
  components: {
    Footer
  }
})
</script>


<style lang="scss">
@import "@/scss/_variables.scss";
@import "@/scss/_typography.scss";
@import "@/scss/_layout.scss";

body {
  padding: 0;
  margin: 0;
  font-size: $default-font-size;
  color: $text-dark;
}

img {
  max-width: 100%;
  height: auto;
}

.nav {
  display: flex;
  justify-content: space-between;
  padding: $indent__l;
  background-color: $bg1;

  a {
    text-decoration: none;
    color: $text-dark;

    &.router-link-exact-active:not(.home-link) {
      // color: $accent;
    }
  }

  .home-link {
    font-family: $font-family__heading;
    font-size: $font-size__l;
  }
}

.layout-container {
  max-width: 1000px;
  margin: 0 auto;
  padding: $indent__xl $indent__base;
  position: relative;

  @include from('medium') {
    padding: $indent__xxl $indent__l;
  }

  &--cut {
        &::before {
            content: '';
            top: calc(100% - 1px);
            left: 0;
            right: 0;
            background-image: url(./assets/bottom1.png);
            height: 50px;
            position: absolute;
            background-position: top center;
            background-repeat: no-repeat;
            background-size: 100% auto;
        }

        &::after {
            content: '';
            bottom: calc(100% - 1px);
            left: 0;
            right: 0;
            background-image: url('./assets/top1.png');
            height: 50px;
            position: absolute;
            background-position: bottom center;
            background-repeat: no-repeat;
            background-size: 100% auto;
        }

        &-alt {
          &::before {
            background-image: url(./assets/bottom2.png);
        }

        &::after {
            background-image: url('./assets/top2.png');
        }
        }
    }
}
</style>
