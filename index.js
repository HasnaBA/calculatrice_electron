const {app, BrowserWindow} = require('electron') //require la dépendance
require('electron-reload')(__dirname) //(__dirname) donne le chemin vers le projet

let win 

function createWindow () {
    win = new BrowserWindow({
      width: 800,
      height: 600,
      icon: './public/icon.jpg' 
    })
    win.loadFile('public/index.html')

    //ouvre les devtools.
    win.webContents.openDevTools()

    win.on('closed', () => {
        win = null //redefinit à null quand on ferme la fenêtre
    })
}

app.on('ready', createWindow )

//à chaque fermeture de fenêtre on fait app.quit
app.on('window-all-closed', () => { 
    if (process.platform !== 'darwin') {
      app.quit()
    }
})

app.on('activate', () => { 
    if (win === null) {
      createWindow()
    }

})
