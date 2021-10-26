import { createContext, useContext, useState } from 'react';

export const CartContext = createContext();
CartContext.displayName = "Cart";

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      { children }
    </CartContext.Provider>
  );
}

export const useCartContext = () => {
  const { cart, setCart } = useContext(CartContext);

  function addProduct(newProduct) {
    const productExist = cart.some(productItem => productItem.id === newProduct.id);
    if(!productExist) {
      newProduct.quantity = 1;
      return setCart(previousCart => 
        [ ...previousCart, newProduct]
      );
    }
    setCart(previousCart => previousCart.map(productItem => {
      if(productItem.id === newProduct.id) productItem.quantity += 1;
      return productItem;
    }))
  }

  return {
    cart,
    setCart,
    addProduct,
  }
}