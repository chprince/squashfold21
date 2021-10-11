<template>
  <div id="app">
    <nav class="nav" id="nav">
      <router-link to="/"><strong>Squash</strong>Fold</router-link>
      <div>
        <router-link to="/Blog">Blog</router-link> |
        <router-link to="/Post">Post Sample</router-link> |
        <router-link to="/">Contact</router-link>
      </div>
    </nav>
    <router-view />
  </div>
</template>

<style lang="scss">
@import "@/scss/_variables.scss";
@import "@/scss/_typography.scss";
@import "@/scss/_layout.scss";

body {
  padding: 0;
  margin: 0;
  font-size: $default-font-size;
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
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.layout-container {
  max-width: 1366px;
  margin: 0 auto;
  padding: $indent__xl $indent__base;

  @include from('medium') {
    padding: $indent__xxl $indent__l;
  }
}
</style>
