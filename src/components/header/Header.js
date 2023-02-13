import React from 'react'
import styles from "./Header.module.scss";
import { NavLink } from 'react-router-dom';
// img
import Active from "../../assets/index.png"
// icon
import { BsFillPersonFill } from "react-icons/bs"
const Header = () => {
  return (
    <div className={styles.header}>
      <div className="container">
        {/* logo */}
        <div className={styles.logo}>
          logo
        </div>
        <hr />
        {/* header-content */}
        <div className={styles.header_content}>
          <div className={styles.header_list}>
            {/* 首頁 */}
            <div className={styles.header_item}>
              <div className={styles.header_item_active}>
                <img src={Active} alt="active" />
              </div>
              <NavLink to="/" className={styles.header_item_text}>
                首頁
              </NavLink>
            </div>
            {/* 最新消息 */}
            <div className={styles.header_item}>
              <div className={styles.header_item_active}>
                <img src={Active} alt="active" />
              </div>
              <NavLink to="/news" className={styles.header_item_text}>
                最新消息
              </NavLink>
            </div>
            {/* 商品 */}
            <div className={styles.header_item}>
              <div className={styles.header_item_active}>
                <img src={Active} alt="active" />
              </div>
              <NavLink to="/products" className={styles.header_item_text}>
                產品列表
              </NavLink>
            </div>
          </div>
          <div className={styles.header_menu}>
            <div className={styles.header_icon}>

              <BsFillPersonFill style={{ color: "#fff", fontSize: "20px" }} />
              <NavLink to="/login">
                login
              </NavLink>
            </div>
            <div className={styles.header_icon}>

              <BsFillPersonFill style={{ color: "#fff", fontSize: "20px" }} />
              <NavLink to="/login">
                cart
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
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