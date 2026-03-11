import { Link, Outlet } from "react-router-dom";

export default function Services() {
  return (
    <div className="container">
      <h2>Service Page</h2>

      <div className="services-menu">
        <Link to="web">Web Development</Link>
        <Link to="app">App Development</Link>
        <Link to="uiux">UI/UX Design</Link>
      </div>

      <Outlet />
    </div>
  );
}