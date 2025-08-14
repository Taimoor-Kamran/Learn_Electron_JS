const {BrowserWindow, app} = require('electron')
const path = require('path')
const url = require('url')

function createMainWindow (){
    const mainWindow = new BrowserWindow({
        title: "Electron",
        width: 1000,
        height: 600
    })

mainWindow.webContents.openDevTools()

    const startUrl = url.format({
        pathname: path.join(__dirname, './app/build/index.html'),
        protocol: 'file'
    })
    mainWindow.loadURL('http://localhost:3000')
}

app.whenReady().then(createMainWindow)