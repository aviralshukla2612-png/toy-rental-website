import React, { createContext, useContext, useEffect, useState } from "react";

export const Datacontext = createContext();

export const DataProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [isLogIn, setIsLogIn] = useState(false);
  const [isAuth, setIsAuth] = useState(false);
  const [cart, setCart] = useState([]);


  const login = (user, token) => {
    const savedUser = localStorage.setItem('user', user) || sessionStorage.setItem('user', user);
    const savedToken = localStorage.setItem('token', token) || sessionStorage.setItem('token', token);

  };


  const logout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    sessionStorage.removeItem('user');
    sessionStorage.removeItem('token');
    setIsLogIn(false);
  };

  useEffect(() => {
    const user = localStorage.getItem('user') || sessionStorage.getItem('user');
    const token = localStorage.getItem('token') || sessionStorage.getItem('token');

    if (user && token) {
      setIsLogIn(true);
      setIsAuth(true);
      setUser(JSON.parse(user));
      setToken(token);
    }
    else {
      setIsLogIn(false);
      setIsAuth(false);
      setUser(null);
      setToken(null);
    }
    setIsAuth(true);
  }, []);

  console.log(isLogIn);
  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (index) => {
    const updatedCart = cart.filter((_, i) => i !== index);
    setCart(updatedCart);
  };


  const clearCart = () => {
    setCart([]);
  };


  const value = {
    user,
    token,
    isLogIn,
    login,
    logout,
    cart,
    addToCart,
    removeFromCart,
    clearCart,
  };

  return (
    <Datacontext.Provider
      value={value}
    >
      {children}
    </Datacontext.Provider>
  );
};

export const useData = () => {
  const context = useContext(Datacontext);
  return context;
};