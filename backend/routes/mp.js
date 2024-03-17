import express from "express";
import {crearOrden} from "../controllers/mp.js";

const mpRouter = express.Router()

mpRouter.post('/crearOrden', crearOrden)
// mpRouter.get('/pedirOrden', pedirOrden)

// mpRouter.post('/webhook', async (req, res) => {
//    console.log(req.query)
//    console.log('recived nasheeeee')
//    res.json("pago recibido ")
// })

export default mpRouter