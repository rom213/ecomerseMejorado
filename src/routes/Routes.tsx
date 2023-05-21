import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Header from "../components/home/header/Header";
import ProductDes from "../pages/DecriptionProducts/ProductDes";

const Router = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDes />} />
      </Routes>
    </div>
  );
};

export default Router;
