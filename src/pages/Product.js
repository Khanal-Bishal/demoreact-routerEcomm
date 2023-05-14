import React from "react";
import PRODUCTS from "../data";
import { Link } from "react-router-dom";
import SingleProd from "../components/SingleProd";
const Product = () => {
  return (
    <main>
      <div className="pg-header">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <h1>Products</h1>
            </div>
            <div className="col-lg-5">
              <nav>
                <ul className="breadcrumbs justify-content-end">
                  <li className="breadcrumb-item">
                    <Link to="/" className="text-danger">
                      Home
                    </Link>
                  </li>
                  <li className="breadcrumb-item active">Product</li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>

      <div className="container content">
        <div className="row products-row">
          {PRODUCTS.map((product) => {
            return <SingleProd product={product}></SingleProd>;
          })}
        </div>
      </div>
    </main>
  );
};

export default Product;
