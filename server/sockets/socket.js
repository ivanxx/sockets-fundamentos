const { io } = require('../server');

io.on('connection', (client) => {

    console.log('usuario conectado');

    client.emit('enviarMensaje', {
        usuario: 'Admin',
        mensaje: 'Bienvenido a este servidor'
    });


    client.on('disconnect', () => {
        console.log('usuario desconectado');
    });

    // Escuchar al cliente
    client.on('enviarMensaje', (data, callback) => {
        console.log(data);

        client.broadcast.emit('enviarMensaje', data);
        // if (mensaje.usuario) {
        //     callback({
        //         resp: 'TODO OK!!'
        //     });
        // } else {
        //     callback({
        //         resp: 'TODO MAL!!!!'
        //     });
        // }

    });
});