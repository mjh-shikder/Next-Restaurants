"use client"
import React, { useState } from 'react';


const CartButton = () => {

    const [inCart, setInCart] = useState(false);

    const handleAddtoCart = () => {
        setInCart(true);
    }

    return (
      <button
            onClick={handleAddtoCart}
            disabled={inCart}
        className={`${
          inCart
            ? "flex-1 bg-amber-300 text-stone-600 py-2 rounded-lg hover:bg-primary/90 transition"
            : "flex-1 bg-amber-500 text-white py-2 rounded-lg hover:bg-primary/90 transition "
        }  `}
      >
        {inCart ? "Added" : "Add to Cart"}
      </button>
    );
};

export default CartButton;