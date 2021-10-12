<template>
  <div v-editable="blok" class="icon-row">
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
@import "@/scss/_variables.scss";
@import "@/scss/_layout.scss";

.icon-row {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: $indent__xxl $indent__base $indent__base;
  // padding-bottom: $indent__xxl;
  flex-flow: row wrap;

  @include from('medium') {
    padding: $indent__xxl $indent__l $indent__l;
  }

  > * {
    padding: 0 $indent__base $indent__l;
    width: 60px;
    flex-grow: 1;

    @include from('medium') {
      padding: 0 $indent__l $indent__xl;
      width: 80px;
    }

    @include from('large') {
      padding: 0 $indent__l $indent__xl;
      width: 100px;
    }

    @include from('xlarge') {
      flex: 1;
    }
  }
}
</style>
