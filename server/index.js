import express from 'express'
import * as dotenv from 'dotenv'
import cors from 'cors'
import bodyParser from 'body-parser'

import connectDB from './mongodb/connect.js'
import personRoutes from './routes/person.js'
import eventRoutes from './routes/event.js'
import productRoutes from './routes/products.js'
import userRoutes from './routes/user.js'
import { getQueries } from './controllers/openai.js'

dotenv.config()

const app = express()

app.use(cors())
app.use(express.json({limit: '50mb'}))
app.use(bodyParser.json({limit: "30mb", extended: true}))
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}))


app.use('/person', personRoutes)
app.use('/event', eventRoutes)
app.use('/product', productRoutes)
app.use('/user', userRoutes)

app.post('/openai', getQueries)

app.get('/', async (req, res) => {
    res.send('Hello from Gifty')
})


const startServer = async () => {
    try {
        connectDB(process.env.MONGODB_URL)
        app.listen(8080, () => console.log('Server has started on port "http://localhost:8080"'))
    } catch (error) {
        console.log(error)
    }
}

startServer()