import React, { useState, useEffect } from 'react'
import styles from "./Header.module.scss";
import { NavLink, Link, useNavigate } from 'react-router-dom';

// firebase
import { auth } from "../../firebase/config";
import { onAuthStateChanged, signOut } from "firebase/auth";

// redux
import { useDispatch, useSelector } from "react-redux";
import {
  REMOVE_ACTIVE_USER,
  SET_ACTIVE_USER,
  selectEmail
} from "../../redux/slice/authSlice";
import {
  CALCULATE_TOTAL_QUANTITY,
  selectCartTotalQuantity,
} from "../../redux/slice/cartSlice";
// link
import { ShowOnLogin, ShowOnLogout } from "../hiddenLink/hiddenLink";
import { AdminOnlyLink } from "../../components/adminOnlyRoute/AdminOnlyRoute";
// img
import Active from "../../assets/index.png";
import Logo from "../../assets/logo/1x/logo_bg_none.png";
// icon
import { RxCross2 } from "react-icons/rx"
import { ImCross } from "react-icons/im"
import { BsFillPersonFill, BsShop } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaShoppingCart } from "react-icons/fa";
import { BiArrowToTop, BiMenu } from "react-icons/bi";
import { useSelect } from '@mui/base';
const activeLink = ({ isActive }) => (isActive ? `${styles.isActive}` : `${styles.noActive}`)
const Header = () => {
  // 本地端變數
  const [displayName, setdisplayName] = useState("");
  const [menu, setMenu] = useState(false);
  const [scroll, setScroll] = useState(false);
  // 引入變數
  const navigate = useNavigate("/")
  // redux
  const userEmail = useSelector(selectEmail)
  const dispatch = useDispatch();
  const ZoomNavBar = () => {
    if (window.scrollY > 80) {
      setScroll(true);
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
  const cartTotalQuantity = useSelector(selectCartTotalQuantity);

  // 登入狀態改變
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
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
  }, [dispatch, displayName]);
  // 登出
  const logoutUser = () => {
    navigate("/")
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
      <header className={scroll ? `${styles.scroll_header} ${styles.header}` : styles.header}>
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
                  <NavLink to="/admin/all-products">
                    <BsShop style={{ fontSize: "30px" }} />
                  </NavLink>
                </div>
                <div className={styles.header_RWD_item_icon}>
                  <NavLink to="/order-history">
                    <BsFillPersonFill style={{ fontSize: "30px" }} />
                  </NavLink>
                </div>

                <div className={styles.header_RWD_item_icon}>
                  <NavLink to="/cart">

                    <div className={styles.header_RWD_cart}>
                      <AiOutlineShoppingCart style={{ fontSize: "30px" }} />
                      <div className={styles.header_RWD_cart_number}>
                        {cartTotalQuantity}
                      </div>
                    </div>
                  </NavLink>
                </div>&ensp;
                <div className={styles.header_RWD_item_icon} onClick={() => { hideMenu() }}>
                  {menu ?
                    <RxCross2 style={{ fontSize: "30px" }} />
                    :
                    <BiMenu style={{ fontSize: "30px" }} />
                  }

                </div>
              </div>
            </div>
            <hr />
            {/* content */}
            <nav className={scroll ? `${styles.scroll_nav}` : ""}>
              <div className={menu ? `${styles.header_content} ${styles.header_show_content}` : `${styles.header_content}`} onClick={() => { hideMenu() }}>
                {/* mask */}
                {/* <div className={styles.header_mask} onClick={() => { hideMenu() }}></div> */}
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
                      <p>最新消息</p>
                    </NavLink >
                    {/* about me */}
                  </div>
                  <div className={styles.header_item}>

                    <NavLink to="/about" className={activeLink}>
                      <div className={styles.active}>
                        <img src={Active} alt="active" />
                      </div>
                      <p>關於我</p>
                    </NavLink>
                  </div>


                  <div className={styles.header_item}>
                    {/* active */}

                    <ShowOnLogin>
                      <div className={styles.header_item_none}
                        onClick={() => logoutUser()}>
                        {/* <span>Logout</span> */}
                        <div className={styles.active}>
                        </div>
                        <p>登出</p>
                      </div>

                    </ShowOnLogin>

                    
                    {/* 
                      
                     */}
                  </div>
                  <div className={styles.header_item}>

                      <NavLink to="/test" className={activeLink}>
                        <div className={styles.active}>
                          <img src={Active} alt="active" />
                        </div>
                        <p>測試用</p>
                      </NavLink>
                    </div>
                </div>
                {/* header_member */}
                <div className={styles.header_member}>
                  {/* manger */}
                  {userEmail === "x10215989@gmail.com" ?
                    <div className={styles.header_shop}>
                      {/* active */}
                      <NavLink to="/admin/all-products"  >
                        <BsShop className={styles.header_shop_icon} style={{
                          fontSize: "30px",
                          //  color: "#fff"
                        }} /> &ensp;

                        <AdminOnlyLink >
                          <span >商家管理</span>
                        </AdminOnlyLink>
                      </NavLink>
                    </div>
                    : ""}
                  {/* member */}
                  <div className={styles.header_member_item}>
                    <div className={styles.header_member_item_login}>

                      <ShowOnLogout>
                        <BsFillPersonFill
                          className={styles.header_member_item_icon}
                          style={{ fontSize: "30px" }}
                        />
                        <NavLink to="/login"><span
                          className={styles.header_member_item_text}
                        >Login</span>
                        </NavLink>
                      </ShowOnLogout>
                    </div>
                    <div className={styles.header_member_item_person}>

                      <ShowOnLogin>

                        <BsFillPersonFill
                          className={styles.header_member_item_icon}

                          style={{
                            fontSize: "30px",
                            // color: "#fff"
                          }} />
                        <NavLink to="/order-history">
                          <span
                            className={styles.header_member_item_text}

                          >
                            HI  {displayName}
                            &ensp;
                          </span>
                        </NavLink>
                      </ShowOnLogin>
                    </div>

                    <div className={
                      styles.header_member_item_logout
                    }>


                      <ShowOnLogin>
                        <a onClick={() => logoutUser()}>
                          <span style={{ color: 'white' }}>/&ensp;</span>

                          <span>Logout</span>
                          {/* <p>登出</p> */}
                        </a>

                      </ShowOnLogin>

                    </div>

                  </div>
                  {/* cart */}
                  <div className={styles.header_cart}>
                    <NavLink to="/cart">
                      <AiOutlineShoppingCart
                        className={styles.header_cart_icon}
                        style={{
                          fontSize: "30px",
                        }} />
                      <span className={styles.header_cart_cartTotalQuantity}>
                        {cartTotalQuantity}
                      </span>
                      &emsp;
                      <span className={styles.header_cart_text}>購物清單</span>
                    </NavLink>
                  </div>
                </div>

                <div className={styles.header_mask} onClick={() => { hideMenu() }}>

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