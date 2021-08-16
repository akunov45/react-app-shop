import {useContext} from "react";
import {ShopContext} from "../context";

function BasketItem(props) {
    const {
        id,
        name,
        price: {
            regularPrice
        },
        count, removeFromBasket = Function.prototype,
        incQuantity = Function.prototype,
        decQuantity = Function.prototype
    } = props
    const {exemple} = useContext(ShopContext)
    console.log(exemple)
    return <li className='collection-item'>{name} <i className='material-icons basket-quantity' onClick={()=>decQuantity(id)}>remove</i> x {count}
        <i className='material-icons basket-quantity' onClick={()=>incQuantity(id)}>add</i> = {regularPrice * count}руб.
        <span className='secondary-content' onClick={() => removeFromBasket(id)}>
            <i className='material-icons basket-delete'>close</i></span></li>
}

export {BasketItem}