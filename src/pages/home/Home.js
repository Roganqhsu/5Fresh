
import React from 'react';
import styles from "./Home.module.scss";
import Slider from "../../components/slider/Slider";
import Home_introduction from './components/home_introduction/Home_introduction';
import Home_product from './components/home_product/Home_product';
import Home_news from './components/home_news/Home_news';
import useFetchCollection from '../../customHooks/useFetchCollection';
import { useMemo,useState } from 'react';
const Home = () => {
  const {data}=useFetchCollection("news")
   const testMemo =useMemo(
          ()=>data.map((value,index)=>{
            return <> <Home_news data={value}/></>
            })
          ,[data]
        )
return (
    <div className={styles.home}>
      <Slider/>
      <Home_introduction/>
      <Home_product/>
      <Home_news data={data}/>
    </div>
  )
}

export default Home



// return (
    // <div className={styles.home}>
    //   <Slider/>
    //   <Home_introduction/>
    //   <Home_product/>
    
      
    //  <Home_news data={data}/>
    // </div>
  // )

  // const [apple ,setApple] =useState(null)
  // console.log(data);
  // const testMemo=useMemo(
  //   ()=>data.map((value,index)=>{
  //     console.log(value);
  //     setApple(value);
  //     return (
  //       <div key={value}>
  //       789
  //       <Home_news key={value} data={value} test={"456"}/>
  //       </div>
  //     )
  //   }),[data]
  // )
  // return testMemo