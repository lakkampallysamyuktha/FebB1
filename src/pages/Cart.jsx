import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

function Cart() {
  const { cart, dispatch } = useContext(CartContext);
  const navigate = useNavigate();

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  if (cart.length === 0) {
    return <h2>Your Cart is Empty 🛒</h2>;
  }

  return (
    <div className="cart-container">
      <h2>Shopping Bag</h2>

      {cart.map(item => (
        <div key={item.id} className="cart-item">

          <img src={item.thumbnail} alt={item.title} />

          <div>
            <h4>{item.title}</h4>
            <p>₹ {item.price}</p>

        
            <div className="qty-box">
              <button onClick={() => dispatch({ type: "DECREASE", payload: item })}>
              -
             </button>

              <span>{item.qty}</span>

             <button onClick={() => dispatch({ type: "ADD", payload: item })}>
               +
             </button>
             </div>

           
             <button
              onClick={() =>
                dispatch({ type: "REMOVE", payload: item.id })
              }
             >
              Remove
            </button>
          </div>
        </div>
      ))}

    
      <h3>Total: ₹ {total}</h3>

      <button
        className="checkout-btn"
        onClick={() => navigate("/checkout")}
      >
        Proceed to Checkout
      </button>
    </div>
  );
}

export default Cart;