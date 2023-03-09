import styles from "./Home_product.module.scss"
import { Title } from "../../../../components/normal_components/Normal_components"
import Home_product_Data from "./Home_product_data"
import { AiOutlineShoppingCart } from "react-icons/ai"
const Home_product = () => {
    return (
        <div className={`container ${styles.home_product} `}>
            {/* title */}
            <div className={styles.home_product_title}>
                <Title english="Shopping" chinese="熱門商品" />
            </div>
            <div className={styles.clear}></div>
            {/* home_product_content */}
            <div className={styles.home_product_content_center}>
                <div className={styles.home_product_content}>
                    {/* item */}
                    {Home_product_Data.map((data, index) => {
                        const { img, name, price, unit } = data
                        return (<>
                            {index < 5 && (
                                <div className={styles.home_product_item}>
                                    <div className={styles.home_product_img}>
                                        <img src={img} />
                                        {/* circle */}
                                        <div className={styles.home_product_circle}>
                                            <div className={styles.home_product_icon}>
                                                <AiOutlineShoppingCart />
                                            </div>
                                            <div className={styles.home_product_circle_text}>
                                                我要購買
                                            </div>
                                        </div>
                                    </div>
                                    {/* text */}
                                    <div className={styles.home_product_left}>
                                        {name}
                                    </div>
                                    <div className={styles.home_product_right}>
                                        {price}/{unit}
                                    </div>
                                    <div className={styles.clear}></div>
                                </div>
                            )}
                        </>)
                    })}

                </div>
            </div>
        </div>
    )
}

export default Home_product