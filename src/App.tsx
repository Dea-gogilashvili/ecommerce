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
import Profilepagepassword from "./pages/Profilepagepassword";
import Profilepagenoorders from "./pages/Profilepagenoorders"
import Adminpagelogin from "./pages/Adminpagelogin"
import Adminpagedashboard from "./pages/Adminpagedashboard";
import Adminpageproducts from "./pages/Adminpageproducts";
import Adminpageorders from "./pages/Adminpageorders";
import Adminpagecostumers from "./pages/Adminpagecostumers";
import Adminpagereviews from "./pages/Adminpagereviews";
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
        <Route path="/profilepagepassword" element={<Profilepagepassword/>}/>
        <Route path="/profilepagenoorders" element={<Profilepagenoorders/>}/>
        <Route path="/adminpagelogin" element={<Adminpagelogin/>}/>
        <Route path="/adminpagedashboard" element={<Adminpagedashboard/>}/>
        <Route path="/adminpageproducts" element={<Adminpageproducts/>}/>
        <Route path="/adminpageorders" element={<Adminpageorders/>}/>
        <Route path="/adminpagecostumers" element={<Adminpagecostumers/>}/>
        <Route path="/adminpagereviews" element={<Adminpagereviews/>}/>
        
       

      </Routes>
    </>
  );
};

export default App;
