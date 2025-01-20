import React from "react";

function FirstSection() {
  return (
    <section className="first container-fluid">
      <div className="sec-1 text-center pt-5 col-12">
        <div className="div-2">
          <div className="ipro-16">
            <h1 className="text-white">iphone 16 Pro</h1>
          </div>
          <div className="hello-2 text-white">
            <h3>Hello,Apple Intelligence.</h3>
          </div>
          <div className="button">
            <ul>
              <li>
                <a href="#" className="link-button">
                  learn more
                </a>
              </li>
              <li>
                <a href="#" className="link-buttonBuy">
                  Buy
                </a>
              </li>
            </ul>
          </div>
          <div className="applint text-white">
            <p>
              Apple Inteligence Coming this fall <sup>1</sup>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FirstSection;
