const HolaLuzData = require('../../HolaLuz.json');
const {Router} = require('express')

const getRouter = Router()

getRouter.get('/', (req, res) => {
    try {
      // Responde con los datos cargados desde el archivo JSON
      res.status(200).json(HolaLuzData);
    } catch (error) {
      console.error('Error al procesar la solicitud:', error.message);
      res.status(500)
    }
  }); 

module.exports = {getRouter}