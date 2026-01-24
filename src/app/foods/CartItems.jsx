"use client"
import { CartContext } from '@/context/CartProvider';
import React, { use, } from 'react';
const CartItems = () => {
    const {cart} = use(CartContext)
    return (
        <div>   
           <span className='font-bold text-amber-500 '>{cart.length}</span>  Items Added

            <div className="space-y-5 mt-5 ">
                {
                    cart.map((c, index) => <h2 key={index}>{index+1} { c.title}</h2>)
                }
            </div>
        </div>
    );
};

export default CartItems;