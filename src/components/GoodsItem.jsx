function GoodsItem(props) {
    const {
        mainId: id,
        displayName: name,
        description,
        price: price,
        granted: img, addToBasket = Function.prototype
    } = props

    return <div className="card">
        <div className="card-image">
            <img src={img.map(item => item.images.full_background)} alt={name}/>
        </div>
        <div className="card-content">
            <span className="card-title text-darken-4">{name}</span>
            <p>{description}</p>
        </div>
        <div className="card-action">
            <button className='btn' onClick={() => addToBasket({
                id,
                name,
                price
                }
            )}>Купить
            </button>
            <span className='right' style={{fontsize: '1.8rem'}}>{price.regularPrice} руб</span>
        </div>
    </div>
}

export {GoodsItem}