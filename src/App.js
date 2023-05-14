import React from "react";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import MainLayout from "./pages/MainLayout";

import Home from "./pages/Home";
import About from "./pages/About";
import Post from "./pages/Post";
import Product from "./pages/Product";
import SingleProduct from "./pages/SingleProduct";
import Error from "./pages/Error";
import "./App.css";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/post" element={<Post />} />
          <Route path="/product" element={<Product />} />
          <Route path="/product/:productId" element={<SingleProduct />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
