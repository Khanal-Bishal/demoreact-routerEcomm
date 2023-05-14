import React from "react";
import { Link } from "react-router-dom";

const SingleProd = ({ product }) => {
  return (
    <div className="col-lg-4" key={product.id}>
      <div className="card">
        <div className="img-wrap">
          <img src={product.image} alt="prod image" />
        </div>

        <div className="card-body">
          <h5 className="card-title">{product.name}</h5>
          <p className="card-text">{product.details}</p>
          <div className="d-flex justify-content-between align-items-center">
            <span>
              PRICE <strong className="price"> {product.price}</strong>
            </span>
            <Link
              to={`/product/${product.id}`}
              className="btn btn-danger btn-sm"
            >
              Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProd;
