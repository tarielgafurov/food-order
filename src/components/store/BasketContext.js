import React, { createContext, useState } from 'react'

export const BasketContext = createContext({
    items: []
}) 

export const BasketProvider = ({children}) => {
    const [items , setItems] = useState([])

    const addItemsBasket = (item) => {
        setItems(prevState => {
            return [...prevState, item]
        })
    }

    const state = {
        items,
        addItemsBasket
    }

    return (
        <BasketContext.Provider value={state}>
            {children}
        </BasketContext.Provider>
    )
}

