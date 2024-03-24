import express from "express";
import {crearOrden, recibirWebhook} from "../controllers/mp.js";

const mpRouter = express.Router()

mpRouter.post('/crearOrden', crearOrden)
// mpRouter.get('/pedirOrden', pedirOrden)

mpRouter.get('/webhook', recibirWebhook)
// mpRouter.post('/success', (req, res) => {
//     console.log(req.body)
// })
export default mpRouter