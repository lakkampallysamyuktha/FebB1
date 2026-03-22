import { useState, useContext, useCallback } from "react";
import { CartContext } from "../context/CartContext";
import { WishlistContext } from "../context/WishlistContext";

function ProductCard({ product, showSize }) {
  const { dispatch } = useContext(CartContext);
  const { wishlist, toggleWishlist } = useContext(WishlistContext);

 
  const [selectedSize, setSelectedSize] = useState("");
  const [added, setAdded] = useState(false);

  const sizes = ["S", "M", "L", "XL"];

  
  const isLiked = wishlist.find(p => p.id === product.id);

  const handleAdd = useCallback(() => {
    if (showSize && !selectedSize) {
      alert("Select size first");
      return;
    }

    dispatch({
      type: "ADD",
      payload: { ...product, size: selectedSize }
    });

  
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  }, [selectedSize, product, dispatch, showSize]);

  return (
    <div className="card">
   
      <img src={product.thumbnail} alt={product.title} />

    
      <h4>{product.title}</h4>

      
      <p>₹ {product.price}</p>

     
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

  
      <button
        className={added ? "added-btn" : ""}
        onClick={handleAdd}
      >
        {added ? "Added ✓" : "Add to Cart"}
      </button>


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