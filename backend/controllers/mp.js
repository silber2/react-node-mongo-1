import preference from "../models/mp.js";

export const crearOrden = async (req, res, next) => {
    console.log(req.body)
    const {carrito} = await req.body
      try {
        const preferenc = await preference.create({
          body: {
            payment_methods: {
              excluded_payment_methods: [],
            excluded_payment_types: [],
            installments: 1
          },
          notification_url: `https://6149-190-57-192-16.ngrok-free.app/api/mp/webhook`,
          items: carrito.map(prod => ({
              title: prod.name,
              quantity: prod.cantidad,
              unit_price: prod.precio,
              currency_id: "ARS"
          })),
          back_urls: {
            success: "https://react-node-mongo-1-frontend.onrender.com/",
            failure: "https://react-node-mongo-1-frontend.onrender.com/",
            pending: "https://react-node-mongo-1-frontend.onrender.com/"
          },
        
        }
      })
      res.status(201).json(preferenc.id)

    } catch {error => next(error)}
    }

export const recibirWebhook = (req, res) => {
    
    const payment = req.body
    console.log(payment)  

    res.status(200).send('okkkkks')
    
}

