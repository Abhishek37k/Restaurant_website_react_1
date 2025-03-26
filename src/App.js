
import Header from "./components/layout/Header";
import Cart from "./components/cart/Cart";
import Meals from './components/meals/Meals'
function App() {
  return (
    <div>
          <Cart />
      <Header/>
      <main>
        <Meals />
      </main>
    </div>
  );
}

export default App;
