import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [user, setUser] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (!user) {
      alert("Enter username");
      return;
    }

    localStorage.setItem("user", user);
    window.location.href = "/";
  };

  return (
    <div className="auth">
      <h2>Login</h2>

      <input
        type="text"
        placeholder="Enter Username"
        value={user}
        onChange={(e) => setUser(e.target.value)}
      />

      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;