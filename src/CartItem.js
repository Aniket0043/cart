import React from 'react';

const CartItem=(props)=>{
        console.log(props)
        const {price,title,qty}=props.product;
        const {product,onIncrease,onDecrease,onDelete}=props

        return(
            <div className="cart-item" style={{display: 'flex', margin:10}}>
                <div className="left-block">
                    <img style={styles.image}/>
                </div>
                <div className="right-block">
                    <div className="phone" style={{fontSize:25, margin:2}}>{title}</div>
                    <div className="price">Rs{price}</div>
                    <div className="quantity">qty:{qty}</div>
                    <div className="cart-item-action" style={{display:"flex"}}> {/*buttons*/}
                    <img className="action-icons" alt="decrease" style={styles.icons} src="https://www.flaticon.com/svg/vstatic/svg/992/992683.svg?token=exp=1614346308~hmac=08eb1ab443cf7f97b3f435ef2ca485c9"
                    onClick={()=>onDecrease(product)}/>
                    <img className="action-icons" alt="increase" style={styles.icons} src="https://www.flaticon.com/svg/vstatic/svg/1828/1828926.svg?token=exp=1614346376~hmac=5419b2154259cc0625a3ad780997b73e"
                    onClick={()=>onIncrease(product)}/>
                    <img className="action-icons" alt="delete" style={styles.icons} src="https://www.flaticon.com/svg/vstatic/svg/3096/3096673.svg?token=exp=1614346444~hmac=2be0a214208207524b188614d96d520f"
                    onClick={()=>onDelete(product.id)}/>
                    </div>
                </div>        
            </div>
        )
    }
const styles={
    image: {
        height:110,
        width:110,
        borderRadius:4,
        backgroundColor:"#ccc"
    },
    icons:{
        margin:2,
        height:24,
        width:24
    }
}
export default CartItem