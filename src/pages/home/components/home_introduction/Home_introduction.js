import React from 'react'
import { NavLink } from 'react-router-dom';
import styles from "./Home_introduction.module.scss"
import Introduce_img from "../../../../assets/slider/introduce.jpg"
import Introduce_logo from "../../../../assets/logo/1x/logo_horizontal_green-03.png";
import { MyButton, Title } from '../../../../components/normal_components/Normal_components';
const Home_introduction = () => {
  return (
    <div className="container">
      <div className={styles.home_introduction_title}>
        <Title id="home_introduction_title" className={styles.home_introduction_title} english={"About"} chinese={"品牌故事"} />
      </div>
      <div className={styles.home_introduction}>
        {/* content */}
        <div className={styles.home_introduction_content}>
          {/* logo */}
          <div className={styles.home_introduction_logo}>
            <img src={Introduce_logo} className={styles.Introduce_logo} />
          </div>
          {/* text */}
          <div className={styles.home_introduction_text}>
            <div className={styles.home_introduction_text_content}><p>

              五鮮農產生菜專賣店是一家專營新鮮有機農產品和時令蔬果的店鋪。我們的農產品來自於優秀的有機農場和當地農民，品質優良，營養豐富，安全無污染。我們提供多種蔬果，涵蓋了各種口味和營養需求。同時，我們也提供各種各式菇類，滿足客戶的多元化需求。我們致力於提供最優質的產品和最優質的服務，以滿足客戶對食品的追求和期待。我們期待著您的光臨！

            </p>
            </div>
            <NavLink to="/about" className={styles.introduce_button}>
              < MyButton text="MORE" className={styles.introduce_button_item}/>
            </NavLink>
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