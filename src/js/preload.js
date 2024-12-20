const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("electron", {
  closeWindow: () => ipcRenderer.send("app/close"),
  minimizeWindow: () => ipcRenderer.send("app/minimize"),
  maximizeWindow: () => ipcRenderer.send("app/maximize"),
  goHome: () => ipcRenderer.send("app/goHome"),
  splashDestroyed: () => ipcRenderer.send("app/splashDestroyed"),
  mech: () => ipcRenderer.send("app/mech"),
  emag: () => ipcRenderer.send("app/emag"),
  vec: () => ipcRenderer.send("app/vec"),
  rel: () => ipcRenderer.send("app/rel"),
});