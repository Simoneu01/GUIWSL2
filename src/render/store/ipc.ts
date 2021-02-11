const electron = require('electron')
const ipc = electron.ipcRenderer

const sendSync =  (channel: string, key?: string | undefined) => {
  return ipc.sendSync(channel, key)
}
const send = (channel: string, key: string, value: any) => {
  ipc.send(channel, { key: key, value: value})
}
const clear = () => {
  ipc.send('store:clear')
}

export {ipc, sendSync, send, clear}