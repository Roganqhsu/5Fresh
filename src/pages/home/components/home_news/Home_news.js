import React from 'react'
import styles from "./Home_news.module.scss"
import { MyButton, Title } from '../../../../components/normal_components/Normal_components';
import { Home_news_data } from './Home_news_data';
import {GrPrevious,GrNext} from "react-icons/gr"
import { Component } from "react";
import Slider from "react-slick";
class CustomSlide extends Component {
    render() {
      const { img,title,time,introduce, ...props } = this.props;
        // const {img}=value
      return (
        <div {...props}>
          <div className={styles.home_news_item}>
                                    <div className={styles.home_news_img}>
                                        {/* img */}
                                        <img src={img} />
                                        {/* circle */}
                                        <div className={styles.home_news_circle}>
                                            <div className={styles.home_news_circle_text}>
                                                MORE
                                            </div>
                                        </div>

                                    </div>
                                    {/* introduce */}
                                    <div className={styles.home_news_introduce}>
                                        <div className={styles.home_news_time}>
                                            {time}
                                        </div>
                                        <div className={styles.home_news_introduce_title}>
                                            {title}
                                        </div>
                                        <hr></hr>
                                        <div className={styles.home_news_text}>
                                            {introduce}
                                        </div>
                                    </div>
                                </div>
        </div>
      );
    }
  }

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={styles.home_news_prev}
            style={{ ...style }}
            onClick={onClick}
        >
        <GrPrevious />
        </div>

    );
}
function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={styles.home_news_next}
            style={{ ...style }}
            onClick={onClick}
        >
        <GrNext />
        </div>

    );
}

export default class MultipleItems extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 4,
            nextArrow:<SampleNextArrow className={styles.home_news_next} />,
            prevArrow: <SamplePrevArrow className={styles.home_news_prev} />,
            responsive: [
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                  }
                },
                {
                    breakpoint: 991,
                    settings: {
                      slidesToShow: 2,
                      slidesToScroll: 2,
                      initialSlide: 2
                    }
                  },
                {
                  breakpoint: 600,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                  }
                },
                {
                  breakpoint: 480,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }
                }
              ]
        };
        return (
            <div>
                <div className={`${styles.home_news} container`}>
                    <div className={styles.home_news_title}>
                        <Title english="news" chinese="最新消息" />
                    </div>
                    <div className={styles.clear}></div>
                    <div className={styles.home_news_content}>

                    <Slider {...settings}>
                     

                        {Home_news_data.map((value, index) => {
                            const { img, title, time, introduce } = value
                            return (
                                
                                    <CustomSlide img={img} title={title} time={time} introduce={introduce} />
                                // <div className={styles.home_news_item}>
                                //     <div className={styles.img}>
                                //         {/* img */}
                                //         <img src={img} />
                                //         {/* circle */}
                                //         <div className={styles.home_news_circle}>
                                //             <div className={styles.home_news_circle_text}>
                                //                 MORE
                                //             </div>
                                //         </div>

                                //     </div>
                                //     {/* introduce */}
                                //     <div className={styles.home_news_introduce}>
                                //         <div className={styles.home_news_time}>
                                //             {time}
                                //         </div>
                                //         <div className={styles.home_news_title}>
                                //             {title}
                                //         </div>
                                //         <div className={styles.home_news_text}>
                                //             {introduce}
                                //         </div>
                                //     </div>
                                // </div>
                            )
                        })
                    }

                    </Slider>
                    <div className={styles.home_news_more_button}>
                        <MyButton text="MORE" />
                    </div>
              </div>
                    
                    </div>
                </div >
        );
    }
}

// const Home_news = () => {
    // return (
    //     <div className={`${styles.home_news} container`}>
    //         <div className={styles.home_news_title}>
    //             <Title english="news" chinese="最新消息" />
    //         </div>
    //         <div className={styles.clear}></div>
    //         <div className={styles.home_news_content}>

                // {/* item */}
                // {
                // Home_news_data.map((value, index) => {
                //     const { img, title, time, introduce } = value
                //     return (
                //         <div className={styles.home_news_item}>
                //             <div className={styles.img}>
                //                 {/* img */}
                //                 <img src={img} />
                //                 {/* circle */}
                //                 <div className={styles.home_news_circle}>
                //                     <div className={styles.home_news_circle_text}>
                //                         MORE
                //                     </div>
                //                 </div>

                //             </div>
                //             {/* introduce */}
                //             <div className={styles.home_news_introduce}>
                //                 <div className={styles.home_news_time}>
                //                     {time}
                //                 </div>
                //                 <div className={styles.home_news_title}>
                //                     {title}
                //                 </div>
                //                 <div className={styles.home_news_text}>
                //                     {introduce}
                //                 </div>
                //             </div>
                //         </div>
                //     )
                // })
                // }

            
    // )
// }

// export default Home_news