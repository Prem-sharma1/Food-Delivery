import React, { useContext } from "react";
import "./Cart.css";
import { StoredContext } from "../../../context/Storedcontext";
import { useNavigate } from "react-router-dom";
const Cart = () => {
  const { cartItems, food_list, removeFromCart, getTotalCartAmout } = useContext(StoredContext);
  const navigate=useNavigate()
  return (
    <div className="cart">
      <div className="cart-Items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div> 
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <div>
                <div className="cart-items-title cart-items-item">
                  <img src={item.image} alt="" />
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>${item.price * cartItems[item._id]}</p>
                  <p onClick={()=>removeFromCart(item._id )} className="cross">x</p>
                </div>
                <hr />
              </div>
            );
          }
        })}
      </div>
      <div className="cart-bottom">
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
          <button onClick={()=>navigate('/order')}>proceed to checkout</button>
        </div>
       <div className="cart-promocode">
       <div>
        <p>if you have a promo code enter it here</p>
        <div className="cart-promocode-input">
          <input type="text" placeholder="promo code"/>
           <button>submit</button>
        </div>
       </div>
       </div>
      </div>
    </div>
  );
};

export default Cart;
