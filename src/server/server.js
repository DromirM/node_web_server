//const express = require('express');
//const path = require('path');
import express from "express";
import path from "path";
import { fileURLToPath } from "url";

export const startServer = (options) => {
  //Desestructuro el parametro.
  const { port, public_path = "public" } = options;

  //Obtenemos la URL del archivo actual y la transformamos en una ruta por medio de fileURLToPatch.
  const __filename = fileURLToPath(import.meta.url);

  //Obtenemos el nombre del directorio actual a partir de la ruta.
  const __dirname = path.dirname(__filename);

  const app = express();

  // Para poder usar middlewares se usa la palabra use (express)
  app.use(express.static(public_path)); // Contenido estatico que ponemos disponible.

  app.get("*", (req, res) => {
    //Esta configuracion es muy util para single page aplications (SPA).
    const indexPath = path.join(
      __dirname + `../../../${public_path}/index.html`
    );
    res.sendFile(indexPath);
  });

  //Permite abrir un puerto y escuchar por el.
  app.listen(port, () => {
    console.log(`Escuchando en el puerto ${port}`);
  });
};
