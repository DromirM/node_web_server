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

  //Inicializamos una instancia de Express.
  const app = express();

  // use nos permite hacer uso de las funciones middleware.
  app.use(express.static(public_path)); // Contenido estatico que ponemos disponible.

  /*
    El uso de app.get("*") captura todas las rutas, asegurando que el navegador siempre cargue la misma 
    página y que el enrutamiento lo maneje el cliente (por ejemplo, React o Vue).

    El GET es el metodo HTTP y endpoint mas comun que existe.
  */
  //Metodo GET.
  app.get("*", (req, res) => {
    //Esta configuracion es muy util para single page aplications (SPA).
    const indexPath = path.join(
      __dirname + `../../../${public_path}/index.html`
    );
    res.sendFile(indexPath);
  });

  //Iniciamos el servidor por medio de listen y abrimos un puerto para que se pueda escuchar por el.
  app.listen(port, (err) => {
    if (err) console.error("Se ha producido un error: ", err.message);
    console.log(`El servidor fue iniciado. Escuchando en el puerto ${port}`);
  });
};
