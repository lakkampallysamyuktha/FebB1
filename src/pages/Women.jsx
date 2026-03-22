import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

function Women() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products/category/womens-dresses")
      .then(res => res.json())
      .then(data => setProducts(data.products));
  }, []);

  return (
    <div className="grid">
      {products.map(p => (
        <ProductCard key={p.id} product={p} showSize={true} />
      ))}
    </div>
  );
}

export default Women;