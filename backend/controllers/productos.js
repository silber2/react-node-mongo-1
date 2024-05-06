import Prod from "../models/productos.js";

export class ProdController{

    static async allProdC (req, res) {
        Prod.find({})
            .then(prods => {
                if (prods && prods.length > 0) {
                    res.status(200).json(prods);
                } else { 
                    res.send('prods está vacío');
                }
            })
            .catch(err => {console.error(err)})
    }

     static categoryItemsC (req, res) {
         const category = req.params.categoria
         Prod.find({categoria: category})
            .then(results => {
                if (results.length <=  0) {
                   res.status(404).send(console.error('no existe esa categoria'))
                }
                res.json({results})
                })
            .catch(err => {console.error({err} + 'error1')})
         
                
     }

     static prodNameC (req, res) {
         const name = req.params.name
         Prod.findOne({name: name})
            .then(result => {
                if (!result) {
                    res.status(404).send(console.error('No se encontró el producto'));
                }
                res.status(200).json(result)
            })
            .catch(err => console.error(err))
        
     }
}