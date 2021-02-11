<template>
  <a href="#" @click="openLink(href)">
    <slot></slot>
  </a>
</template>

<script lang="ts">
const shell = require('electron').shell;

export default {
  name: "ExternalLink",
  props: {
    href: String
  },
  setup() {
    function openLink(url: string){
      shell.openExternal(url)
    }

    return {
      openLink
    }
  }
}
</script>

<style scoped>

</style>