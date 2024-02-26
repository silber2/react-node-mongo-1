import express from 'express'
import {ProdController} from '../controllers/productos.js';

const productRouter = express.Router();

productRouter.get('/', ProdController.allProdC)
productRouter.post('/', ProdController.addProdC)
productRouter.get('/category/:categoria', ProdController.categoryItemsC)
productRouter.get('/name/:name', ProdController.prodNameC)

export default productRouter