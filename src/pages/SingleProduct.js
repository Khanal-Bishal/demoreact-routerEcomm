import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import PRODUCTS from "../data";

const SingleProduct = () => {
  const navigate = useNavigate();
  const { productId } = useParams();
  console.log(typeof productId);
  const singleProduct = PRODUCTS.find((product) => {
    return product.id === parseInt(productId);
  });
  const { name, price, image, details } = singleProduct;
  return (
    <main>
      <div className="pg-header">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <h1>{name}</h1>
            </div>

            <div className="col-lg-5">
              <nav className="breadcrumb">
                <ol className="breadcrumb justify-content-end">
                  <li className="breadcrumb-item">
                    <Link to="/">Home</Link>
                  </li>
                  <li className="breadcrumb-item">
                    <Link to="/product">Product</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    {name}
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <div className="container content">
        <div className="row">
          <div className="col-lg-5 singleImage card">
            <img src={image} alt="" />
          </div>
          <div className="col-lg-7">
            <h2>{name}</h2>
            <p className="price">
              <strong>{price}</strong>
            </p>
            <p>
              {details}
              {details}
              {details}
              {details}
              {details}
              {details}
            </p>
            <br />
            <button
              className="btn btn-danger btm-sm"
              onClick={() => navigate(-1)}
            >
              Back
            </button>
            &nbsp;
            <button
              className="btn btn-danger btm-sm"
              onClick={() => navigate("/product")}
            >
              NAVIGATE TO PRODUCTS
            </button>
            &nbsp;
            <Link to="/product" className="btn btn-danger btm-sm">
              Product
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SingleProduct;
