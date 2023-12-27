/* Guia */
//Estoy Requierendo la libreria de Express
const express = require('express');
const HolaLuzUrl = require('./HolaLuz.txt')

//Ejecuto a Express
const server = express();
//Asignando un puerto
const PORT = 5000;
const axios = require('axios');

//middleware
server.use(express.json());
/* Rutas */

async function obtenerDatosUrl (){
    try {
        const response = await axios.get(HolaLuzUrl);
        return response.data;
    } catch (error) {
        console.log(error)
    }
}


server.get('/apiCar', async(req,res)=>{
    try {
        const allCars = await obtenerDatosUrl()
        res.status(200).json(allCars)
    } catch (error) {
        res.status(500).send("no pude crear nada")
    }

    res.send('Yo soy el get')
    
})

server.post('/apiCar', async (req,res)=>{
    try {
            const {datos} = req.body
            console.log("estos son los datos del body: ", datos)
            
            const responseCar = await axios.post(HolaLuz, datos)
            res.status(200).json(responseCar.data)
        } catch (error) {
            res.status(500).send("no pude crear nada")
        }
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