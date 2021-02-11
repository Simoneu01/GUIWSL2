<template>
  <div class="flex">
    <Sidebar></Sidebar>
    <router-view></router-view>
  </div>
</template>

<script lang='ts'>
import { useRouter } from 'vue-router'
import Sidebar from '../components/Sidebar.vue'

export default {
  name: 'app',
  components: {
    Sidebar
  },
  setup() {
    const router = useRouter()
    router.push('/')
  }
}
</script>