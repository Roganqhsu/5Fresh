import React from 'react';
import styles from "./Home.module.scss";
import Slider from "../../components/slider/Slider";
import Home_introduction from './components/home_introduction/Home_introduction';
import Home_product from './components/home_product/Home_product';
import Home_news from './components/home_news/Home_news';
const Home = () => {
  return (
    <div className={styles.home}>
      <Slider/>
      <Home_introduction/>
      <Home_product/>
      <Home_news/>
    </div>
  )
}

export default Home