import Cart from "./Cart"
import  NavBar from "./Navbar"
import React from 'react';
import firebase from "firebase/app"
import "firebase/firestore"
class App extends React.Component {
  constructor() {
    super()
    this.state = {
        products: [],
        loading: true
    }
    this.db=firebase.firestore()
}

componentDidMount=() => {
  this.db.collection('products').onSnapshot(querySnapshot => {
    querySnapshot.docs.map(doc => {
      console.log('data', doc.data());
    })
    const products =querySnapshot.docs.map(doc =>{
      const data=doc.data();
      data["id"]=doc.id
      return data
    })
    this.setState({products: products,
      loading: false})
  })
}
increaseQuantity=(product)=>{
    const {products}=this.state;
    const index=products.indexOf(product);
    const docRef=this.db.collection("products").doc(products[index].id);
    docRef.update({
      qty: products[index].qty+1
    }).then(()=>{
      console.log("update succesfully")
    })
    .catch((err)=>{
      console.log(err)
    })
  
  
}
decreaseQuantity=(product)=>{
    const {products}=this.state;
    const index=products.indexOf(product);
    const docRef=this.db.collection("products").doc(products[index].id);
    if(products[index].qty===0){
      return
    }
    docRef.update({
      qty: products[index].qty-1
    }).then(()=>{
      console.log("update succesfully")
    })
    .catch((err)=>{
      console.log(err)
    })
}
deleteProducts=(id)=>{
    const{products}=this.state
    const docRef=this.db.collection("products").doc(id);
   docRef.delete().then(()=>{
     console.log("delete succesfully")
   }).catch((err)=>{
     console.log(err)
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
addProduct=()=>{
  this.db.collection('products')
  .add({
    img:"",
    price:900,
    qty:3,
    title:"washing machine",
  })
  .then((docRef)=>{
    console.log("products",docRef)
  })
  .catch((err)=>{
    console.log(err)
  })
}
render() {
  const {products,loading}=this.state
  return (
    <div className="App">
      <NavBar count={this.getTotalItems()}/>
      <button onClick={this.addProduct} style={{padding:20,fontSize:20}}>Add a product</button>
      <Cart 
      product={products}
      key={products.id}
      onIncrease={this.increaseQuantity}
      onDecrease={this.decreaseQuantity} 
      onDelete={this.deleteProducts}
      />
      {loading && <h1>loading product</h1>}
      <div className="total" style={{fontSize:25 ,padding:10}}>Total:{this.getTotalprice()}</div>
    </div>
  );
}
}

export default App;
