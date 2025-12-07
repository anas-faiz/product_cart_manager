import { BrowserRouter, Route, Routes } from "react-router-dom"
import ProductList from "./components/productList"
import Cart from "./components/Cart"
import ProductItems from "./components/ProductItems"
import { useState } from "react"
import { products } from "./Data/Products"
import type { Product } from "./utils/Types"

function App (){

  const [cart,setCart] = useState<Product[]>([])

  function addToCart (products : Product){
    setCart((prev)=>[...prev,products])
  }

  return (<>
    <BrowserRouter>
    <ProductList/>
      <Routes>
        <Route path="/" element={<ProductItems onAddToCart={addToCart}/>}></Route>
        <Route path="/cart" element={<Cart cartList={cart}/>}/>
      </Routes>
    </BrowserRouter>
  </>)
}

export default App