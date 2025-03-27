import React, { useState } from "react";
import CartContext from "./Cart-context"; 

const CartProvider = (props) => {
  const [items, setItems] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  const addItemToCartHandler = (item) => {
    setItems((prevItems) => [...prevItems, item]);
    setTotalAmount((prevAmount) => prevAmount + item.price * item.quantity);
  };

  const removeItemFromCartHandler = (id) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));

    // Updating total amount when removing an item
    const removedItem = items.find((item) => item.id === id);
    if (removedItem) {
      setTotalAmount((prevAmount) => prevAmount - removedItem.price * removedItem.quantity);
    }
  };

  const cartContextValue = {
    items,
    totalAmount,
    addItems: addItemToCartHandler,
    removeItems: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContextValue}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
