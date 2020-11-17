<template>
  <Hello :msg="`Electron ${ state.version }`" />
  <Hello msg="Vue 3.0 + Vite" />
  <div>
    <button style="width: 60%;" @click="increment">Incrementa</button>
  </div>
  <p>count: {{state.count}}</p>
  <p>double: {{state.double}}</p>
</template>

<script>
import Helo from '../components/HelloWorld.vue'
import { reactive, computed } from 'vue'
const version = require('process').versions.electron
export default {
  name: 'Index',
  components: {
    Helo
  },
  setup() {
    const state = reactive({
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
</style>

