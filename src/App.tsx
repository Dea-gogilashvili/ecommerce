import "./App.css";
import Cart from "./pages/Cart";
import Main from "./pages/Main";
import Checkout from "./pages/Checkout";
import Afterpayment from "./pages/Afterpayment";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Forgotpassword from "./pages/Forgotpassword";
import Resetpassword from "./pages/Resetpassword";
import Unsuccessfulpaymentpage from "./pages/Unsuccessfulpaymentpage"
import Profilepagesadress from "./pages/Profilepagesadress"
import Wishlistprofilepage from "./pages/Wishlistprofilepage";
import Accountdetailsprofilepage from "./pages/Accountdetailsprofilepage";
import Profilepageorders from "./pages/Profilepageorders";


import { Routes, Route } from "react-router-dom";



const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/checkout" element={<Checkout/>} />
        <Route path="/afterpayment" element={<Afterpayment/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/forgotpassword" element={<Forgotpassword/>}/>
        <Route path="/resetpassword" element={<Resetpassword/>}/>
        <Route path="/unsuccessfulpaymentpage" element={<Unsuccessfulpaymentpage/>}/>
        <Route path="/profilepagesadress" element={<Profilepagesadress/>}/>
        <Route path="/wishlistprofilepage" element={<Wishlistprofilepage/>}/>
        <Route path="/accountdetailsprofilepage" element={<Accountdetailsprofilepage/>}/>
        <Route path="/profilepageorders" element={<Profilepageorders/>}/>

        
       

      </Routes>
    </>
  );
};

export default App;
