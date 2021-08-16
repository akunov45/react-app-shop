export function reducer(state, {type, payload}) {
    switch (type) {
        case 'SET_GOODS':
            return {
                ...state,
                goods:payload || [],
                loading: false
            }
        case 'REMOVE_FROM_BASKET':
            return {...state, order: state.order.filter((el) => el.id !== payload.id)}
        case 'ADD_TO_BASKET': {
            const itemIndex = state.order.findIndex(orderItem => orderItem.id === payload.id);
            let newOrder = null
            if (itemIndex < 0) {
                const newProduct = {
                    ...payload,
                    count: 1
                }
                newOrder = [...state.order, newProduct]
            } else {
                newOrder = state.order.map((orderItem, index) => {

                    if (index === itemIndex) {
                        return {
                            ...orderItem,
                            count: orderItem.count + 1,
                        }
                    } else {
                        return orderItem
                    }
                })
            }
            return {
                ...state,
                order: newOrder,
                alertName: payload.name
            }
        }
        case 'CLOSE_ALERT':
            return {...state, alertName: ''}
        case 'INC_QUANTITY':
            return {
                ...state,
                order: state.order.map((el) => {
                    if (el.id === payload.id) {
                        const newQuantity = el.count + 1
                        return {
                            ...el,
                            count: newQuantity
                        }
                    } else {
                        return el
                    }
                })
            }
        case 'DEC_QUANTITY':
            return {
                ...state,
                order: state.order.map((el) => {
                    if (el.id === payload.id) {
                        const newQuantity = el.count - 1
                        return {
                            ...el,
                            count: newQuantity >= 0 ? newQuantity : 0
                        }
                    } else {
                        return el
                    }
                })
            }
        case 'TOGGLE_BASKET':
            return {
                ...state,
                isBasketShow: !state.isBasketShow,
            }
        default:
            return state
    }
}