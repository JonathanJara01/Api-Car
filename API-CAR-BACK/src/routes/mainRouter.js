const {Router} = require('express')
const {getRouter, postRouter, putRouter, deleteRouter} = require('./getRouter','./postRouter','./putRouter','./deleteRouter');



const mainRouter = Router();

mainRouter.use('/apiCar', getRouter);


module.exports = mainRouter;