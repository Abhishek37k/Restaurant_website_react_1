import CartContext from "./Cart-context";

const CartProvider = (props) => {
  const addItemstoCartHandler = (item) => {};
  const removeItemFromCartHandler = (id) => {};
  const CartContext = React.createContext({
    items: [],
    totalAmount: 0,
    addItems: addItemstoCartHandler,
    removeItems: removeItemFromCartHandler,
  });

  return <CartContext.Provider>{props.children}</CartContext.Provider>;
};
export default CartProvider;
