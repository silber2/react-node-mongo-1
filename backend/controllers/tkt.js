import { tktModel } from "../models/tkt.js";

export class tktController {
    
    static getTkts (req, res) {
            res.send(console.log('compra ok'))
        }

    static async postTkts (req, res) {
            
        const ticket = req.body;

        tktModel.postTkts({ticket})
            .then(newTicket => {

                const carritoClean = newTicket.carrito.map(item => {
                    const { name, cantidad, precio } = item;
                    return { name, cantidad, precio };
                  });
                const ticketClean = {
                    carrito: carritoClean,
                    total: newTicket.total
                }
                res.json(ticketClean)
            })
            .catch(err => console.error(err + 'error traer tkt al controller'))
       }
}