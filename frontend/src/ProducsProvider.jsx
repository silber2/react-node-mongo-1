// import React, { createContext, useEffect, useState } from "react"
    
//     export const ProducsContext = createContext()

//     export const ProducsProvider = ( {children} ) => {
        
//         const [producs, setProducs] = useState([])
     
//         useEffect(() => {
//             fetch("/src/productosArray.json")
//             .then((resp) => resp.json())
//             .then(dat => setProducs(dat))
//        }, [])
   

//         return (
//             <ProducsContext.Provider value={ producs } >
//                 {children}
//             </ProducsContext.Provider>
//         )
//     }
