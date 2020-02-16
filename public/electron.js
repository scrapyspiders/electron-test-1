const electron = require("electron");
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const isDev = require("electron-is-dev");
const path = require("path");
const ipcMain = electron.ipcMain


let mainWindow;
function createWindow() {

    mainWindow = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true
        },
        width: 1200,
        height: 800,
        icon: "",

    });

    // win.loadFile('index.html')
    mainWindow.loadURL("http://localhost:3000");
    // mainWindow.loadURL(
    //     isDev
    //         ? `file://${path.join(__dirname, "../app/index.html")}`
    //         : "http://localhost:3000"
    // );
    
    // mainWindow.loadURL(
    //     isDev
    //         ? "http://localhost:3000"
    //         : `file://${path.join(__dirname, "../build/index.html")}`
    // );
    
    mainWindow.on("closed", () => (mainWindow = null));

    const { default: installExtension, REACT_DEVELOPER_TOOLS } = require('electron-devtools-installer');

    installExtension(REACT_DEVELOPER_TOOLS).then((name) => {
        console.log(`Added extention: ${name}`);
    }).catch((err) => {
        console.log("An error ocurred", err);
    })
}

app.on('certificate-error', function(event, webContents, url, error, 
    certificate, callback) {
        event.preventDefault();
        callback(true);
  });
app.on("ready", createWindow);
app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
        app.quit();
    }
});

app.on("activate", () => {
    if (mainWindow === null) {
        createWindow();
    }
});