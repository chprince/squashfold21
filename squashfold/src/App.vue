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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.nav {
  display: flex;
  justify-content: space-between;
  padding: 30px;

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
  padding: 20px;
}
</style>
