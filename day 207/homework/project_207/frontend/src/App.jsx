import React, { useState } from "react";
import axios from "axios";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  
  const handleRegister = async () => {
    try {
      const res = await axios.post("http://localhost:5000/register", { username, password });
      setMessage(res.data.message);
    } catch (error) {
      setMessage(error.response?.data?.message || "Error registering");
    }
  };

  const handleLogin = async () => {
    try {
      const res = await axios.post("http://localhost:5000/login", { username, password });
      setMessage(res.data.message);
    } catch (error) {
      setMessage(error.response?.data?.message || "Error logging in");
    }
  };

  return (
    <div>
      <h2>Register / Login</h2>
      <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleRegister}>Register</button>
      <button onClick={handleLogin}>Login</button>
      <p>{message}</p>
    </div>
  );
}

export default App;