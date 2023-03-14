import { BrowserRouter, Route, Routes } from "react-router-dom";
// component
import Header from "./components/header/Header";
import Tool from "./components/tool/Tool"
import Footer from "./components/footer/Footer";
// pages
import {
  Home,
  Login, 
  Products, 
  News, 
  Register,
  Admin,
  Cart
} from "./pages";
// order
import OrderHistory from "./pages/orderHistory/OrderHistory"
import OrderDetails from "./pages/orderDetails/OrderDetails";
import ReviewProducts from "./components/reviewProducts/ReviewProducts";
// product
import ProductDetails from "./components/product/productDetails/ProductDetails";
// admin
import AdminOnlyRoute from "./components/adminOnlyRoute/AdminOnlyRoute"
// checkout
import CheckoutDetails from "./pages/checkout/CheckoutDetails";
import Checkout from "./pages/checkout/Checkout";
import CheckoutSuccess from "./pages/checkout/CheckoutSuccess";
// styles
import "slick-carousel/slick/slick"
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/products" element={<Products />} />
        <Route path="/News" element={<Login />} />

        {/* auth */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* admin */}
        <Route
          path="/admin/*"
          element={
            <AdminOnlyRoute>
              <Admin />
            </AdminOnlyRoute>
          }
        />
        {/* cart */}
        <Route path="/product-details/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        
           {/* checkout */}
           <Route path="/checkout-details" element={<CheckoutDetails />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/checkout-success" element={<CheckoutSuccess />} />
          

          {/* order */}
          <Route path="/order-history" element={<OrderHistory />} />
          <Route path="/order-details/:id" element={<OrderDetails />} />
          <Route path="/review-product/:id" element={<ReviewProducts />} />
          {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
      <Tool />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
