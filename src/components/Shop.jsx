import React, {useState, useEffect} from "react";
import {API_URL, API_KEY} from "../config";
import {Preloader} from "./Preloader";
import {GoodsList} from "./GoodsList";
import {Cart} from "./Cart";
import {BasketList} from "./BasketList";
import {Alert} from "./Alert";

function Shop() {
    const [goods, setGoods] = useState([]);
    const [loading, setLoading] = useState(true)
    const [order, setOrder] = useState([])
    const [isBasketShow, setBasketShow] = useState(false)
    const [alertName,setAlertName] = useState('')

    const handlebasketShow = () => {
        setBasketShow(!isBasketShow)
    }
    const removeFromBasket = (itemId) => {
        const newOrder = order.filter((el) => el.id !== itemId)
        setOrder(newOrder)
    }
    const incQuantity = (itemId) => {
        const newOrder = order.map((el) => {
            if (el.id === itemId) {
                const newQuantity = el.count + 1
                return {
                    ...el,
                    count: newQuantity
                }
            } else {
                return el
            }
        })
        setOrder(newOrder)
    }
    const decQuantity = (itemId) => {
        const newOrder = order.map((el) => {
            if (el.id === itemId) {
                const newQuantity = el.count - 1
                return {
                    ...el,
                    count: newQuantity >= 0 ? newQuantity : 0
                }
            } else {
                return el
            }
        })
        setOrder(newOrder)
    }

    // const addToBusket = (item) => {
    //     const itemIndex = order.findIndex(orderItem => orderItem.id === item.id)
    //     if (itemIndex < 0) {
    //         const newProduct = {
    //             ...item,
    //             count: 1
    //         }
    //         setOrder([...order, newProduct])
    //     } else {
    //         const newOrder = order.map((orderItem, index) => {
    //
    //             if (index === itemIndex) {
    //                 return {
    //                     ...orderItem,
    //                     count: orderItem.count + 1,
    //                 }
    //             } else {
    //                 return orderItem
    //             }
    //         })
    //         setOrder(newOrder)
    //     }
    //     setAlertName(item.name)
    // }

    useEffect(function getGoods() {
        fetch(API_URL, {
            headers: {
                'Authorization': API_KEY,
            },
        })
            .then(response => response.json())
            .then(data => {
                data.shop && setGoods(data.shop)
                setLoading(false)
            })
    }, [])
    const closeAlert = ()=>{
        setAlertName('')
    }


    return <main className="container content">
        <Cart
            count={order.length}
            handleBasketshow={handlebasketShow}/>

        {loading ? <Preloader/> :
            <GoodsList
                goods={goods}
                key={goods.map(item => item.mainId)}/>}
        {isBasketShow &&  <BasketList
            order={order}
            handlebasketShow={handlebasketShow}
            removeFromBasket={removeFromBasket}
            incQuantity={incQuantity}
            decQuantity={decQuantity}
        />}
        {
            alertName && <Alert name={alertName} closeAlert={closeAlert}/>
        }
    </main>
}

export {Shop}