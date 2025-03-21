import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increaseQuantity, decreaseQuantity, removeFromCart } from "../redux/cartSlice";
import "../css/CartPage.css";

const CartPage = () => {
  const { items, totalQuantity, totalPrice } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Shopping Cart</h2>
      <p>Total Items: {totalQuantity}</p>
      <p>Total Cost: ${totalPrice}</p>
      {items.length === 0 ? <p>Your cart is empty.</p> : null}
      {items.map((item) => (
        <div key={item.id} className="cart-item">
          <img src={item.image} alt={item.name} className="cart-image" />
          <h3>{item.name}</h3>
          <p>${item.price}</p>
          <button onClick={() => dispatch(increaseQuantity(item.id))}>+</button>
          <button onClick={() => dispatch(decreaseQuantity(item.id))}>-</button>
          <button onClick={() => dispatch(removeFromCart(item.id))}>Remove</button>
        </div>
      ))}
      <button className="checkout-button">Checkout (Coming Soon)</button>
      <button className="continue-button"><a href="/products">Continue Shopping</a></button>
    </div>
  );
};

export default CartPage;
