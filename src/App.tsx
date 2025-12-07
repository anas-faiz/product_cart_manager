import { BrowserRouter, Route, Routes } from "react-router-dom"
import ProductList from "./components/productList"
import Cart from "./components/Cart"
import ProductItems from "./components/ProductItems"

function App (){
  return (<>
    <BrowserRouter>
    <ProductList/>
      <Routes>
        <Route path="/" element={<ProductItems/>}></Route>
        <Route path="/cart" element={<Cart/>}/>
      </Routes>
    </BrowserRouter>
  </>)
}

export default App