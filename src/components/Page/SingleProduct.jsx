import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const SingleProduct = () => {
  const { ID } = useParams();

  console.log(useParams());
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch("http://localhost:2040/iphones")
      .then((res) => res.json())
      .then((data) => {
        const asinglePhone = data.products;

        let specificPhone = asinglePhone.filter(
          (product) => product.product_id == ID
        );
        setProduct(specificPhone);
      });
  }, [ID]);
  console.log(product);
  return (
    <div>
      <section className="internal-page-wrapper">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-12 mt-5 pt-5">
              <h1 className="font-weight-bold">
                <b> SingleProduct Page</b>
              </h1>
            </div>

            {product?.map((iphone, i) => {
              return (
                <div
                  key={iphone.product_id}
                  className="row justify-content-center text-center"
                >
                  <div
                    className={`col-12 mt-5 pt-5 pt-5 mt-5 my-auto order-${
                      i % 2 === 0 ? "1" : "2"
                    }`}
                  >
                    <div className="product-name">{iphone.product_name}</div>
                    <div className="product-brief">
                      {iphone.Product_brief_description}
                    </div>
                    <div className="starting-price-">
                      {iphone.Starting_price}
                    </div>
                    <div className="Price-range">{iphone.Price_range}</div>
                    <div className="Product-description">
                      {iphone.Product_description}
                    </div>
                  </div>
                  <div
                    className={`col-12 mt-5 pt-5  order-${
                      i % 2 === 0 ? "2" : "1"
                    }`}
                  >
                    <div className="Product-img">
                      <img src={iphone.Product_img} alt="" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default SingleProduct;
