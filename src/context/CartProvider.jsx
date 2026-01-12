"use client"
import React, { createContext, useState } from 'react';
export const CartContext = createContext()

const CartProvider = ({ children }) => {
    
    const [cart, setCart] = useState([]);


    const AddtoCart = (item) => {
        setCart([item, ...cart])
    }


    const cartInfo = {
        AddtoCart,
        cart,
    }

    return (
        <CartContext value={cartInfo}>{children}</CartContext>
    );
};

export default CartProvider;