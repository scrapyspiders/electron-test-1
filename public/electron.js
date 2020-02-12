const electron = require("electron");
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const path = require("path");
const isDev = require("electron-is-dev");
// const  { shell }  = require('electron')



let mainWindow;
function createWindow() {
    
    mainWindow = new BrowserWindow({ 
        width: 1200, 
        height: 800,
        icon: ""
    });
    

    mainWindow.loadURL(
        isDev
        ? "http://localhost:3000"
        : `file://${path.join(__dirname, "../build/index.html")}`
    );
    mainWindow.on("closed", () => (mainWindow = null));
}

function showhello() {
    console.log("this is hello ! ")
}
 
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