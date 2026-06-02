import {createServer} from 'node:http'

process.loadEnvFile()
const port = process.env.PORT ?? 3000

const server = createServer((req, res) => {
    //console.log('Received request:', req.method, req.url)
    res.setHeader('content-Type', 'text/plain; charset=utf-8')

    if(req.url === '/'){
        return res.end('Hola desde Node! 👍')
    }

    if(req.url === '/users'){
        res.setHeader('content-Type', 'application/json; charset=utf-8')
        return res.end(JSON.stringify([{id: 1, name: 'midudev' }]))
    }

    res.statusCode = 404
    return res.end('Not Found')
})

server.listen(port, () => {
    const address = server.address()
    console.log(`Servidor escuchando en http://localhost:${address.port}`)
})