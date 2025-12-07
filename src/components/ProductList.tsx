import ProductItems from "./ProductItems"

function ProductList (){
    return (
        <div>
            <div className="flex justify-between p-1 m-1">
                <p className="font-bold">Products</p>
                <button className="border font-bold p-1 bg-yellow-400">Cart</button>
            </div>
            <ProductItems/>
        </div>

    )
}

export default ProductList