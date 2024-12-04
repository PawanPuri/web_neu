import React, { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(localStorage.getItem('user') || null);
  const [token, setToken] = useState(localStorage.getItem('token') || null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      localStorage.setItem('token', token);
    } else {
      delete axios.defaults.headers.common['Authorization'];
      localStorage.removeItem('token');
    }
  }, [token]);

  const login = async (credentials) => {
    setLoading(true);
    try {
      const { data } = await axios.post('https://web-neu.onrender.com/auth/login', credentials);
      setToken(data.access_token); // Save token to state
      const decodedToken = JSON.parse(atob(data.access_token.split('.')[1])); // Decode JWT payload
      console.log(decodedToken)
      setUser({ username: decodedToken.username, role: decodedToken.role });
      toast.success('Login Successfully!!')
      navigate('/dashboard');

      
    } catch (error) {
      console.error('Login failed:', error.response?.data?.message || error.message);
      toast.warning("Invalid Username or Password !")
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    setToken(null);
    setUser(null);
    navigate('/admin');
  };

  return (
    <AuthContext.Provider value={{ user, token, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => React.useContext(AuthContext);
