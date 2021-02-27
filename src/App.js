import Cart from "./Cart"
import  NavBar from "./Navbar"
import React from 'react';
class App extends React.Component {
  constructor() {
    super()
    this.state = {
        products: [
            {
                price: 700,
                title: "watch   ",
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
increaseQuantity=(product)=>{
    const {products}=this.state;
    const index=products.indexOf(product);
    products[index].qty+=1;
    this.setState({
        products: products
    })
}
decreaseQuantity=(product)=>{
    const {products}=this.state;
    const index=products.indexOf(product);
    if(products[index].qty===0){
        return;
    }
    products[index].qty-=1;
    this.setState({
        products: products
    })
}
deleteProducts=(id)=>{
    const{products}=this.state
    const items=products.filter((item)=>
        item.id!==id
    )
    this.setState({
        products: items
    })
}
getTotalItems=()=>{
  const {products}=this.state
  let count=0;
  products.forEach((items)=>{
    count+=items.qty;
  })
  return count
}
getTotalprice=()=>{
  const {products}=this.state
  let carttotal=0;
  products.map((product)=>{
    carttotal=carttotal + product.qty*product.price
  })
  return carttotal;
}
render() {
  const {products}=this.state
  return (
    <div className="App">
      <NavBar count={this.getTotalItems()}/>
      <Cart 
      product={products}
      key={products.id}
      onIncrease={this.increaseQuantity}
      onDecrease={this.decreaseQuantity} 
      onDelete={this.deleteProducts}
      />
      <div className="total" style={{fontSize:25 ,padding:10}}>Total:{this.getTotalprice()}</div>
    </div>
  );
}
}

export default App;
