import { useState, useContext, useCallback } from "react";
import { CartContext } from "../context/CartContext";
import { WishlistContext } from "../context/WishlistContext";

function ProductCard({ product, showSize }) {
  const { dispatch } = useContext(CartContext);
  const { wishlist, toggleWishlist } = useContext(WishlistContext);

  // State
  const [selectedSize, setSelectedSize] = useState("");
  const [added, setAdded] = useState(false);

  const sizes = ["S", "M", "L", "XL"];

  // Wishlist check
  const isLiked = wishlist.find(p => p.id === product.id);

  // ✅ useCallback (IMPORTANT FOR ASSIGNMENT)
  const handleAdd = useCallback(() => {
    if (showSize && !selectedSize) {
      alert("Select size first");
      return;
    }

    dispatch({
      type: "ADD",
      payload: { ...product, size: selectedSize }
    });

    // Button feedback
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  }, [selectedSize, product, dispatch, showSize]);

  return (
    <div className="card">
      {/* IMAGE */}
      <img src={product.thumbnail} alt={product.title} />

      {/* TITLE */}
      <h4>{product.title}</h4>

      {/* PRICE */}
      <p>₹ {product.price}</p>

      {/* SIZE (ONLY FOR MEN/WOMEN) */}
      {showSize && (
        <>
          <p>Select Size</p>

          <div className="sizes">
            {sizes.map(size => (
              <button
                key={size}
                className={selectedSize === size ? "active-size" : ""}
                onClick={() => setSelectedSize(size)}
              >
                {size}
              </button>
            ))}
          </div>
        </>
      )}

      {/* ADD TO CART */}
      <button
        className={added ? "added-btn" : ""}
        onClick={handleAdd}
      >
        {added ? "Added ✓" : "Add to Cart"}
      </button>

      {/* WISHLIST */}
      <button
        className="wishlist-btn"
        onClick={() => toggleWishlist(product)}
      >
        {isLiked ? "❤️" : "🤍"}
      </button>
    </div>
  );
}

export default ProductCard;