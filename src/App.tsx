import "./App.css";
import Cart from "./pages/Cart";
import Main from "./pages/Main";
import Checkout from "./pages/Checkout";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/checkout" element={<Checkout/>} />
      </Routes>
    </>
  );
};

export default App;
