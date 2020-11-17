<template>
  <Hello :msg="`Electron ${ state.version }`" />
  <Hello msg="Vue 3.0 + Vite" />
  <div>
    <button style="width: 60%;" @click="increment">Incrementa</button>
  </div>
  <p>count: {{state.count}}</p>
  <p>double: {{state.double}}</p>

  <div class="bg-white rounded-lg p-6">
       <img class="h-16 w-16 rounded-full mx-auto">
    <div class="text-center">
         <h2 class="text-lg">Erin Lindford</h2>
         <div class="text-purple-500">Product Engineer</div>
         <div class="text-gray-600">erinlindford@example.com</div>
         <div class="text-gray-600">(555) 765-4321</div>
       </div>
     </div>
</template>

<script lang='ts'>
import Hello from '../components/HelloWorld.vue'
import { reactive, computed } from 'vue'
const version = require('process').versions.electron

export default {
  name: 'Index',
  components: {
    Hello
  },
  setup() {
    const state:any = reactive({
      count: 0,
      double: computed(() => state.count * 2),
      version: version
    })

    function increment() {
      state.count++
    }

    return {
      state,
      increment,
    }
  },
}
</script>
