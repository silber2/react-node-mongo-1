import preference from "../models/mp.js";

export const crearOrden = async (req, res) => {
    const {carrito, total} = req.body

    try {
      const preferenc = await preference.create({
        body: {
          payment_methods: {
            excluded_payment_methods: [
              {
                id: "argencard"
              },
              {
                id: "cabal"
              },
              {
                id: "cmr"
              },
              {
                id: "cencosud"
              },
              {
                id: "cordobesa"
              },
              {
                id: "diners"
              },
              {
                id: "naranja"
              },
              {
                id: "tarshop"
              }
            ],
          excluded_payment_types: [],
          installments: 1
        },
        items: [
          {
            title: "TiendaWeb",
            description: carrito.map(prod => prod.name + " x " + prod.cantidad),
            quantity: 1,
            unit_price: total,
            currency_id: "ARS"
          }
        ],
        back_urls: {
          success: "https://react-node-mongo-1-frontend.onrender.com/",
          failure: "https://react-node-mongo-1-frontend.onrender.com/",
          pending: "https://react-node-mongo-1-frontend.onrender.com/"
        },
        notification_url: "https://react-node-mongo-1.onrender.com/api/webhook"
      }
    })
    res.json(preferenc.id)

} catch (error) {      
   console.error(error);
}
}



