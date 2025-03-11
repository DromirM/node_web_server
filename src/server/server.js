//const express = require('express');
import express from 'express';
import path from 'path';
//const path = require('path');

export const startServer = (options) => {
  //Desestructuro el parametro.
  const {port, public_path = 'public'} = options;
  
  const app = express();

  // Para poder usar middlewares se usa la palabra use (express)
  app.use(express.static(public_path)); // Contenido estatico que ponemos disponible.

  app.get('*', (req, res) => {
    //Esta configuracion es muy util para single page aplications.
    const indexPath = path.join(__dirname + `../../../${public_path}/index.html`);
    res.sendFile(indexPath);
  });
  
  //Permite abrir un puerto y escuchar por el.
  app.listen(port, () => {
    console.log(`Escuchando en el puerto ${port}`);
  });
};