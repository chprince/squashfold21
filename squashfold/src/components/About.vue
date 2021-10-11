<template>
  <div v-editable="blok" class="about">
    <img :src="blok.image.filename" alt="blok.image.alt"/>
    <h1>{{ blok.heading }}</h1>
      <rich-text-renderer :document="blok.content" />
    <h3>My Specialities</h3>
    <ul>
      <li class="list-item">
        <p>Key skill title</p>
      </li>
    </ul>
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
