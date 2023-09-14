/**CREACION DEL SERVIDOR */

const http = requiere('http')

const server = http.createServer()

const io = requiere('socket.io')(server, {
    cors:{
        origin: '*'
    }
})

io.on('connection', (socket)=>{
    console.log("Conectado al servidor");
    //console.log(socket);
    socket.on('chat_message', (data)=>{
       
        io.emit('chat_message', data)
    })
})

server.listen(3000) /**puerto x el que trabaja */