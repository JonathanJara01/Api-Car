/* Server estoy escuchando el puerto. 
Estoy activando notificaciones de los cambios a mi servidor
 */
const {server, PORT} = require('./src/server')

server.listen(PORT,()=>{
    console.log(`Escuchando en el puerto: ${PORT}`)
});

