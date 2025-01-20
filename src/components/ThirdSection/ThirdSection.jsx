import React from "react";
import hero from "../../assets/Images/icon/hero_logo_apple_watch_series_10__dla4dkv1wfue_medium.png";
function ThirdSection() {
  return (
    <section className="container-fluid">
      <div className="sec-3 row">
        <div className="third watch text-center pt-5 col-12 col-md">
          <div className="watch-logo">
            <img src={hero} width="200px" alt="watch logo" />
          </div>
          <div className="calssic pb-2">
            <p>Thinstant Classic.</p>
          </div>

          <div className="button mb-5">
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

        <div className="airpod-4 text-white text-center col-12 col-md">
          <div>
            <h1>AirPods 4</h1>
          </div>
          <div className="iconic">
            <p>
              Iconic.Now Super sonic. <br />
              Avilable with Active Noise cancellation. <sup>3</sup>
            </p>
          </div>
          <div className="button mt-4">
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
    </section>
  );
}

export default ThirdSection;
