import React from "react";
import frat from "../../assets/Images/home/Apple-new-firat-image.jpg";
function NewSection() {
  return (
    <section className="new container-fluid">
      <div className="sec-new col-12">
        <div className="div-1 text-center">
          <div className="ipad-new">
            <h1 className="fs-1 fw-600">ipad mini</h1>
          </div>
          <div className="hello">
            <p>Hello,Apple Intelligence.</p>
          </div>
          <div className="learn-buy">
            <ul className="button list-unstyled d-inline-flex">
              <li className="">
                <a href="#" className="link-button">
                  Learn more
                </a>
              </li>
              <li className="">
                <a href="#" className="link-buttonBuy">
                  Buy
                </a>
              </li>
            </ul>
          </div>
          <div className="img">
            <img src={frat} height="350px" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default NewSection;
