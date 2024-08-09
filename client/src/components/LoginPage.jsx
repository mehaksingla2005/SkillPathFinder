import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const endpoint = 'https://skillpathfinder-1.onrender.com/api/auth/login';
      const payload = { username, password };
      
      const response = await axios.post(endpoint, payload);
      
      console.log(response.data);
      
      // Store the token in localStorage
      localStorage.setItem('userToken', response.data.token);
      console.log("UserLogin and token saved")
      // Redirect to the home page
      navigate('/');
      toast.success("login successfully");
    } catch (error) {
      console.error('Authentication error:', error.response.data);
      toast.error("Login failed! Please Check your credentials.");
    }
  };
  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-6">Login</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            className="w-full p-3 border border-gray-300 rounded"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full p-3 border border-gray-300 rounded"
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded hover:bg-blue-600"
            
          >
            Login
          </button>
        </form>
        <p className="mt-6 text-center">
          Don't have an account? 
          <button
            onClick={() => navigate('/signup')}
            className="text-blue-500 hover:underline ml-1"
          >
            Sign Up
          </button>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;