import { join } from 'path'
import { app, BrowserWindow } from 'electron'
import is_dev from 'electron-is-dev'
import dotenv from 'dotenv'
import './ipcMain'
dotenv.config({ path: join(__dirname, '../../.env') })

let win = null

class createWin {
  constructor () {
    win = new BrowserWindow({
      width: 1900,
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
    //win.removeMenu()
    // Open the DevTools.
    win.webContents.openDevTools()
  }
}

app.whenReady().then(() => new createWin())