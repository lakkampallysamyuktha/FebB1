import { createContext, useState } from "react";

export const WishlistContext = createContext();

function WishlistProvider({ children }) {
  const [wishlist, setWishlist] = useState([]);

  const toggleWishlist = (item) => {
    const exist = wishlist.find(p => p.id === item.id);

    if (exist) {
      setWishlist(wishlist.filter(p => p.id !== item.id));
    } else {
      setWishlist([...wishlist, item]);
    }
  };

  return (
    <WishlistContext.Provider value={{ wishlist, toggleWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
}

export default WishlistProvider;