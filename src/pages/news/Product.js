import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import useFetchCollection from "../../customHooks/useFetchCollection";

import {
  GET_PRICE_RANGE,
  selectNews,
  STORE_NEWS,
} from "../../redux/slice/newsSlice";

import styles from "./Product.module.scss";
import ProductFilter from "../../components/product/productFilter/ProductFilter";
import ProductList from "./productList/ProductList";
import spinnerImg from "../../assets/spinner.jpg";
import { FaCogs } from "react-icons/fa";

const Product = () => {
  const { data, isLoading } = useFetchCollection("news");
  const [showFilter, setShowFilter] = useState(false);
  const products = useSelector(selectNews);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      STORE_NEWS({
        news: data,
      })
    );

    dispatch(
      GET_PRICE_RANGE({
        news: data,
      })
    );
  }, [dispatch, data]);

  const toggleFilter = () => {
    setShowFilter(!showFilter);
  };

  return (
    <section>
      <div className={`container ${styles.product}`}>
        <aside
          className={
            showFilter ? `${styles.filter} ${styles.show}` : `${styles.filter}`
          }
        >
          {isLoading ? null : <ProductFilter />}
        </aside>
        <div className={styles.content}>
          {isLoading ? (
            <img
              src={spinnerImg}
              alt="Loading.."
              style={{ width: "50px" }}
              className="--center-all"
            />
          ) : (
            <>
            123
            <ProductList products={products} />
            </>
          )}
          <div className={styles.icon} onClick={toggleFilter}>
            <FaCogs size={20} color="orangered" />
            <p>
              <b>{showFilter ? "Hide Filter" : "Show Filter"}</b>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
