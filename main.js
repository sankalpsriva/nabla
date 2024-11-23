const { setupTitlebar, attachTitlebarToWindow } = require("custom-electron-titlebar/main");

const path = require('path')
const {app, BrowserWindow} = require('electron'); 
const isMac = process.platform === 'darwin';
const isDev = process.env.NODE_ENV !== 'production';

setupTitlebar(); 

function createMainWindow() {
    const mainWindow = new BrowserWindow({
        fontSize: 0,
        width: isDev ? 1000 : 800,
        height: 600,
        title: 'Physics App',   
        titleBarStyle: 'hidden',
        titleBarOverlay: true, 
        webPreferences: {
            sandbox: false, 
            preload: path.join(__dirname, 'preload.js'),
        }
    });
    // Open DevTools if in development mode
    mainWindow.setMenuBarVisibility(false);
    if (isDev) { 
        mainWindow.webContents.openDevTools();
    }

    attachTitlebarToWindow(mainWindow);
    mainWindow.loadFile(path.join(__dirname, './renderer/index.html'));

}

app.whenReady().then(() => {
    createMainWindow(); 

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createMainWindow();
        }
    })
}) 

app.on('window-all-closed', () => {
    if (isMac) {
        app.quit();
    }
}) 