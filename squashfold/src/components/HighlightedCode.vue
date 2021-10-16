<template>
  <div v-editable="blok" class="code">
      <h1>This is a code block</h1>
      <ssh-pre :language="body.Language" dark="true" :label="body.Label ? body.Label : body.Language" v-if="body">{{body.Code}}</ssh-pre>
      <ssh-pre v-if="blok">{{blok}}</ssh-pre>
  </div>
</template>

<script>
import SshPre from 'simple-syntax-highlighter'
import 'simple-syntax-highlighter/dist/sshpre.css'

export default {
  name: "HighlightedCode",
  components: {
      SshPre,
  },
  props: {
    body: Object,
    blok: Object
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/scss/_variables.scss";
@import "@/scss/_layout.scss";

</style>
