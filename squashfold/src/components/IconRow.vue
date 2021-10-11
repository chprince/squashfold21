<template>
  <div v-editable="blok" class="icon">
    <h2>Icon Row</h2>
    <div v-for="Icon in blok.Icon" v-bind:key="Icon.id">
        <component :blok="Icon" :is="Icon.component"></component>
    </div>
  </div>
</template>

<script>

export default {
  name: "IconRow",
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
