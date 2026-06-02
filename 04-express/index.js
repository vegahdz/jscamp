import express from 'express'
import jobs from './jobs.json' with { type: 'json' }
import ms from 'ms';


const PORT = process.env.PORT ?? 1234
const app = express()


app.get('/', (request, response) => {
    return response.send('<h1>Hello World!</h1>')
})


app.get('/get-jobs', (request, response) => {
    return response.json(jobs)
})


app.get('/health', (request, response) => {
    return response.json({
        status: 'ok',
        uptime: ms(process.uptime() * 1000, {long: true})
    })
})


app.listen(PORT, () => {
    console.log(`Servidor levantado en http://localhost:${PORT}`)
})