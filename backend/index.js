import './mongo.js'
import express from 'express';
import cors from "cors"
import productRouter from './routes/productos.js'
import comprasRouter from './routes/compras.js'
import userRouter from './routes/user.js'
import newslRouter from './routes/newsletter.js';
import mpRouter from './routes/mp.js';

const app = express()

app.use(cors());
app.use(express.json())

app.get('/', (req, res) => {
    res.send('funcando')
})

app.use('/api/productos', productRouter);
app.use('/api/compras', comprasRouter);
app.use('/api/user', userRouter)
app.use('/api/newsletter', newslRouter)
app.use('/api/mp', mpRouter)

app.post('api/webhook', (req, res) => {
    console.log('dsasdsadsadsadasdasd')
})

app.listen(4003, () => {
    console.log(`escuchando en puerto`)
})