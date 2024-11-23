const path = require('path')
const {app, BrowserWindow, nativeImage} = require('electron'); 
const isMac = process.platform === 'darwin';
const isDev = process.env.NODE_ENV !== 'production';

function createMainWindow() {
    const mainWindow = new BrowserWindow({
        show: false,
        width: isDev ? 1000 : 800,
        height: 600,
        title: 'Nabla',
        titleBarStyle: 'hidden',
        ...(process.platform === 'darwin' ? { titleBarOverlay: true } : {}),
        icon: isMac ? path.join(__dirname, 'icons/nabla/mac/icon.icns') : path.join(__dirname, 'icons/nabla/win/icon.ico'),
    });

    let splash = new BrowserWindow({
        width: 250, 
        height: 300,
        frame: false,
        alwaysOnTop: true, // remove after development
        maximizable: false,
        minimizable: false,
        icon: isMac ? path.join(__dirname, 'icons/nabla/mac/icon.icns') : path.join(__dirname, 'icons/nabla/win/icon.ico'),
    });

    splash.loadFile(path.join(__dirname, './renderer/splash.html'));
    splash.center();
    splash.show(); 

    setTimeout(() => {
        splash.close(); 
        mainWindow.maximize();
        mainWindow.show();
    }, 8000)

    // Open DevTools if in development mode
    // mainWindow.setMenuBarVisibility(false);
    // if (isDev) { 
    //     mainWindow.webContents.openDevTools();
    // }
    mainWindow.setOverlayIcon(path.join(__dirname, 'icons/nabla/win/icon.ico'), '')
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
    app.quit();
}) 