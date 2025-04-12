import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Iphone() {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    fetch("http://localhost:2040/iphones")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        let singleProduct = data.products;
        setProduct(singleProduct);
      });
  }, []);
  console.log(product);
  return (
    <div>
      <section className="internal-page-wrapper">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-12 mt-5 pt-5">
              <h1 className="font-weight-bold">
                <b>Iphone Page</b>
              </h1>
            </div>
          </div>

          {product?.map((singlephone, i) => {
            return (
              <div className="row justify-content-center text-center">
                <div
                  className={`clo-sm-12 col-md-6 pt-5 mt-5 order-${
                    i % 2 === 0 ? "1" : "2"
                  }`}
                >
                  <div className="product-name">{singlephone.product_name}</div>

                  <div className="produt-price">
                    {singlephone.Starting_price}
                  </div>
                  <div className="product-brif">
                    {singlephone.Product_brief_description}
                  </div>
                  <div className="product-desc">
                    {singlephone.Product_description}
                  </div>

                  <div className="Product-link">
                    <Link to={"/iphone/" + singlephone.product_id}>
                      learn more <i className="fas fa-angle-right"></i>
                    </Link>
                  </div>
                </div>

                <div
                  className={`clo-sm-12 col-md-6 order-${
                    i % 2 === 0 ? "2" : "1"
                  }`}
                >
                  <div className="Product-img">
                    <img src={singlephone.Product_img} alt="" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default Iphone;
