import React from 'react'
import styles from "./Tool.module.scss"
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BiArrowToTop } from 'react-icons/bi';
import { NavLink } from 'react-router-dom';
const Tool = () => {
    const scrollTop =()=>{
        window.scrollTo(0,0)
        console.log("ok");
    }
    return (
        <div className={styles.header_tool}>
            <div className={styles.header_tool_cart}>
                <NavLink to="/login">
                    <AiOutlineShoppingCart style={{ fontSize: "30px" }} />
                </NavLink>
            </div>

            <div className={styles.header_tool_toTop} onClick={()=>{scrollTop()}}>
                <BiArrowToTop style={{ fontSize: "30px" }} />
            </div>
        </div>
    )
}

export default Tool