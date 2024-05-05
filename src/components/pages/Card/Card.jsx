import React, { useContext } from 'react'
import './Card.css'
import { StoreContext } from '../../Context/StoreContext'

export default function Card() {
  const{cartItems,food_list,removeFromCart}=useContext(StoreContext);
  return (
    <div className='cart'>
    <div className='cart-items'>
      <div className='cart-item-title'>
        <p>Items</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr/>
    </div>
      {food_list.map((item,index)=>{
        if(cartItems[item._id]>0){
          return(
           <div className='cart-item-title cart-items-item'>
           <img src={item.image} alt=""></img>
           <p>{item.name}</p>
           <p>{item.price}</p>
           <p>{cartItems[item._id]}</p>
           <p>{item.price*cartItems[item._id]}</p>
           <p>x</p>
           </div>
          )
        }
      })}
    </div>
    
  )
}
