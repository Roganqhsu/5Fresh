import React, { useEffect, useState } from 'react';
import styles from "./Slider.module.scss";
// import SliderData from "./SliderData.js";
import Slider1 from "../../assets/slider/slider1.jpg";
import Slider2 from "../../assets/slider/slider2.jpg";
import Slider3 from "../../assets/slider/slider3.jpg";
import Slider4 from "../../assets/slider/slider1.jpg";

import logo_horizontal_green from "../../assets/logo/1x/logo_horizontal_green.png"
// icon
import { GrFormPrevious, GrFormNext } from "react-icons/gr"
const Slider = () => {
    const data = ["0", "1", "2", "3"]
    const [currentPage, setCurrentPage] = useState(0)
    const page = data.length
    const next = () => {
        setCurrentPage(currentPage === page - 1 ? 0 : currentPage + 1)
        console.log(currentPage);
        console.log("ok");
    }
    const prev = () => {
        setCurrentPage(currentPage === 0 ? page - 1 : currentPage - 1)
        console.log(currentPage);
        console.log("ok");

    }
    const ok=()=>{
        console.log("ok");
    }
    const autoPlay = false;
    let sliderInterval
    useEffect(
        () => {
            setCurrentPage(0)
        }, []
    )
    useEffect(
        () => {
            if (autoPlay) {
                const auto = () => {
                    sliderInterval = setInterval(next, 7000)
                };
                auto()
            }
            return () => clearInterval(sliderInterval)
        }, [currentPage, autoPlay, sliderInterval]
    )
    const SliderData = [
        { img: Slider1 },
        { img: Slider2 },
        { img: Slider3 },
        { img: Slider4 }
    ]
    return (
        <div className={styles.slider}>
            <div className={styles.slider_prev}>
                <GrFormPrevious style={{ fontSize: "30px" }} onClick={()=>{prev()}} />
            </div>
            <div className={styles.slider_next} onClick={()=>(next()) }>
                <GrFormNext style={{ fontSize: "30px" }} />
            </div>
            {SliderData.map((value, index) => {
                return (
                    <div key={index}
                        className={index === currentPage ?
                            `${styles.slider_item} ${styles.slider_item_show}`
                            : `${styles.slider_item}`}>
                        <img
                            src={value.img}
                        />
                    </div>
                )
            })}
            {/* <div className={styles.slider_item}>
                Slider
            </div> */}
        </div>
    )
}

export default Slider