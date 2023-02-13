import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// component
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer"
// pages
import { Home, Login, Products, News } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/products" element={<Products />} />
        <Route path="/News" element={<Login />} />

      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
