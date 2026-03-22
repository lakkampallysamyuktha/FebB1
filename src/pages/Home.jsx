import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

function Home({ search }) {
  const [products, setProducts] = useState([]);

  // Fetch all products
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then(res => res.json())
      .then(data => setProducts(data.products));
  }, []);

  // Search filter
  const filtered = products.filter(item =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="grid">
      {filtered.map(item => (
        // ❌ No size here (only Men/Women have size)
        <ProductCard key={item.id} product={item} />
      ))}
    </div>
  );
}

export default Home;