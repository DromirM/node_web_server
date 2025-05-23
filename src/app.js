const { envs } = require('./config/env.js');
const { startServer } = require('./server/server.js');

const main = () => {
  startServer({
    port: envs.PORT,
    public_path: envs.PUBLIC_PATH 
  });
};

//Funcion agnostica autoconvocada.
//Agnostica porque no tiene nombre.
//Autoconvocada porque la ejecutamos con los parentesis.
(async() => {
  main();
})()