import React from 'react';
import CartItem from "./CartItem"
class Cart extends React.Component {
    constructor() {
        super()
        this.state = {
            products: [
                {
                    price: 700,
                    title: "watch",
                    qty: 1,
                    img: "",
                    id: 1
                },
                {
                    price: 700,
                    title: "mobile",
                    qty: 1,
                    img: "",
                    id: 2
                },
                {
                    price: 700,
                    title: "laptop",
                    qty: 1,
                    img: "",
                    id: 3
                }

            ]
        }
    }
    render() {
        const { products } = this.state
        return (
            <div>
                {products.map((products) => {
                    return (<CartItem
                        product={products}
                        key={products.id}


                    />)
                })}
            </div>
        )

    }
}
export default Cart