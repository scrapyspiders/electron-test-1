const electron = require("electron");
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const isDev = require("electron-is-dev");
const path = require("path");


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
    
    // electron.shell.openItem('c://desktop/fruitspec')
    // electron.shell.openExternal('https://github.com')
    mainWindow.on("closed", () => (mainWindow = null));
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