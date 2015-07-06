'use strict';

var app = require('app');
var BrowserWindow = require('browser-window');
var path = require('path');


require('crash-reporter').start();

var mainWindow = null;
var _public    = path.join( path.dirname(__dirname), 'public' );

app.on('window-all-closed', () => {
  if( process.plataform != 'darwin' ) {
    app.quit();
  }
})

app.on('ready', () => {

  mainWindow = new BrowserWindow({ width: 800, height: 600});

  mainWindow.loadUrl(`file://${_public}/index.html`);

  mainWindow.on('close', () => {
    mainWindow = null;
  })

})
