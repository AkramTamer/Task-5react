import {Route,Routes } from "react-router"
import Home from "./assets/pages/Home"
import About from "./assets/pages/About"
import Contact from "./assets/pages/Contact"
import  Products  from "./assets/pages/Products"
import Navbar from "./assets/components/Navbar"
import SingleProduct from "./assets/pages/SingleProduct"

export default function App() {
  return(
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/products" element={<Products />}/>
        <Route path="/producys/single-products/:productId" element={<SingleProduct />}/>
      </Routes>
    </div>
  )
  
}

