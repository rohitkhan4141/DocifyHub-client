/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../AuthContext/AuthContext";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState(() => {
    const storedToken = localStorage.getItem('token');
    return storedToken || null;
  });

  const saveUserToLocalStorage = (userData) => {
    localStorage.setItem('user', JSON.stringify(userData));
  };

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    if (user) {
      saveUserToLocalStorage(user);
    } else {
      localStorage.removeItem('user');
    }
  }, [user]);

  useEffect(() => {
    if (token) {
      localStorage.setItem('token', token);
      setLoading(false);
    } else {
      localStorage.removeItem('token');
      setLoading(false);
    }
  }, [token]);

  // signup
  const signup = async (userData) => {
    setLoading(true);
    try {
      const response = await fetch('https://peach-fishy-gallon.glitch.me/api/v1/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          "authorization": `bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        const data = await response.json();
        toast.success('create acount successfully')
        // setUser(data);
        setLoading(false);
        return { success: true };
      } else {
        const error = await response.json();
        setLoading(false);
        return { success: false, error };
      }
    } catch (error) {
      setLoading(false);
      return { success: false, error };
    }
  };

  // login
  const login = async (userData) => {
    setLoading(true);
    try {
      const response = await fetch('https://peach-fishy-gallon.glitch.me/api/v1/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        mode: 'cors',
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        const data = await response.json();
        setToken(data.jwt);
        setUser(data.user);
        setLoading(false);
        console.log('login success')
        toast.success('login successfully')
        return { success: true };
      } else {
        const error = await response.json();
        setLoading(false);
        toast.error("Wrong credentials")
        console.log('login failed')
        return { success: false, error };
      }
    } catch (error) {
      setLoading(false);
      toast.error("Wrong credentials")
      console.log('error e')
      return { success: false, error };
    }
  };

  //logout
  const logout = () => {
    setToken(null);
    setUser(null);
    localStorage.removeItem('user');
    localStorage.removeItem('token');
  };

  // check whether user authenticated or not
  const isAuthenticated = () => {
    return token !== null;
  };

  const authInfo = {
    loading,
    setLoading,
    signup,
    user,
    login,
    logout,
    isAuthenticated
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
