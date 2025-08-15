const { BrowserWindow, app, ipcMain } = require('electron');
const path = require('path')

function createMainWindow() {
    const mainWindow = new BrowserWindow({
        title: "Electron",
        width: 1000,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: true,
            preload : path.join(__dirname, 'preload.js')
        }
    });
    mainWindow.loadURL('http://localhost:3000')
}

app.whenReady().then(createMainWindow);

ipcMain.on("submit:todoForm", (event, opts)=> {
    console.log(opts)
})