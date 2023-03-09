import React, { useEffect, useState } from 'react';
import styles from "./Slider.module.scss";
import SliderData from "./SliderData.js";
import logo_horizontal_green from "../../assets/logo/1x/logo_horizontal_green.png"
// icon
import { GrFormPrevious, GrFormNext } from "react-icons/gr"
const Slider = () => {
    console.log(SliderData[0].img);
    const data = ["0", "1", "2", "3"]
    const [currentPage, setCurrentPage] = useState(0)
    const page = data.length
    const next = () => {
        setCurrentPage(currentPage === page - 1 ? 0 : currentPage + 1)
        console.log(currentPage);
    }
    const prev = () => {
        setCurrentPage(currentPage === 0 ? page - 1 : currentPage - 1)
        console.log(currentPage);
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
        }, [currentPage,autoPlay,sliderInterval]
    )
    return (
        <div className={styles.slider}>
            <div className={styles.slider_prev}>
                <GrFormPrevious style={{ fontSize: "30px" }} onClick={() => { prev() }} />
            </div>
            <div className={styles.slider_next} onClick={() => { next() }}>
                <GrFormNext style={{ fontSize: "30px" }} />
            </div>
            {SliderData.map((value, index) => {
                return (
                    <div key={index} className={index === currentPage ? `${styles.slider_item} ${styles.slider_item_show}` : `${styles.slider_item}`}>
                        <img src={value.img} />
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