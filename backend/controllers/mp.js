import preference from "../models/mp.js";

export const crearOrden = async (req, res) => {
    const {carrito, total} = await req.body

    try {
      const preferenc = await preference.create({
        body: {
          payment_methods: {
            excluded_payment_methods: [],
          excluded_payment_types: [],
          installments: 1
        },
        notification_url: 'https://react-node-mongo-1.onrender.com/api/mp/webhook',
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
          success: "https://react-node-mongo-1.onrender.com/api/mp/success",
          failure: "https://react-node-mongo-1-frontend.onrender.com/",
          pending: "https://react-node-mongo-1-frontend.onrender.com/"
        },
      
      }
    })
    res.status(201).json(preferenc.id)

} catch (error) {      
   console.error(error + "error crear orden back");
}
}

export const recibirWebhook = (req, res) => {
    
    console.log('recibeeed')
    res.status(200).send('okkkkks')
    
}

