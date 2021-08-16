import {useContext} from "react";
import {ShopContext} from "../context";

function Cart() {
    const {order = 0, handleBasketShow= Function.prototype} = useContext(ShopContext)
    const count = order.length
    return (
        <div className='cart teal accent-3 white-text' onClick={handleBasketShow}>
            <i className="material-icons">shopping_cart</i>
            {count ? <span className='cart-count'>{count}</span>: null}
        </div>
    )

}

export {Cart}