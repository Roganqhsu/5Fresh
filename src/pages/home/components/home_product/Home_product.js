import styles from "./Home_product.module.scss"
// router
import { useNavigate } from "react-router-dom"
// components
import { Title } from "../../../../components/normal_components/Normal_components"
import useFetchCollection from "../../../../customHooks/useFetchCollection"
// redux
import { AiOutlineShoppingCart } from "react-icons/ai"
const Home_product = () => {
    // data
    const { data, isLoading } = useFetchCollection("products");
    // router
    const navigate =useNavigate()

    const product = (id)=>{
        navigate(`/product-details/${id}`)
    }
    return (
        <div className={`container ${styles.home_product} `}>
            {/* title */}
            {/* <button onClick={()={
                
            }}>
                test
            </button> */}
            <div className={styles.home_product_title}>
                <Title english="Shop" chinese="熱門商品" />
            </div>
            <div className={styles.clear}></div>
            {/* home_product_content */}
            <div className={styles.home_product_content_center}>
                <div className={styles.home_product_content}>
                    {/* item */}
                    {data.map((data, index) => {
                        const { imageURL, name, price,id } = data
                        return (<>
                            {index < 5 && (
                                <div className={styles.home_product_item}
                                    onClick={()=>{
                                        product(id)
                                    }}
                                >
                                    <div className={styles.home_product_img}>
                                        <img src={imageURL} />
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
                                        {price}/一斤
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