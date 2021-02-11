<template>
  <div class="flex flex-col">
    <label class="mt-3 inline-flex items-center cursor-pointer" >
    <span class="relative">
      <span class="block w-10 h-6 bg-gray-400 rounded-full shadow-inner"></span>
      <span
        class="absolute block w-4 h-4 mt-1 ml-1 rounded-full shadow inset-y-0 left-0 focus-within:shadow-outline transition-transform duration-300 ease-in-out"
        :class="!check ? 'bg-white' : 'bg-purple-600 transform translate-x-full'"
      >
        <input id="unchecked" type="checkbox" class="absolute opacity-0 w-0 h-0" @click="check = !check"/>
      </span>
    </span>
      <span v-if="check" class="ml-3 text-sm">{{ checkedTitle }}</span>
      <span v-else class="ml-3 text-sm">{{ unCheckedTitle }}</span>
    </label>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue'

export default {
  name: 'Toggle',
  props: {
    check: Boolean,
    checkedTitle: String,
    unCheckedTitle: String
  },
  setup(props: { check: Boolean; checkedTitle: String, unCheckedTitle: String}) {
    const check = ref(props.check ?? false);
    const checkedTitle = ref(props.checkedTitle ?? 'Checked')
    const unCheckedTitle  = ref(props.unCheckedTitle ?? 'UnChecked')

    return {
      check,
      checkedTitle,
      unCheckedTitle
    }
  }
}
</script>