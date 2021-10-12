<template>
  <div id="app">
    <nav class="nav" id="nav">
      <div class="nav__inner layout-container layout-container--cut">
        <router-link class="home-link" to="/"><strong>Squash</strong>Fold</router-link>
        <div>
          <router-link to="/Blog">Blog</router-link>
        </div>
      </div>
    </nav>
    <!-- <transition name="slide-fade"> -->
      <router-view />
    <!-- </transition> -->
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

.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(100vw);
  opacity: 0;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

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
  background-color: $bg1;

  &__inner {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: $indent__l !important;
  }

//   &::before {
//     content: '';
//     top: calc(100% - 1px);
//     left: 0;
//     right: 0;
//     background-image: url(./assets/bottom1.png);
//     height: 50px;
//     position: absolute;
//     background-position: top center;
//     background-repeat: no-repeat;
//     background-size: 100% auto;
// }

  a {
    text-decoration: none;
    color: $text-dark;
    opacity: 1;
    transition: all ease-in-out .2s;

    &.router-link-exact-active:not(.home-link) {
      opacity: 0;
    }

    &:hover,
    &:focus {
      text-decoration: underline;
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
