import React, { useContext } from 'react'
import { StoredContext } from '../../../context/Storedcontext'
import './PlaceOrder.css'
const PlaceOrder = () => {
    const{getTotalCartAmout}=useContext(StoredContext)
  return (
   
      <form className='place-order'>
            <div className='place-order-left'>
            <p className='title'>Delivery Information</p>
            <div className='multi-fields'>
             <input type='text' placeholder='FirstName'/>
             <input type='text' placeholder='LastName'/>
            </div>
            <input type='text' placeholder='Emailaddress'/>
            <input type='text' placeholder='street'/> 
            <div className='multi-fields'>
             <input type='text' placeholder='City'/>
             <input type='text' placeholder='State'/>
            </div>  
            <div className='multi-fields'>
             <input type='text' placeholder='ZipCode'/>
             <input type='text' placeholder='Country'/>
            </div>  
            <input type='text' placeholder='phone'/>                
            </div>

            <div className='place-order-right'>
            <div className="cart-total">
          <h2>Cart Total</h2>
          <div>
         
          <div className="cart-total-detail">
            <p>subtotal</p>
            <p>${ getTotalCartAmout()}</p> 
          </div>
          <hr/>
          <div className="cart-total-detail">
          <p>DelveryFee</p>
            <p>{getTotalCartAmout()===0?0:2}</p>
          </div>
          <hr/>
          <div className="cart-total-detail">
         <b>Total</b>
           <b>${ getTotalCartAmout()===0?0:getTotalCartAmout()+2}</b>
          </div>
          </div>
          <button > Proceed To Pay Now</button>
          </div>
                </div>
      </form>
   
  )
}

export default PlaceOrder
