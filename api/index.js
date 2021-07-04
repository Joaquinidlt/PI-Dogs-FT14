// express, sequelize, pg, morgan

const Express = require('express')

const server = Express()

// aca vamos a setear todos nuestros headers

// setear nuestras rutas
server.get('/', (req, res) => {
    res.send("Nico genio");
});

// aca vamos a hacer nustro middleware de control de errores

// aca tenemos que hacer nuestro server.listen 

server.listen(3000, () => {
    console.log('listen in port 3000');
});