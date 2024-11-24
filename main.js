const path = require("path");
const { app, BrowserWindow, ipcMain } = require("electron");
const isMac = process.platform === "darwin";
const isDev = process.env.NODE_ENV !== "production";

function createMainWindow() {
  const mainWindow = new BrowserWindow({
    show: false,
    width: isDev ? 1000 : 800,
    height: 600,
    title: "Nabla",
    titleBarStyle: "hidden",
    ...(process.platform === "darwin" ? { titleBarOverlay: true } : {}),
    icon: isMac
      ? path.join(__dirname, "icons/nabla/mac/icon.icns")
      : path.join(__dirname, "icons/nabla/win/icon.ico"),
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
      contextIsolation: true,
      enableRemoteModule: false,
    },
  });

  mainWindow.loadFile(path.join(__dirname, "./renderer/index.html"));

  mainWindow.once("ready-to-show", () => {
    mainWindow.show();
  });

  ipcMain.on("app/close", () => {
    app.quit();
  });

  ipcMain.on("app/minimize", () => {
    mainWindow.minimize();
  });

  ipcMain.on("app/maximize", () => {
    if (mainWindow.isMaximized()) {
      mainWindow.unmaximize();
    } else {
      mainWindow.maximize();
    }
  });
}

app.whenReady().then(() => {
  createMainWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createMainWindow();
    }
  });
});

app.on("window-all-closed", () => {
  app.quit();
});
