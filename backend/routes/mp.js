import express from "express";
import {crearOrden} from "../controllers/mp.js";

const mpRouter = express.Router()

mpRouter.post('/crearOrden', crearOrden)
// mpRouter.get('/pedirOrden', pedirOrden)

mpRouter.post('/webhook', (req, res) => {
    console.log(req.body)
})

export default mpRouter