<template>
  <div class="container mx-auto p-4">
      <h1 class="h1 text-2xl text-gray-800 tracking-wider uppercase">Sites</h1>
      <!-- This example requires Tailwind CSS v2.0+ -->
      <div class="flex flex-col mt-2">
        <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table class="min-w-full divide-y divide-gray-200">
                <thead>
                <tr>
                  <th scope="col" class="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Name
                  </th>
                  <th scope="col" class="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Version
                  </th>
                  <th scope="col" class="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                </tr>
                </thead>
                <tbody class="bg-white divide-y divide-gray-200">
                <tr v-for="distribution in state.distributions">
                  <td class="px-6 py-4 whitespace-nowrap">
                    <div class="text-sm font-medium text-gray-900">
                      {{ distribution.name }}
                    </div>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap">
                    <div class="text-sm text-gray-900">{{ distribution.version }}</div>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap">
                    <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full" :class="distribution.status === 'Running' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'">
                     {{ distribution.status }}
                    </span>
                  </td>
                </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

    </div>
</template>

<script lang='ts'>
import Hello from '../components/HelloWorld.vue'
import Toggle from '../components/Toggle.vue'
import { reactive, onMounted } from 'vue'
import { sendSync, } from '../store/ipc'

export default {
  name: 'Sites',
  components: {
    Hello,
    Toggle
  },
  setup() {
    const state:any = reactive({
      distributions: null
    })

    onMounted(() => {
      checkWSL()
    })

    function checkWSL() {
      state.distributions =  sendSync('checkWSL').splice(1)
    }

    return {
      state,
      checkWSL
    }
  },
}
</script>
