import Header from "../components/Header";
import Slider from '../components/Slider';
import Shipping from '../components/Shipping';
import ShopNow from '../components/ShopNow';
import Grid from '../components/Grid';
import Poncho from '../components/Poncho';
import FeaturedLatest from '../components/FeaturedLatest';
import GridSecond from "../components/GridSecond";
import NewsLetter from '../components/NewsLetter';
import Footer from "../components/Footer";


const Main = () => {
  return (
    <div>
      <Header />
      <Slider />
      <Shipping />
      <ShopNow />
      <Grid />
      <Poncho />
      <FeaturedLatest />
      <GridSecond />
      <NewsLetter />
      <Footer />
      

      {/* <h2>Main Page</h2> */}
    </div>
  );
};

export default Main;
