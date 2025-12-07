import { products } from "../Data/Products"


function ProductItems(){

    const items = products 

    return(
        <div>
            {items.map((i)=>(
                <div className="flex justify-between items-center border border-2 m-1 bg-blue-300" key={i.id}>
                      <div className="p-1 m-1">
                        <h3 className="font-bold">{i.name}</h3>
                      <h4 className="font-semibold">price: {i.price}</h4>  
                      <h5>{i.category}</h5>  
                      </div>
                      <div>
                        <button className="border m-2 p-1 bg-yellow-200">Add to Cart</button>
                      </div>
                </div>
            ))}
        </div>
    )

}

export default ProductItems