import {useContext} from "react";
import {ShopContext} from "../context";

function BasketItem(props) {
    console.log(props)
    const {
        id,
        name,
        count,
        price:{
            finalPrice
        }
    } = props
    console.log(finalPrice)
    const {removeFromBasket,incQuantity,decQuantity} = useContext(ShopContext)
    console.log()
    return <li className='collection-item'>{name} <i className='material-icons basket-quantity' onClick={()=>decQuantity(id)}>remove</i> x {count}
        <i className='material-icons basket-quantity' onClick={()=>incQuantity(id)}>add</i> = { finalPrice * count}руб.
        <span className='secondary-content' onClick={() => removeFromBasket(id)}>
            <i className='material-icons basket-delete'>close</i></span></li>
}

export {BasketItem}