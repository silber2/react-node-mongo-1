import preference from "../models/mp.js";

const crearOrden = (req, res) => {
    const {title, cantidad, precio} = req.body

    preference.create({
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
              title: title,
              quantity: cantidad,
              unit_price: precio,
              currency_id: "ARS"
            }
          ],
          
        }
      })
      .then(preference => {
        console.log(preference.id)
        res.json(preference.id)
        }
      )
      .catch(err => console.error(err));
      
}

export default crearOrden