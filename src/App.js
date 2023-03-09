import { BrowserRouter, Route, Routes } from "react-router-dom";
// component
import Header from "./components/header/Header";
import Tool from "./components/tool/Tool"
import Footer from "./components/footer/Footer";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

import "slick-carousel/slick/slick"


// pages
import { Home, Login, Products, News ,Register} from "./pages";

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

      </Routes>
      <Tool />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
