import React, { createContext, useContext, useEffect, useState } from "react";

export const Datacontext = createContext();

export const DataProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [isLogIn, setIsLogIn] = useState(false);
  const [isAuth, setIsAuth] = useState(false);
  const [cart, setCart] = useState([]);

  const login = (userData, tokenData) => {
    localStorage.setItem("user", JSON.stringify(userData));
    localStorage.setItem("token", tokenData);

    setUser(userData);
    setToken(tokenData);
    setIsLogIn(true);
    setIsAuth(true);
  };

  const logout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    sessionStorage.removeItem("user");
    sessionStorage.removeItem("token");

    setUser(null);
    setToken(null);
    setIsLogIn(false);
    setIsAuth(false);
  };

  useEffect(() => {
    const savedUser =
      localStorage.getItem("user") ||
      sessionStorage.getItem("user");

    const savedToken =
      localStorage.getItem("token") ||
      sessionStorage.getItem("token");

    if (savedUser && savedToken) {
      try {
        setUser(JSON.parse(savedUser));
        setToken(savedToken);
        setIsLogIn(true);
        setIsAuth(true);
      } catch (error) {
        console.error("Invalid user data in storage");

        localStorage.removeItem("user");
        localStorage.removeItem("token");
        sessionStorage.removeItem("user");
        sessionStorage.removeItem("token");

        setUser(null);
        setToken(null);
        setIsLogIn(false);
        setIsAuth(false);
      }
    } else {
      setUser(null);
      setToken(null);
      setIsLogIn(false);
      setIsAuth(false);
    }
  }, []);

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
    isAuth,
    login,
    logout,
    cart,
    addToCart,
    removeFromCart,
    clearCart,
  };

  return (
    <Datacontext.Provider value={value}>
      {children}
    </Datacontext.Provider>
  );
};

export const useData = () => {
  return useContext(Datacontext);
};