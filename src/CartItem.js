import React from 'react';

class CartItem extends React.Component{
    constructor(){
        super();
        this.state={
            price:700,
            title:"phone",
            qty:1,
            img:""
        }
       
    }
    increaseQuantity=()=>{
        //this.state.qty+=1
        console.log("increase",this.state)
        this.setState((prevState)=>{
            return {qty:prevState.qty+1}
        })
    }
    decreaseQuantity=()=>{
        const {qty}=this.state
        if(qty===0){
            return ;
        }
        this.setState((prevState)=>{
            return {qty:prevState.qty-1}
        })
    }
    deleteQuantity(){
        console.log("delete")
    }
    render() {
        console.log(this.props)
        const {price,title,qty}=this.props.product;
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
                    onClick={this.decreaseQuantity}/>
                    <img className="action-icons" alt="increase" style={styles.icons} src="https://www.flaticon.com/svg/vstatic/svg/1828/1828926.svg?token=exp=1614346376~hmac=5419b2154259cc0625a3ad780997b73e"
                    onClick={this.increaseQuantity}/>
                    <img className="action-icons" alt="delete" style={styles.icons} src="https://www.flaticon.com/svg/vstatic/svg/3096/3096673.svg?token=exp=1614346444~hmac=2be0a214208207524b188614d96d520f"
                    onClick={this.deleteQuantity}/>
                    </div>
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
    },
    icons:{
        margin:2,
        height:24,
        width:24
    }
}
export default CartItem