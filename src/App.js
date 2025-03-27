import Header from "./components/layout/Header";
import Cart from "./components/cart/Cart";
import { useState } from "react";
import Meals from "./components/meals/Meals";
import CartContext from "./components/store/Cart-context";
function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };
  const hideCartHandler = () => {
    setCartIsShown(false);
  };
  return (
    <CartContext>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartContext>
  );
}

export default App;
