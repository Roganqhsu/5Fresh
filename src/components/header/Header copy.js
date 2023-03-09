import React, { useState } from 'react'
import styles from "./Header.module.scss";
import { NavLink } from 'react-router-dom';
// img
import Active from "../../assets/index.png";
import Logo from "../../assets/logo/1x/logo_bg_none.png"
import { BsFillPersonFill } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";

import { BiArrowToTop, BiMenu } from "react-icons/bi";
const activeLink = ({ isActive }) => (isActive ? `${styles.active}` : `${styles.notActive}`)
const Header = () => {
  // 本地端變數
  const [menu, setMenu] = useState(false);
  const [scroll, setScroll] = useState(false);
  const ZoomNavBar = () => {
    if (window.scrollY > 100) {
      setScroll(true);
      console.log(scroll);
    } else {
      setScroll(false);
      console.log(scroll);
    }
  }
  window.onscroll = function () {
    ZoomNavBar()
  }
  const hideMenu = () => {
    setMenu(!menu)
    console.log(menu);
  }
  return (
    <header className={scroll ? `${styles.scroll}` : ""}>

      <div className={styles.header}>
        
        <div className="container" >
          <div className={styles.scroll_both}>
            <div className={styles.header_btw}>
              {/* logo */}
              <div className={styles.logo}>
                <img src={Logo} />
              </div>
              <div className={styles.header_RWD}>
                <p>HI Rogan</p>
                <div className={styles.header_icon}>
                  <NavLink to="/login">
                    <BsFillPersonFill style={{ color: "#fff", fontSize: "30px" }} />
                  </NavLink>
                </div>
                <div className={styles.header_icon}>
                  <NavLink to="/login">
                    <AiOutlineShoppingCart style={{ color: "#fff", fontSize: "30px" }} />
                  </NavLink>
                </div>

                <div onClick={() => { hideMenu() }} className={styles.header_icon}>
                  <BiMenu style={{ color: "#fff", fontSize: "30px" }} />
                </div>

              </div>
            </div>
            <hr />
            {/* header-content */}
            <nav className={menu ? `${styles.show_nav}` : `${styles.hide_nav}`}>
              <div className={menu?`${styles.nav_wrap} ${styles.nav_wrap_show}`:`${styles.nav_wrap}`} onClick={()=>{hideMenu()}}>

              </div>
              <div className={styles.header_content}>
                <div className={styles.header_list} onClick={()=>{console.log("ok");}}>
                  {/* 首頁 */}
                  <div className={styles.header_item}>
                    <NavLink to="/" className={activeLink}>
                      <div className={`${styles.header_item_active}`}>
                        <img src={Active} alt="active" />
                      </div>
                      <span className={styles.header_item_text}>
                        首頁
                      </span>
                    </NavLink>
                  </div>
                  {/* 最新消息 */}
                  <div className={styles.header_item}>
                    <NavLink to="/news" className={activeLink} >
                      <div className={styles.header_item_active}>
                        <img src={Active} alt="active" />
                      </div>
                      <span className={styles.header_item_text}>
                        最新消息
                      </span>
                    </NavLink>
                  </div>
                  {/* 商品 */}
                  <div className={styles.header_item}>
                    <NavLink to="/products" className={activeLink}>
                      <div className={styles.header_item_active}>
                        <img src={Active} alt="active" />
                      </div>
                      <span className={styles.header_item_text}>
                        產品列表
                      </span>
                    </NavLink>
                  </div>
                  {/* 商品管理 */}
                  <div className={styles.header_item}>
                    <NavLink to="/products" className={activeLink}>
                      <div className={styles.header_item_active}>
                        <img src={Active} alt="active" />
                      </div>
                      <span className={styles.header_item_text}>
                        商品管理
                      </span>
                    </NavLink>
                  </div>
                </div>
                {/* icon */}
                <div className={styles.header_menu}>
                  <div className={styles.header_icon}>
                    <p>HI Rogan</p>
                  </div>
                  <div className={styles.header_icon}>
                    <BsFillPersonFill style={{ color: "#fff", fontSize: "20px" }} />
                    <NavLink to="/login">
                      login
                    </NavLink>
                  </div>

                  <div className={styles.header_icon}>

                    <AiOutlineShoppingCart style={{ color: "#fff", fontSize: "20px" }} />
                    <NavLink to="/login">
                      cart
                    </NavLink>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
// Header
{/* <NavLink to="/">
home
</NavLink>
<NavLink to="/login">
login
</NavLink>
<NavLink to="/products">
products
</NavLink>
<NavLink to="/News">
News
</NavLink> */}