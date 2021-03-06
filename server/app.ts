import { Server } from 'socket.io'

let a = 1
const io = new Server({ cors: { origin: '*' } })

io.on('connection', (socket: any) => {
    console.log(`connect ${socket.id}`)

    //监听disconnect事件
    socket.on('disconnect', () => {
        //逻辑处理
        console.log(`客户端离开页面 ${socket.id}`)
    })

    socket.on('send', (data: any) => {
        console.log('接收到客户端的消息', data)

        //延时返回数据
        setTimeout(() => {
            socket.emit('response', { data: a })
            a++
        }, 0)
    })
})

io.listen(4000)
console.log('服务器已启动')
