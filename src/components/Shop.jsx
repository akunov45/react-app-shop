import React, {useEffect, useContext} from "react";
import {API_URL, API_KEY} from "../config";

import {ShopContext} from '../context'
import {Preloader} from "./Preloader";
import {GoodsList} from "./GoodsList";
import {Cart} from "./Cart";
import {BasketList} from "./BasketList";
import {Alert} from "./Alert";

function Shop() {
    const {alertName,isBasketShow,order,loading,setGoods} = useContext(ShopContext)

    // const [loading, setLoading] = useState(true)
    // const [order, setOrder] = useState([])
    // const [isBasketShow, setBasketShow] = useState(false)
    // const [alertName,setAlertName] = useState('')

    // const handlebasketShow = () => {
    //     setBasketShow(!isBasketShow)
    // }
    // const removeFromBasket = (itemId) => {
    //     const newOrder = order.filter((el) => el.id !== itemId)
    //     setOrder(newOrder)
    // }
    // const incQuantity = (itemId) => {
    //     const newOrder = order.map((el) => {
    //         if (el.id === itemId) {
    //             const newQuantity = el.count + 1
    //             return {
    //                 ...el,
    //                 count: newQuantity
    //             }
    //         } else {
    //             return el
    //         }
    //     })
    //     setOrder(newOrder)
    // }
    // const decQuantity = (itemId) => {
    //     const newOrder = order.map((el) => {
    //         if (el.id === itemId) {
    //             const newQuantity = el.count - 1
    //             return {
    //                 ...el,
    //                 count: newQuantity >= 0 ? newQuantity : 0
    //             }
    //         } else {
    //             return el
    //         }
    //     })
    //     setOrder(newOrder)
    // }

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
            })
        //es-lint-disable-next-line
    }, [])
    // const closeAlert = ()=>{
    //     setAlertName('')
    // }


    return <main className="container content">
        <Cart
            count={order.length}/>

        {loading ? <Preloader/> : <GoodsList/>}

        {isBasketShow && <BasketList/>}
        {
            alertName && <Alert/>
        }
    </main>
}

export {Shop}