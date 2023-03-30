import { addDoc, collection, doc, setDoc, Timestamp } from "firebase/firestore";
import {
  deleteObject,
  getDownloadURL,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { db, storage } from "../../../firebase/config";
import Card from "../../card/Card";
import Loader from "../../loader/Loader";
import styles from "./AddNews.module.scss";
import { selectNews } from "../../../redux/slice/newsSlice";

const categories = [
  { id: 1, name: "公休公告" },
  { id: 2, name: "檔期優惠" },
  { id: 3, name: "推廣活動" },
  { id: 4, name: "其他" },
];

const initialState = {
  name: "",
  imageURL: "",
  price: 0,
  category: "",
  actionDate:"",
  actionTime:"",
  endDAte:"",
  endTime:"",
  brand: "",
  desc: "",
};

const AddNews = () => {
  const { id } = useParams();
  const sliceNews = useSelector(selectNews);
  const newsEdit = sliceNews.find((item) => item.id === id);
console.log(newsEdit);
  // const newsEdit = news.find((item) => item.id === id);

  const [news, setNews] = useState(() => {
    const newState = detectForm(id, { ...initialState }, newsEdit);
    return newState;
  });

  const [uploadProgress, setUploadProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  function detectForm(id, f1, f2) {
    if (id === "ADD") {
      return f1;
    }
    return f2;
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNews({ ...news, [name]: value });
    console.log(news);

  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    // console.log(file);

    const storageRef = ref(storage, `5Fresh/news/${Date.now()}${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setUploadProgress(progress);
      },
      (error) => {
        toast.error(error.message);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setNews({ ...news, imageURL: downloadURL });
          toast.success("Image uploaded successfully.");
        });
      }
    );
  };

  const addNews = (e) => {
    e.preventDefault();
    // console.log(news);
    setIsLoading(true);

    try {
      const docRef = addDoc(collection(db, "news"), {
        name: news.name,
        imageURL: news.imageURL,
        // price: Number(news.price),
        category: news.category,
        brand: news.brand,
        desc: news.desc,
        actionDate:news.actionDate,
        actionTime:news.actionTime,
        endDAte:news.endDAte,
        endTime:news.endTime,
        createdAt: Timestamp.now().toDate(),
      });
      setIsLoading(false);
      setUploadProgress(0);
      setNews({ ...initialState });
      toast.success("Product uploaded successfully.");
      navigate("/admin/all-news");
    } catch (error) {
      setIsLoading(false);
      toast.error(error.message);
    }
  };
  const editNews = (e) => {
    e.preventDefault();
    setIsLoading(true);
    // console.log(e);
    if (news.imageURL !== newsEdit.imageURL) {
      const storageRef = ref(storage, newsEdit.imageURL);
      deleteObject(storageRef);
    }
    try {
      setDoc(doc(db, "news", id), {
        name: news.name,
        imageURL: news.imageURL,
        price: Number(news.price),
        category: news.category,
        brand: news.brand,
        desc: news.desc,
        actionDate:news.actionDate,
        actionTime:news.actionTime,
        endDAte:news.endDAte,
        endTime:news.endTime,
        createdAt: newsEdit.createdAt,
        editedAt: Timestamp.now().toDate(),
      });
      console.log("ok");
      setIsLoading(false);
      navigate("/admin/all-news");
    } catch (error) {
      setIsLoading(false);
      toast.error(error.message);
    }
  };
  return (
    <>
      {isLoading && <Loader />}
      <div className={styles.news}>
        <h2>{detectForm(id, "Add News", "Edit News")}</h2>
        <Card cardClass={styles.card}>
          <form onSubmit={detectForm(id, addNews, editNews)}>
            <label>Product name:</label>
            <input
              type="text"
              placeholder="Product name"
              required
              name="name"
              value={news.name}
              onChange={(e) => handleInputChange(e)}
            />

            <label>Product image:</label>
            <Card cardClass={styles.group}>
              {uploadProgress === 0 ? null : (
                <div className={styles.progress}>
                  <div
                    className={styles["progress-bar"]}
                    style={{ width: `${uploadProgress}%` }}
                  >
                    {uploadProgress < 100
                      ? `Uploading ${uploadProgress}`
                      : `Upload Complete ${uploadProgress}%`}
                  </div>
                </div>
              )}

              <input
                type="file"
                accept="image/*"
                placeholder="Product Image"
                name="image"
                onChange={(e) => handleImageChange(e)}
              />

              {news.imageURL === "" ? null : (
                <input
                  type="text"
                  // required
                  placeholder="Image URL"
                  name="imageURL"
                  value={news.imageURL}
                  disabled
                />
              )}
            </Card>

            <label>Date</label>
            開始日期:
            &emsp;

            <input
              type="date"
              placeholder="Activity date"
              // required
              name="actionDate"
              // value={}
              onChange={(e) => handleInputChange(e)}
            />
            &emsp;

            <input
              type="time"
              placeholder="Activity time"
              // required
              name="actionTime"
              // value={}
              onChange={(e) => handleInputChange(e)}
            />
            <br/>
            ~
            <br/>

            結束日期:
            &emsp;

            <input
              type="date"
              placeholder="Activity Date/Time"
              // required
              name="endDate"
              // value={}
              onChange={(e) => handleInputChange(e)}
            />
            &emsp;
            <input
              type="time"
              placeholder="Activity time"
              // required
              name="endTime"
              // value={}
              onChange={(e) => handleInputChange(e)}
            />
            <label>公告種類</label>
            <select
              required
              name="category"
              value={news.category}
              onChange={(e) => handleInputChange(e)}
            >
              <option value="" disabled>
                -- choose news category --
              </option>
              {categories.map((cat) => {
                return (
                  <option key={cat.id} value={cat.name}>
                    {cat.name}
                  </option>
                );
              })}
            </select>

            <label>Product Company/Brand:</label>
            <input
              type="text"
              placeholder="Product brand"
              required
              name="brand"
              value={news.brand}
              onChange={(e) => handleInputChange(e)}
            />

            <label>Product Description</label>
            <textarea
              name="desc"
              required
              value={news.desc}
              onChange={(e) => handleInputChange(e)}
              cols="30"
              rows="10"
            ></textarea>

            <button className="--btn --btn-primary">
              {detectForm(id, "Save Product", "Edit Product")}
            </button>
          </form>
        </Card>
      </div>
    </>
  );
};

export default AddNews;
