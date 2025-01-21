

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
import Copyrightline from "../components/Copyrightline";
import { useEffect, useState } from "react";

const Main = () => {
  const [apiData, setApiData] = useState<any>([]);
  const [apiDataSecond, setApiDataSecond] = useState<any[]>([]);

  const getMainPageData = async () => {
    try {
      const res = await fetch('https://fakestoreapi.com/products?limit=4');
      const data = await res.json();
      setApiData(data);
    } catch (error) {
      console.log(error);
    }
  };

  const getSecondGridData = async () => {
    try {
      const res = await fetch('https://fakestoreapi.com/products?limit=4');
      const data = await res.json();
      setApiDataSecond(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMainPageData();
    getSecondGridData();
  }, []);

  return (
    <div>
      <Header />
      <Slider />
      <Shipping />
      <ShopNow />
      <Grid apiData={apiData} />
      <Poncho />
      <FeaturedLatest />
      <GridSecond apiData={apiDataSecond} />
      <NewsLetter />
      <Footer />
      <Copyrightline />
    </div>
  );
};

export default Main;
