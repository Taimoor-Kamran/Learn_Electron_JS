const { BrowserWindow, app } = require('electron');
const url = require('url');

function createMainWindow() {
    const mainWindow = new BrowserWindow({
        title: "Electron",
        width: 1000,
        height: 600,
        webPreferences: {
            contextIsolation: true,
            preload : path.join(__dirname, 'preload.js')
        }
    });
}

app.whenReady().then(createMainWindow);