import { Link } from "react-router-dom"
import ProductItems from "./ProductItems"

function ProductList (){
    return (
        <div>
            <div className="flex justify-between p-1 m-1">
                <Link to={"/"}><p className="font-bold">Products</p></Link>
                <Link to="/cart"><button className="border font-bold p-1 bg-yellow-400">Cart</button></Link>
            </div>
            
        </div>

    )
}

export default ProductList