import Header from "../components/Header";
import Logingreyline from "../components/Logingreyline"
import Logincomponent from "../components/Logincomponent"
import Footer from "../components/Footer";
import Copyrightline from "../components/Copyrightline";

const Login = () => {
  return (
    <div>
      <Header />
      <Logingreyline/>
      <Logincomponent />
      <Footer />
      <Copyrightline />

      {/* <h2>login</h2> */}
    </div>
  );
};

export default Login;
