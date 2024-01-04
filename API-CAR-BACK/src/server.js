// Estoy Requierendo la librería de Express
const express = require('express');
const mainRouter = require('../src/routes/mainRouter');


// Ejecuto a Express
const server = express();
// Asignando un puerto
const PORT = 5000;

// Middleware
server.use(express.json());
server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:5173'); // update to match the domain you will make the request from
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});


// Rutas Completas
server.use(mainRouter);











//pasalo
server.post('/apiCar', async (req,res)=>{
    try {
            const data = req.body
            HolaLuzData.push(data)
            console.log("datos actualizados: ", HolaLuzData)
             res.status(200).json(HolaLuzData)
        } catch (error) {
            res.status(500).send("no pude crear nada")
        }
});





//pasalo
server.put('/apiCar', (req,res)=>{
    res.send('Yo soy el Put')
})

//pasalo
server.delete('/apiCar', (req,res)=>{
    res.send('Yo soy el delete')
})

module.exports = {
    server, 
    PORT
};