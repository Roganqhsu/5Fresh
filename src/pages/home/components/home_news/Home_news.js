import React, { Component ,memo} from 'react'
import Slider from "react-slick";
// 
import {useMemo} from "react"
// router
import { NavLink } from 'react-router-dom';
// styles
import styles from "./Home_news.module.scss"
// data
import { Home_news_data } from './Home_news_data';
// component
import { MyButton, Title } from '../../../../components/normal_components/Normal_components';
// icons
import {GrPrevious,GrNext} from "react-icons/gr"

class CustomSlide extends Component {
  render() {
    
      const { img,name,Date,id, ...props } = this.props;
        console.log(id);
      return (
        <div {...props}>
          <NavLink to={`/News-details/${this.props.id}`}>

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
                                            {this.props.Date}
                                        </div>
                                        <div className={styles.home_news_introduce_title}>
                                            {this.props.name}
                                        </div>
                                        <hr></hr>
                                        <div className={styles.home_news_text}>
                                            {this.props.desc}
                                        </div>
                                    </div>
                                </div>
          </NavLink>

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
  state={
    apple:4
  }
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      // initialSlide:0,
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
        const newsData=this.props.data
        // const test=this.props.test
        // console.log(test);
        // console.log(Home_news_data)
        // console.log(newsTest);
        
        return (
          <>
       
            <div>
               <div className={`${styles.home_news} container`}>
                   <div className={styles.home_news_title}>
                       <Title english="News" chinese="最新消息" />
                    </div>
                   <div className={styles.clear}></div>
                   <div className={styles.home_news_content}>

                    <Slider
                      {...settings}
                    >
                        {/* <div> */}
                         {newsData.map((value,index)=>{
                          return (
                            <div className={styles.home_news_hide}>
                              <CustomSlide 
                              key={value}
                              img={value.imageURL}
                              Date={value.actionDate}
                              name={value.name}
                              desc={value.desc}
                              id={value.id}
                              />
                        </div>
                          )
                        })
                        }
                    </Slider>
                    <div className={styles.home_news_more_button} onClick={()=>{test()}}>
                        <NavLink to="/news">
                          <MyButton text="MORE" />
                        </NavLink>
                    </div>
              </div>
                    
                    </div>
                </div >
        
          </>
        )
  }
    //     return (
    //         <div>
    //             <div className={`${styles.home_news} container`}>
    //                 <div className={styles.home_news_title}>
    //                     <Title english="News" chinese="最新消息" />
    //                 </div>
    //                 <div className={styles.clear}></div>
    //                 <div className={styles.home_news_content}>

    //                 <Slider {...settings}>
    //                   <div className={styles.home_news_hide}>
    //                    <div>
    //                     {newsData.map((value,index)=>{
    //                       const {name}=value
    //                       return (
    //                         <div key={value}>
    //                           {name}
    //                         </div>
    //                       )
    //                     })
    //                     }
    //                    </div>
    //                     </div>
    //                 </Slider>
    //                 <div className={styles.home_news_more_button} onClick={()=>{test()}}>
    //                     <NavLink to="/news">
    //                       <MyButton text="MORE" />
    //                     </NavLink>
    //                 </div>
    //           </div>
                    
    //                 </div>
    //             </div >
    //     );
    // }
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

// {
  // newsData.map((value, index) => {
    // const {
      // img,
      // imageURL
      // ,title,time}=value
    // const introduce="good"
      // const { imageURL, brand, price,id } = value
      // console.log(newsData);
      // console.log(introduce);
      // return (
        // <div>
        //   123
        // </div>
        // <CustomSlide  introduce={this.state.name} />
              // <CustomSlide 
              // key={value} 
              // id={id}
                // img={imageURL}
                //  title={time} 
                //  time={price} 
              // introduce={introduce} />
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
      // )
  // })
// }