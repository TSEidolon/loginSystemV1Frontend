import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const RegisterPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/register", { username, password });
      alert("Registration successful! You can now log in.");
      navigate("/");
    } catch (err) {
      alert("Registration failed: " + err.response.data.error);
    }
  };
  const navigateLogin = () => {
    navigate("/login");
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <form className="p-6 bg-gray-200 rounded" onSubmit={handleRegister}>
        <h2 className="text-2xl mb-4">Register</h2>
        <input
          className="p-2 mb-2 w-full"
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          className="p-2 mb-2 w-full"
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button className="bg-green-500 text-white p-2 rounded w-full" type="submit">
          Register
        </button>
      </form>
      <button className="bg-blue-500 text-white p-2 rounded" type="button" onClick={navigateLogin}>Login</button>
    </div>
  );
}

export default RegisterPage