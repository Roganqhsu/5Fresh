import React, { useState, useEffect } from 'react'
import styles from "./Header.module.scss";
import { NavLink } from 'react-router-dom';

// firebase
import { auth } from "../../firebase/config";
import { onAuthStateChanged, signOut } from "firebase/auth";

// redux
import { useDispatch, useSelector } from "react-redux";
import {
  REMOVE_ACTIVE_USER,
  SET_ACTIVE_USER,
} from "../../redux/slice/authSlice";

import { ShowOnLogin, ShowOnLogout } from "../hiddenLink/hiddenLink";

// img
import Active from "../../assets/index.png";
import Logo from "../../assets/logo/1x/logo_bg_none.png"
import { BsFillPersonFill } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";

import { BiArrowToTop, BiMenu } from "react-icons/bi";
const activeLink = ({ isActive }) => (isActive ? `${styles.isActive}` : `${styles.noActive}`)
const Header = () => {
  // 本地端變數
  const [displayName, setdisplayName] = useState("");
  const [menu, setMenu] = useState(false);
  const [scroll, setScroll] = useState(false);
  // redux
  const dispatch = useDispatch();
  const ZoomNavBar = () => {
    if (window.scrollY > 100) {
      setScroll(true);
      console.log(scroll);
    } else {
      setScroll(false);
    }
  }
  window.onscroll = function () {
    ZoomNavBar()
  }
  const hideMenu = () => {
    setMenu(!menu)
  }
  // 登入狀態改變
  useEffect(() => {

    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(user);
        if (user.displayName == null) {
          const u1 = user.email.slice(0, -10);
          const uName = u1.charAt(0).toUpperCase() + u1.slice(1);
          setdisplayName(uName);
        } else {
          setdisplayName(user.displayName);
        }

        dispatch(
          SET_ACTIVE_USER({
            email: user.email,
            userName: user.displayName ? user.displayName : displayName,
            userID: user.uid,
          })
        );
      } else {
        setdisplayName("");
        dispatch(REMOVE_ACTIVE_USER());
      }
    });
  }, [dispatch,displayName]);
  // 登出
  const logoutUser = () => {
    signOut(auth)
      .then(() => {
        console.log("logout");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <>
      <header className={scroll ? `${styles.scroll_header}` : ''}>
        <div className='container'>

          <div className={scroll ? `${styles.scroll_header_main} ${styles.header_main}` : `${styles.header_main}`}>
            {/* RWD */}
            <div className={styles.header_RWD}>
              {/* logo */}
              <div className={styles.header_logo}>
                <img src={Logo} alt="header_logo" />
              </div>
              {/* RWD_icon */}
              <div className={styles.header_RWD_item}>
                <div className={styles.header_RWD_item_icon}>
                  <BsFillPersonFill style={{ fontSize: "30px" }} />
                </div>
                <div className={styles.header_RWD_item_icon}>
                  <AiOutlineShoppingCart style={{ fontSize: "30px" }} />
                </div>
                <div className={styles.header_RWD_item_icon} onClick={() => { hideMenu() }}>
                  <BiMenu style={{ fontSize: "30px" }} />
                </div>
              </div>
            </div>
            <hr />
            {/* content */}
            <nav className={scroll ? `${styles.scroll_nav}` : ""}>
              <div className={menu ? `${styles.header_content} ${styles.header_show_content}` : `${styles.header_content}`} onClick={() => { hideMenu() }}>
                <div className={styles.header_mask} onClick={() => { hideMenu() }}></div>
                {/* header_list */}
                <div className={styles.header_list}>
                  <div className={styles.header_item}>
                    {/* active */}
                    <NavLink to="/" className={activeLink}>
                      <div className={styles.active}>
                        <img src={Active} alt="active" />
                      </div>
                      <p>首頁</p>
                    </NavLink>
                  </div>
                  <div className={styles.header_item}>
                    {/* active */}
                    <NavLink to="/products" className={activeLink}>
                      <div className={styles.active}>
                        <img src={Active} alt="active" />
                      </div>
                      <p>產品專區</p>
                    </NavLink>
                  </div>
                  <div className={styles.header_item}>
                    <NavLink to="/news" className={activeLink}>
                      {/* active */}
                      <div className={styles.active}>
                        <img src={Active} alt="active" />
                      </div>
                      <p>關於我</p>
                    </NavLink >
                  </div>
                  <div className={styles.header_item}>
                    {/* active */}
                    <NavLink to="/products" className={activeLink}>
                      <div className={styles.active}>
                        <img src={Active} alt="active" />
                      </div>
                      <p>商品管理</p>
                    </NavLink>
                  </div>
                </div>
                {/* header_member */}
                <div className={styles.header_member}>
                  <div className={styles.header_member_item}>
                    <BsFillPersonFill style={{ fontSize: "30px", color: "#fff" }} />
                    <ShowOnLogout>
                      <NavLink to="/login"><span>Login</span></NavLink>
                    </ShowOnLogout>
                    <ShowOnLogin>
                      <NavLink to="/login"><span>
                      HI  {displayName}
                        &ensp;/&ensp;
                      </span></NavLink>
                    </ShowOnLogin>
                   
                    <ShowOnLogin>
                      <NavLink to="/" onClick={()=>logoutUser()}><span>Logout</span></NavLink>

                    </ShowOnLogin>
                  </div>
                  <div className={styles.header_member_item}>
                    <AiOutlineShoppingCart style={{ fontSize: "30px", color: "#fff" }} />
                    <NavLink to="/cart"><span>Cart</span></NavLink>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </header>
    </>
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