import { join } from 'path'
import { app, BrowserWindow, ipcMain } from 'electron'
import is_dev from 'electron-is-dev'
import dotenv from 'dotenv'
import Store from 'electron-store'

const store = new Store()
ipcMain.on('store:set', async (e, args) => {
  store.set(args.key, args.value)
})
ipcMain.handle('store:get', async (e, args) => {
  return await store.get(args)
})
ipcMain.on('store:delete', async (e, args) => {
  store.delete(args)
})

dotenv.config({ path: join(__dirname, '../../.env') })

let win = null

class createWin {
  constructor () {
    win = new BrowserWindow({
      width: 330,
      height: 700,
      webPreferences: {
        nodeIntegration: true,
        enableRemoteModule: true,
      },
    })
  
    const URL = is_dev
      ? `http://localhost:${process.env.PORT}`
      : `file://${join(__dirname, '../../dist/render/index.html')}`
  
    win.loadURL(URL)
  }
}

app.whenReady().then(() => new createWin())
