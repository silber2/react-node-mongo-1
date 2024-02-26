import {ProdModel} from '../models/productos.js';

export class ProdController{

    static allProdC (req, res) {
       ProdModel.allProds()
            .then(prods => {
            res.status(200).json(prods)
            })
            .catch(err => {console.error(err)})
    }

     static addProdC (req, res) {
         const newProd = req.body
         const prod = ProdModel.addProd({newProd});
         res.status(200).json(prod)
     }

     static categoryItemsC (req, res) {
         const category = req.params.categoria
         ProdModel.prodCategory({category})
            .then(results => {
                if (results.length <= 0) {
                    console.error('resultado vacio')
                }
                res.json(results)
                })
            .catch(err => {console.error({err} + 'error1')})
         
     }

     static prodNameC (req, res) {

         const name = req.params.name
        
         ProdModel.prodName({name})
            .then(result => {
                res.status(200).json(result)
            })
            .catch(err => console.error({err}))
        
     }
}