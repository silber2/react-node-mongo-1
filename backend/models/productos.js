
import Prod from '../mongoModels.js/Prod.js'


export class ProdModel {

    static async allProds() {
        try {
            const prods = await Prod.find({});
            if (prods && prods.length > 0) {
                return prods;
            } else {
                console.error('prods está vacío');
            }
        } catch (err) {
            console.error(err);
            throw err;
        }
    }

    static addProd ({newProd}) {
        const prod = new Prod({
            newProd
        })
        prod.save()
        return prod
    }

    static async prodCategory ({category}) {

        return Prod.find({categoria: category})
            .then(results => {
                if (results.length <=  0) {
                    (console.error('no existe esa categoria'))
                }
                return results;
            })
            .catch(err => {console.error({err} + 'error model')})
    }

    static async prodName({name}) {

        return Prod.findOne({name: name})
            .then(item => {
                if (item === undefined) {
                    console.error('No se encontró el producto');
                }
                return item
            })
            .catch(err => console.error({err}))
        

       

    }
}