import { deleteDoc, doc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { db, storage } from "../../../firebase/config";
import styles from "./ViewProducts.module.scss";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import Loader from "../../loader/Loader";
import { deleteObject, ref } from "firebase/storage";
import Notiflix from "notiflix";
import { useDispatch, useSelector } from "react-redux";
import {
  selectNews,
  STORE_NEWS,
} from "../../../redux/slice/newsSlice";
import useFetchCollection from "../../../customHooks/useFetchCollection";
import {
  FILTER_BY_SEARCH,
  selectFilteredProducts,
} from "../../../redux/slice/filterSlice";
import Search from "../../search/Search";
import Pagination from "../../pagination/Pagination";

const ViewNews = () => {
  const [search, setSearch] = useState("");
  // 撈Firebase集合資料
  const { data, isLoading } = useFetchCollection("news");
  const news = useSelector(selectNews);
  // const filteredProducts = useSelector(selectFilteredProducts);

  // Pagination states
  // const [currentPage, setCurrentPage] = useState(1);
  // const [productsPerPage, setProductsPerPage] = useState(10);
  // Get Current Products
  // const indexOfLastProduct = currentPage * productsPerPage;
  // const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  // const currentProducts = filteredProducts.slice(
  //   indexOfFirstProduct,
  //   indexOfLastProduct
  // );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      STORE_NEWS({
        news: data,
      })
    );
  }, [dispatch, data]);

  // useEffect(() => {
  //   dispatch(FILTER_BY_SEARCH({ news, search }));
  // }, [dispatch, news, search]);

  const confirmDelete = (id, imageURL) => {
    Notiflix.Confirm.show(
      "Delete Product!!!",
      "You are about to delete this product",
      "Delete",
      "Cancel",
      function okCb() {
        deleteProduct(id, imageURL);
      },
      function cancelCb() {
        console.log("Delete Canceled");
      },
      {
        width: "320px",
        borderRadius: "3px",
        titleColor: "orangered",
        okButtonBackground: "orangered",
        cssAnimationStyle: "zoom",
      }
    );
  };

  const deleteProduct = async (id, imageURL) => {
    try {
      await deleteDoc(doc(db, "news", id));

      const storageRef = ref(storage, imageURL);
      await deleteObject(storageRef);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      {isLoading && <Loader />}
      <div className={styles.table}>
        <h2>All Products</h2>

        <div className={styles.search}>
          <p>
            <b>{news.length}</b> news found
          </p>
          <Search value={search} onChange={(e) => setSearch(e.target.value)} />
        </div>

        {news.length === 0 ? (
          <p>No product found.</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>s/n</th>
                <th>Image</th>
                <th>Name</th>
                <th>Category</th>
                <th>Price</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {news.map((news, index) => {
                const { id, name, actionDate,
                actionTime,
                endDAte,
                endTime, imageURL, category } = news;
                console.log(actionDate);
                return (
                  <tr key={id}>
                    <td>{index + 1}</td>
                    <td>
                      <img
                        src={imageURL}
                        alt={name}
                        style={{ width: "100px" }}
                      />
                    </td>
                    <td>{name}</td>
                    <td>{category}</td>
                    <td>{`$${actionDate}`}</td>
                    <td className={styles.icons}>
                      <Link to={`/admin/add-news/${id}`}>
                        <FaEdit size={20} color="green" />
                      </Link>
                      &nbsp;
                      <FaTrashAlt
                        size={18}
                        color="red"
                        onClick={() => confirmDelete(id, imageURL)}
                      />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
        {/* <Pagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          productsPerPage={productsPerPage}
          totalProducts={filteredProducts.length}
        /> */}
      </div>
    </>
  );
};

export default ViewNews;
