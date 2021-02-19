import React from 'react';

class CartItem extends React.Component{
    render() {
        return(
            <div className="cart-item" style={{display: 'flex', margin:10}}>
                <div className="left-block">
                    <img style={styles.image}/>
                </div>
                <div className="right-block">
                    <div className="phone" style={{fontSize:18}}>phone</div>
                    <div className="price">rs 999</div>
                    <div className="quantity">qty 1</div>
                    <div className="cart-item-action">{/*buttons*/}</div>
                </div>        
            </div>
        )
    }
}
const styles={
    image: {
        height:110,
        width:110,
        borderRadius:4,
        backgroundColor:"#ccc"
    }
}
export default CartItem