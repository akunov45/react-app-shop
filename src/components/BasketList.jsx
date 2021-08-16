import {BasketItem} from "./BasketItem";

function BasketList(props) {
    const {
        order = [],
        handlebasketShow = Function.prototype,
        removeFromBasket = Function.prototype,
        incQuantity = Function.prototype,
        decQuantity = Function.prototype,
    } = props
    const totalPrice = order.reduce((sum, el) => {
        return sum + el.price.regularPrice * el.count
    }, 0)
    return <ul className="collection basket-list">
        <li className="collection-item active">Корзина</li>

        {order.length ? order.map(item => (
            <BasketItem
                key={item.id} {...item}
                removeFromBasket={removeFromBasket}
                incQuantity={incQuantity}
                decQuantity={decQuantity}
            />

        )) : <li className='collection-item'>Корзина пуста</li>}

        <li className="collection-item active">Общая стоимость: {totalPrice} руб.</li>
        <li className='collection-item'>
            <button className='btn btn-small'>Оформить</button></li>
        <i className='material-icons basket-close' onClick={handlebasketShow}>close</i>
    </ul>
}

export {BasketList}