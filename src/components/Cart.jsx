function Cart(props) {
    const {count = 0, handleBasketshow = Function.prototype} = props
    return (
        <div className='cart teal accent-3 white-text' onClick={handleBasketshow}>
            <i className="material-icons">shopping_cart</i>
            {count ? <span className='cart-count'>{count}</span>: null}
        </div>
    )

}

export {Cart}