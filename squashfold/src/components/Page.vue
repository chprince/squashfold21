<template>
  <div v-editable="blok">
    <div v-for="item in blok.body" :key="item._uid">
      <component :blok="item" :is="item.component"></component>
    </div>
  </div>
</template>
 
<script>
export default {
  props: ['blok']
}
</script>