<template>
  <div v-editable="blok" class="icon-row">
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
