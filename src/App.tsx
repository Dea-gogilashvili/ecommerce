import "./App.css";
import Details from "./pages/details";
import Main from "./pages/Main";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/details" element={<Details/>} />
      </Routes>
    </>
  );
};

export default App;
