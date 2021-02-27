import React from 'react';
import CartItem from "./CartItem"
const Cart=(props)=>{
        const {product,onIncrease,onDecrease,onDelete}=props
        return (
            <div>
                {product.map((products) => {
                    return (<CartItem
                        product={products}
                        key={products.id}
                        onIncrease={onIncrease}
                        onDecrease={onDecrease} 
                        onDelete={onDelete}
                    />)
                })}
            </div>
        )

    }
export default Cart