<template>
  <div v-on:mouseover="showToolTip=true" v-on:mouseleave="showToolTip=false" class="relative">
    <slot></slot>
    <div class="absolute left-0 bottom-full">
      <div class="relative mx-2" v-show="showToolTip">
        <div class="bg-black text-white text-xs rounded py-1 px-4 right-0 bottom-full">
          Tooltip center
          <svg class="absolute text-black h-2 w-full left-0 top-full" x="0px" y="0px" viewBox="0 0 255 255" xml:space="preserve"><polygon class="fill-current" points="0,0 127.5,127.5 255,0"/></svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue'

export default {
  name: "Tooltip",
  props: {
    textTooltip: String
  },
  setup() {
    const showToolTip = ref(false)

    return {
      showToolTip
    }
  }

}
</script>

<style>
.bottom-full {
  bottom: 100%
}
.top-full {
  top: 100%
}
</style>