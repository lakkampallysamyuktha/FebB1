import { useContext } from "react";
import { WishlistContext } from "../context/WishlistContext";
import { CartContext } from "../context/CartContext";

function Wishlist() {
  const { wishlist, toggleWishlist } = useContext(WishlistContext);
  const { dispatch } = useContext(CartContext);

  if (wishlist.length === 0) {
    return <h2>No items in Wishlist ❤️</h2>;
  }

  return (
    <div className="grid">
      {wishlist.map(item => (
        <div key={item.id} className="card">
          <img src={item.thumbnail} />

          <h4>{item.title}</h4>
          <p>₹ {item.price}</p>

          {/* ✅ Move to Cart */}
          <button onClick={() => dispatch({ type: "ADD", payload: item })}>
            Move to Cart
          </button>

          {/* ✅ Remove */}
          <button onClick={() => toggleWishlist(item)}>
            Remove ❤️
          </button>
        </div>
      ))}
    </div>
  );
}

export default Wishlist;