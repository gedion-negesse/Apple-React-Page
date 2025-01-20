import React from "react";

function FourthSection() {
  return (
    <section className="four-1 container-fluid">
      <div className="sec-4 row">
        <div className="four aipod-2 text-center col-12 col-md">
          <div className="airpod-2">
            <h1>AirPods Pro 2</h1>
          </div>
          <div>
            <p>
              Hearing Aids and Hearing Test Feauters Coming <br />
              with a free software update this fall. <sup>4</sup>
            </p>
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
        </div>

        <div className="macbook text-center pt-5 text-black col-12 col-md">
          <div className="macair">
            <div>
              <h1>MacBookAir</h1>
            </div>

            <div>
              <p>Lean.Mean.M3 machine.</p>
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
          </div>
        </div>
      </div>
    </section>
  );
}

export default FourthSection;
