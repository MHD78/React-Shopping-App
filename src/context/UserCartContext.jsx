import { createContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";

const UserCart = createContext();
const UserCartDispatcher = createContext();

const UserCartContext = ({ children }) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const local = JSON.parse(window.localStorage.getItem("cart"));
    if (local === null) {
      window.localStorage.setItem("cart", "[]");
    } else {
      setCart(JSON.parse(window.localStorage.getItem("cart")));
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <UserCart.Provider value={cart}>
      <UserCartDispatcher.Provider value={setCart}>
        {children}
      </UserCartDispatcher.Provider>
    </UserCart.Provider>
  );
};

export default UserCartContext;

export const useUserCart = () => useContext(UserCart);
export const useUserCartDispatcher = () => useContext(UserCartDispatcher);
