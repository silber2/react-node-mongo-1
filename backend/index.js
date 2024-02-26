import './mongo.js'

import express from 'express';
import cors from "cors"
import productRouter from './routes/productos.js'
import comprasRouter from './routes/compras.js'
import userRouter from './routes/user.js'

const app = express()

app.use(cors(process.env.FRONTEND_URL));
app.use(express.json())

app.get('/', (req, res) => {
    res.send('funcando')
})

app.use('/api/productos', productRouter);
app.use('/api/compras', comprasRouter);
app.use('/api/user', userRouter)

app.listen(process.env.PORT, () => {
    console.log('escuchando')
})