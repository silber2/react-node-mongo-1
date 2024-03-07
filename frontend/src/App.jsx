
import { CartProvider } from './CartProvider'
import Carrito from './components/Carrito'
import { Newsletter } from './components/Newsletter'
import {BrowserRouter, Link, Route, Routes} from 'react-router-dom'
import { ProductosDetail } from './components/ProductosDetail'
import { Menutoggle } from './components/Menutoggle'
import ContactoRedes from './components/ContactoRedes'
import Footer from './components/Footer'
import { Home } from './components/Home'
import Productos from './components/Productos'

function App() {

return (
  <CartProvider>
    <BrowserRouter>
      
      <header>
        <h1 className='header__title'><Link to="/" >TiendaWeb</Link></h1>
        <Menutoggle />
      </header>
     
       <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/:categoria" element={<Productos />} /> */}
          {/* <Route path='/name/:name' element={<ProductosDetail />} /> */}
          <Route path="/carrito" element={<Carrito />} />
          <Route path="/newsletter" element={<Newsletter />} />
          <Route path='/contacto&Redes' element={<ContactoRedes />} />
       </Routes>

      <Footer />

    </BrowserRouter>
  </CartProvider>
)
}

export default App
