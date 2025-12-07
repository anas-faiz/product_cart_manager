import type { Product } from "../utils/Types"

function CartItems ({cartList}: Product){

    const items = cartList

    return(
        <div>
            {items.map((i)=>(
                <div key={i.id}>
                    <p>{i.name}</p>
                    <p>{i.price}</p>
                    <p>{i.category}</p>
                </div>
            ))}
        </div>
    )
}

export default CartItems