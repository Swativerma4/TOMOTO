import React, {useContext}from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../Context/StoreContext'
export default function PlaceOrder() {
  const {getTotalCartAmount}=useContext(  StoreContext)
  return (
    <form className='place-order'>
      <div className='place-order-left'>
        <p className='title'>Delivery Information</p>
        <div className='multi-fields'>
          <input types="text" placeholder='First name'></input>
          <input types="text" placeholder='Last name'></input>
        </div>
        <input type='email' placeholder='Email address'></input>
        <input type='text' placeholder='Street'></input>
        <div className='multi-fields'>
        <input type='text' placeholder='City' ></input> 
        <input type='text' placeholder='State'></input>
        </div>
        <div className='multi-fields'>
        <input type='text' placeholder='Zip code' ></input> 
        <input type='text' placeholder='Country' ></input> 
        </div>
        <input type='text' placeholder='Phone'></input>
      </div>
      <div className='place-order-right'>
      <div className='cart-total'>
          <h2>Card Total</h2>
          <div>
            <div className='cart-total-details'>
              <p>Subtotal</p>
              <p>{getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className='cart-total-details'>
              <p>Delivery Fee</p>
              <p>${getTotalCartAmount()===0?0:2}</p>
            </div>
            <hr />
            <div className='cart-total-details'>
              <b>Total</b>
              <b>${getTotalCartAmount()===0?0:getTotalCartAmount() + 2}</b>
            </div>
          </div>
          <button onClick={() => navigate('/order')}>PROCEED TO PAYMENT</button>
        </div>
      </div>
    </form>
   
  )
}
