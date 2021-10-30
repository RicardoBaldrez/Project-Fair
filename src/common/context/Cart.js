import { createContext, useContext, useEffect, useState } from 'react';

export const CartContext = createContext();
CartContext.displayName = "Cart";

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [quantityProducts, setQuantityProducts] = useState(0);

  return (
    <CartContext.Provider 
      value={{ 
        cart,
        setCart,
        quantityProducts, 
        setQuantityProducts,
      }}
    >
      { children }
    </CartContext.Provider>
  );
}

export const useCartContext = () => {
  const { cart, setCart, quantityProducts, setQuantityProducts } = useContext(CartContext);

  const modifyQuantity = (id, quantity) => {
    return cart.map(productItem => {
      if(productItem.id === id) productItem.quantity += quantity;
      return productItem;
    })
  }

  const addProduct = (newProduct) => {
    const productExist = cart.some(productItem => productItem.id === newProduct.id);
    if(!productExist) {
      newProduct.quantity = 1;
      return setCart(previousCart => 
        [ ...previousCart, newProduct]
      );
    }
    setCart(modifyQuantity(newProduct.id, 1));
  }

  const removeProduct = (id) => {
    const product = cart.find(itemCart => itemCart.id === id);
    const isTheLast = product.quantity === 1;
    if(isTheLast) {
      return setCart(allItemsCart => allItemsCart.filter(itemCart => itemCart.id !== id));
    }
    setCart(modifyQuantity(id, -1));
  }

  useEffect(() => {
    const newQuantityProducts = cart.reduce((count, product) => count + product.quantity, 0);
    setQuantityProducts(newQuantityProducts);
  }, [cart, setQuantityProducts]);

  return {
    cart,
    setCart,
    addProduct,
    removeProduct,
    quantityProducts,
    setQuantityProducts,
  }
}