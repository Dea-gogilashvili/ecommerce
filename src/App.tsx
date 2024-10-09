import "./App.css";
import Cart from "./pages/Cart";
import Main from "./pages/Main";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/cart" element={<Cart/>} />
      </Routes>
    </>
  );
};

export default App;
