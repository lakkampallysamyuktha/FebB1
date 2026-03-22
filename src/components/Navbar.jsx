import { Link } from "react-router-dom";

function Navbar({ setSearch }) {
  return (
    <div className="navbar">
      <h2>Myntra</h2>

      <div className="menu">
        <Link to="/">Home</Link>
        <Link to="/men">Men</Link>
        <Link to="/women">Women</Link>
        <Link to="/about">About</Link>
        <Link to="/services">Services</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/wishlist">Wishlist</Link>
        <Link to="/cart">Cart</Link>
      </div>

      <input
        placeholder="Search..."
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}

export default Navbar;