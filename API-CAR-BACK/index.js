/* Guia */
//Estoy Requierendo la libreria de Express
const express = require('express');

//Ejecuto a Express
const server = express();
//Asignando un puerto
const PORT = 5000;

/* Rutas */

server.get('/apiCar', (req,res)=>{
    res.send('Yo soy el get')
})

server.post('/apiCar', (req,res)=>{
    res.send('Yo soy el Post')
})

server.put('/apiCar', (req,res)=>{
    res.send('Yo soy el Put')
})

server.delete('/apiCar', (req,res)=>{
    res.send('Yo soy el delete')
})



/* Server estoy escuchando el puerto. 
Estoy activando notificaciones de los cambios a mi servidor
 */
server.listen(PORT,()=>{
    console.log(`Escuchando en el puerto: ${PORT}`)
});