import { useNavigate } from "react-router-dom";

export default function Checkout() {
  const navigate = useNavigate();

  return (
    <div>
      <h2>Checkout</h2>
      <button onClick={() => navigate("/success")}>
        Place Order
      </button>
    </div>
  );
}