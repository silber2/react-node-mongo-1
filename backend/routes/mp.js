import express from "express";
import crearOrden from "../controllers/mp.js";

const mpRouter = express.Router()

mpRouter.post('/', crearOrden)

export default mpRouter