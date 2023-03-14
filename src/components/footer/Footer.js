import React from 'react'
import styles from "./Footer.module.scss"
import Fotter_logo from "../../assets/logo/1x/logo_bg_green_around.png"
import { AiFillFacebook } from "react-icons/ai";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLine } from "react-icons/fa"
const Footer = () => {
  return (
    <>
      <div className={styles.footer}>
        <div className='container'>
          <div className={styles.footer_main}>
            {/* logo */}
            <div className={styles.footer_logo}>
              <img src={Fotter_logo} />
            </div>
            {/* footer_content */}
            <div className={styles.footer_content}>
              {/* footer_icon */}
              <div className={styles.footer_icon}>
                <div className={styles.icon_item} >
                  <a href="https://www.facebook.com/baokuolivingwaterswellnesscenter">
                    <AiFillFacebook style={{ fontSize: "50px", borderRadius: "15px", color: '#808080' }} />
                  </a>
                </div>
                <div className={styles.icon_item}>
                  <a href="https://www.facebook.com/baokuolivingwaterswellnesscenter">
                    <FaInstagramSquare style={{ fontSize: "50px", color: '#808080' }} />
                  </a>
                </div>
                <div className={styles.icon_item}>
                  <a href="https://page.line.me/psy0363x?openQrModal=true">
                    <FaLine style={{ fontSize: "50px", color: '#808080' }} />
                  </a>
                </div>
              </div>
              {/* footer_Compilation */}
              <div className={styles.footer_text}>
                <span>
                  五鮮農產有限公司 統一編號42885519
                </span>
              </div>
              {/* email */}
              <div className={styles.footer_text}>
                <span>
                  x10215989@gmail.com
                </span>
              </div>
              {/* address */}
              <div className={styles.footer_text}>
                <span>
                  台中市北屯區旱溪街301號
                </span>
              </div>
              {/* know */}
              <div className={styles.footer_know}>
                <div className={styles.footer_item}>
                  <a className={styles.footer_a_left} href='http://localhost:3000/'>會員須知</a>
                </div>
                <div className={styles.footer_item}>
                  <a href='http://localhost:3000/'>定型化契約</a>
                </div>
                <div className={styles.footer_item}>
                  <a href='http://localhost:3000/'>服務條款</a>
                </div>
                <div className={styles.footer_item}>
                  <a href='http://localhost:3000/'>隱私權政策</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footer_bottom}>
        <div className={styles.footer_bottom_text}>
          Copy
        </div>
      </div>
    </>
  )
}

export default Footer