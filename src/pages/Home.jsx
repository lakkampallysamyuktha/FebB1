import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

function Home({ search }) {
  const [products, setProducts] = useState([]);


  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then(res => res.json())
      .then(data => setProducts(data.products));
  }, []);


  const filtered = products.filter(item =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="grid">
      {filtered.map(item => (
   
        <ProductCard key={item.id} product={item} />
      ))}
    </div>
  );
}

export default Home;