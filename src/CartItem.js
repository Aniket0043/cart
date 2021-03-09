import React from 'react';

const CartItem=(props)=>{
        console.log(props)
        const {price,title,qty,img}=props.product;
        const {product,onIncrease,onDecrease,onDelete}=props

        return(
            <div className="cart-item" style={{display: 'flex', margin:10}}>
                <div className="left-block">
                    <img src={img} style={styles.image}/>
                </div>
                <div className="right-block">
                    <div className="phone" style={{fontSize:25, margin:2}}>{title}</div>
                    <div className="price">Rs{price}</div>
                    <div className="quantity">qty:{qty}</div>
                    <div className="cart-item-action" style={{display:"flex"}}> {/*buttons*/}
                    <img className="action-icons" alt="decrease" style={styles.icons} src="https://www.flaticon.com/svg/vstatic/svg/992/992683.svg?token=exp=1615270119~hmac=d9ff0bafd93abb0e4fa5c755e37792ad"
                    onClick={()=>onDecrease(product)}/>
                    <img className="action-icons" alt="increase" style={styles.icons} src="https://www.flaticon.com/svg/vstatic/svg/1828/1828926.svg?token=exp=1615270164~hmac=b28115b083736ffc57cff57aaf42e258"
                    onClick={()=>onIncrease(product)}/>
                    <img className="action-icons" alt="delete" style={styles.icons} src="https://www.flaticon.com/svg/vstatic/svg/1214/1214428.svg?token=exp=1615270204~hmac=643123cf1a706a4dd10d3b69c26016b6"
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