import { createApp } from 'vue'
import App from './App.vue'
import './assets/styles/tailwind.css';

import router from './router'

const electron = require('electron')
const ipc = electron.ipcRenderer

ipc.send('store:set', { key: 'foo.bar', value: '👩' })

ipc.invoke('store:get', 'foo').then((res:string) => {
    console.log(res)
})

ipc.send('store:delete', 'foo')

ipc.invoke('store:get', 'foo').then((res:string) => {
    console.log(res)
})

const app = createApp(App as any)

app.use(router)
app.mount('#app')
