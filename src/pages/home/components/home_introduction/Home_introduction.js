import React from 'react'
import styles from "./Home_introduction.module.scss"
import Introduce_logo from "../../../../assets/logo/1x/logo_horizontal_green.png";
import { MyButton } from '../../../../components/normal_components/Normal_components';
const Home_introduction = () => {
  return (
    <div className="container">
      <div className={styles.home_introduction}>
        {/* content */}
        <div className={styles.home_introduction_content}>
          {/* logo */}
          <div className={styles.home_introduction_logo}>
            <img src={Introduce_logo} className={styles.Introduce_logo}/>
          </div>
          {/* text */}
          <div className={styles.home_introduction_text}>
            <div className={styles.home_introduction_text_content}><span>五鮮農產簡介，五鮮農產簡介，五鮮農產簡介，五鮮農產簡介，五鮮農產簡介，五鮮農產簡介，五鮮農產簡介，五鮮農產簡介，五鮮農產簡介，五鮮農產簡介，五鮮農產簡介，五鮮農產簡介，五鮮農產簡介，五鮮農產簡介，五鮮農產簡介，五鮮農產簡介，五鮮農產簡介，五鮮農產簡介，五鮮農產簡介，五鮮農產簡介，五鮮農產簡介，五鮮農產簡介，五鮮農產簡介，五鮮農產簡介，五鮮農產簡介，五鮮農產簡介，五鮮農產簡介，五鮮農產簡介，五鮮農產簡介，五鮮農產簡介，</span></div>
            {/* <img src={Introduce_logo} /> */}
            
            <div className={styles.introduce_button}>
              < MyButton text="MORE"/>
              {/* <button>more</button> */}
            </div>
          </div>
        </div>
        {/* img */}
        <div className={styles.home_introduction_img}>
          <img  src="https://picsum.photos/710/490?random=5"/>
        </div>
      </div>
    </div>
  )
}

export default Home_introduction