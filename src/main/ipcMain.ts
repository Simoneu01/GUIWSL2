import { ipcMain } from 'electron'
import Store from 'electron-store'
import { wsl } from './wsl'
const store = new Store()

ipcMain.on('store:set', async (event, args) => {
  store.set(args.key, args.value)
})
ipcMain.on('store:get:sync', (event, args) => {
  event.returnValue = store.get(args)
})
ipcMain.handle('store:get:async', async (event, args) => {
  return await store.get(args)
})
ipcMain.on('store:delete', async (event, args) => {
  store.delete(args)
})
ipcMain.on('store:clear', (event, args) => {
  store.clear()
})

ipcMain.on('checkWSL', async (event, args) => {
  event.returnValue = await wsl()
})
