import Tkt from "../mongoModels.js/Tkt.js"

export class tktModel {

    static getTkts() {
        
    }
    static postTkts({ticket}) {
        const newTkt = new Tkt({
            carrito: ticket.carrito,
            total: ticket.total
        })

        return newTkt.save()
    }
}