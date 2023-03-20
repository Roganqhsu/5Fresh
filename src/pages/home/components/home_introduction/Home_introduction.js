import React from 'react'
import styles from "./Home_introduction.module.scss"
import Introduce_img from "../../../../assets/slider/introduce.jpg"
import Introduce_logo from "../../../../assets/logo/1x/logo_horizontal_green-03.png";
import { MyButton } from '../../../../components/normal_components/Normal_components';
const Home_introduction = () => {
  return (
    <div className="container">
      <div className={styles.home_introduction}>
        {/* content */}
        <div className={styles.home_introduction_content}>
          {/* logo */}
          <div className={styles.home_introduction_logo}>
            <img src={Introduce_logo} className={styles.Introduce_logo} />
          </div>
          {/* text */}
          <div className={styles.home_introduction_text}>
            <div className={styles.home_introduction_text_content}><span>五鮮農產簡介，五鮮農產簡介，五鮮農產簡介，五鮮農產簡介，五鮮農產簡介，五鮮農產簡介，五鮮農產簡介，五鮮農產簡介，五鮮農產簡介，五鮮農產簡介，五鮮農產簡介，五鮮農產簡介，五鮮農產簡介，五鮮農產簡介，五鮮農產簡介，五鮮農產簡介，五鮮農產簡介，五鮮農產簡介，五鮮農產簡介，五鮮農產簡介，五鮮農產簡介，五鮮農產簡介，五鮮農產簡介，五鮮農產簡介，五鮮農產簡介，五鮮農產簡介，五鮮農產簡介，五鮮農產簡介，五鮮農產簡介，五鮮農產簡介，</span></div>
            <div className={styles.introduce_button}>
              < MyButton text="MORE" />
            </div>
          </div>
        </div>
        {/* img */}
        <div className={styles.home_introduction_img}>
          <img src={Introduce_img} />
        </div>
      </div>
    </div>
  )
}

export default Home_introduction