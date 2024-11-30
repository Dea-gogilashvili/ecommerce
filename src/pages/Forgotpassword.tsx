import Header from "../components/Header";
import Copyrightline from "../components/Copyrightline";
import Forgotpasswordgreyline from "../components/Forgotpasswordgreyline";
import Forgotpasswordcomponent from "../components/Forgotpasswordcomponent";
import Footer from "../components/Footer";

const Forgotpassword = () => {
  return (
    <div>
      <Header />
      <Forgotpasswordgreyline />
      <Forgotpasswordcomponent/>
      <Footer />
      <Copyrightline />

      {/* <h2>forgot password</h2> */}
    </div>
  );
};

export default Forgotpassword;
